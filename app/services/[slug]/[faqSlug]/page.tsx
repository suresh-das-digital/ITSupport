// app/services/[serviceSlug]/[faqSlug]/page.tsx

import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { 
    getAllFaqRoutes,
    FaqItem, 
    getFaqsForService, 
    findServiceFaqBySlugs,
} from '@/lib/ServicesFaqData';
// Import the new generalized functions
// import { 
//     FaqItem, 
//     getFaqsForService, 
//     findServiceFaqBySlugs,
//     getAllFaqRoutes // Used for generateStaticParams
// } from '@/lib/AllFaqData'; // Update path as needed

// Define the shape of the dynamic parameters
interface PageParams {
    slug: string; // e.g., 'e-commerce-support-services'
    faqSlug: string;     // e.g., 'why-ecommerce-support-is-important'
}

// Function to generate all possible static routes at build time
export async function generateStaticParams() {
    // This ensures that only valid serviceSlug/faqSlug combinations are built
    return getAllFaqRoutes();
}

// Function to generate dynamic Metadata
export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
    const { slug, faqSlug } = params;
    
    // Find the specific FAQ using BOTH slugs
    const faq = findServiceFaqBySlugs(slug, faqSlug);
    
    if (!faq) return {};
  
    return {
      title: `${faq.question} | ItSupport`,
      description: faq.answer.substring(0, 160), 
      alternates: {
        // Canonical URL now correctly uses both dynamic segments
        canonical: `/services/${slug}/${faqSlug}`,
      },
    };
}

export default function ServiceFaqPage({ params }:{ params: PageParams }) {
    const { slug, faqSlug } = params; 
    
    // 1. Get the current FAQ item (must match the service slug)
    const faq = findServiceFaqBySlugs(slug, faqSlug);
    
    // 2. Get the list of ALL FAQs for this service (for the 'Other Questions' list)
    const allServiceFaqs = getFaqsForService(slug);

    if (!faq) {
        // This will only happen if the combination of serviceSlug and faqSlug 
        // does not exist in your data, preventing the incorrect mapping.
        notFound(); 
    }

    // Helper to format slugs for display (e.g., 'e-commerce-support-services' -> 'E-commerce Support Services')
    const serviceName = slug.replace(/-/g, ' ').split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');


    const singleFaqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{
            "@type": "Question",
            "name": faq?.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq?.detail_description || faq?.answer 
            }
        }]
    };

    return (
        <main className="min-h-screen bg-white text-gray-900 transition-colors duration-300">
            
            <div className="max-w-7xl 2xl:max-w-[1488px] mx-auto py-12 px-6 pt-[80px] ">
            
                {/* Inject Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(singleFaqSchema) }}
                />

                <div className="mb-12 text-center">
                    {/* Dynamic Service Name */}
                    <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
                        {serviceName} Resources
                    </h1>
                    <p className="text-xl text-gray-600">
                        Get all your queries about {serviceName} answered by L4RG's expert team.
                    </p>
                </div>


                <hr className="my-16 border-gray-700" />
                

                <div className="space-y-16">
                    <div className='w-full'>

                    </div>
                    <h2 className='text-3xl font-extrabold text-sky-700 mb-2 text-center'>
                        {/* The current Question */}
                        {faq.question} 
                    </h2>
                    
                    {/* Render the detail_description or the answer */}
                    {
                        faq.detail_description
                        ?
                        <div dangerouslySetInnerHTML={{ __html: faq.detail_description}}/>
                        :
                        <p className='text-xl font-extrabold text-gray-900 mb-8 text-center'>
                            {faq.answer}
                        </p>
                    }
                    

                    <hr className="my-16 border-gray-700" />

                {/* Dynamic Title for related questions */}
                <h2 className='text-3xl font-extrabold text-blue-700 mb-4'>
                    Other Questions About {serviceName}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                                {/* Use the service-specific FAQ list */}
                                {allServiceFaqs.map((faqItem) => (
                                    <article 
                                        key={faqItem.slug} 
                                        className="p-6 border border-gray-700 rounded-xl shadow-lg bg-gray-50 hover:bg-linear-to-br hover:from-gray-900 hover:to-sky-600 hover:shadow-2xl transition duration-300 group"
                                    >
                                        <Link 
                                            // The link must use the current serviceSlug in the path
                                            href={`/services/${slug}/${faqItem.slug}`} 
                                            className="block "
                                        >
                                            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-300 transition-colors">
                                                {faqItem.question}
                                            </h3>
                                            <p className="mt-2 text-sm text-gray-400 line-clamp-2">
                                                {faqItem.answer}
                                            </p>
                                            <span className="mt-3 inline-flex items-center text-blue-400 text-sm font-medium group-hover:text-blue-200">
                                                View L4RG's Full Article 
                                                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                            </span>
                                        </Link>
                                    </article>
                                ))}
                            </div>
                </div>

                <footer className="mt-16 text-center text-gray-500 border-t border-gray-700 pt-8">
                    <p>Can't find your specific question? <Link href="/contact-us" className="text-blue-500 hover:text-blue-300 transition-colors">Contact our L4RG experts</Link>.</p>
                </footer>
            </div>
        </main>
    );
}