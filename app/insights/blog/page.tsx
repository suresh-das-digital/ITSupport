import FaqSection from '@/components/common/FaqSection'
import HeroInformattionPage from '@/components/common/HeroInformattionPage'
import React from 'react'
import BlogMattersSection from './components/BlogMattersSection';
import BlogYouWillFind from './components/BlogYouWillFind';
import WhoOurBlogsIsFor from './components/WhoOurBlogsIsFor';
import BlogInfos from './components/BlogInfos';
import Script from 'next/script';

const faqs = [
  {
    label: "What topics does the ITSupport.net.in Blog cover?",
    desc: "We cover IT support, network solutions, cybersecurity, cloud computing, troubleshooting guides, and industry trends—all tailored for both businesses and individual users.",
  },
  {
    label: "How often is the blog updated?",
    desc: "Our blog is updated weekly to ensure you have access to the latest insights, tips, and news in the IT services sector.",
  },
  {
    label: "Can I contribute to the blog as a guest author?",
    desc: "Yes. We welcome guest contributions from IT professionals with original, valuable content relevant to our audience.",
  },
  {
    label: "How do you ensure your blog content is accurate?",
    desc: "All posts are researched, written, and reviewed by certified IT experts, ensuring accuracy, relevance, and practical usability.",
  },
  {
    label: "How can I subscribe or share blog posts?",
    desc: "You can subscribe via our email newsletter or follow us on social media for updates. Sharing is easy—use the social share buttons on each post to send articles to your network.",
  }
];

export const metadata = {
  title: "IT Support Blog – Tips, Trends & How-Tos | ITSupport.net.in",
  description: "Explore expert articles on IT support, cybersecurity, networking, and technology trends at ITSupport.net.in's blog. Stay informed with our latest insights.",
  keywords: [
    "IT support blog",
    "cybersecurity tips",
    "networking trends",
    "technology how-tos",
    "IT solutions",
    "IT industry news",
    "ITSupport.net.in insights"
  ],
  authors: [{
    name: "IT Support"
  }],
  copyright: "© 2025",
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: "https://www.itsupport.net.in/insights/blog",
    languages: {
      "en": "https://www.itsupport.net.in/insights/blog",
    }
  },
  openGraph: {
    type: "website",
    url: "https://www.itsupport.net.in/insights/blog",
    title: "IT Support Blog – Tips, Trends & How-Tos | ITSupport.net.in",
    description: "Explore expert articles on IT support, cybersecurity, networking, and technology trends at ITSupport.net.in's blog. Stay informed with our latest insights.",
    siteName: "ITSupport.net.in | IT Support Blog",
    locale: "en_US",
    images: [{
      url: "image-url",
      alt: "IT Support Blog",
      width: "Fix Size",
      height: "Fix Size",
      type: "images/webp",
      secure_url: "image-url"
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@L4RGINDIA",
    creator: "@L4RGINDIA",
    title: "IT Support Blog – Tips, Trends & How-Tos | ITSupport.net.in",
    description: "Explore expert articles on IT support, cybersecurity, networking, and technology trends at ITSupport.net.in's blog. Stay informed with our latest insights.",
    url: "https://www.itsupport.net.in/insights/blog",
    images: [{
      url: "image-url",
      alt: "IT Support Blog",
      type: "images/webp",
    }],
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.itsupport.net.in/insights/blog#webpage",
      "url": "https://www.itsupport.net.in/insights/blog",
      "name": "IT Support Blog – Tips, Trends & How-Tos | IT Support",
      "description": "IT Support provides IT Support Blog – Tips, Trends & How-Tos | ITSupport.net.in, managing the entire sales process from lead generation to deal closure, helping businesses increase revenue and optimize performance.",
      "inLanguage": "en",
      "datePublished": "2005-01-10T09:00:00+05:30",
      "dateModified": "2025-08-17T09:00:00+05:30",
      "publisher": {
        "@type": "Organization",
        "name": "IT Support Blog – Tips, Trends & How-Tos | ITSupport.net.in",
        "logo": {
          "@type": "ImageObject",
          "url": "image-url"
        },
        "url": "https://www.itsupport.net.in/insights/blog"
      },
      "about": {
        "@type": "Thing",
        "name": "End-to-End services, Lead Generation, Sales Process Management, B2B Sales Solutions"
      }
    },

    {
      "@type": "Product",
      "@id": "#product",
      "name": "IT Support Blog – Tips, Trends & How-Tos | ITSupport.net.in",
      "image": ["image-url"],
      "description": "IT Support offers comprehensive IT Support Blog – Tips, Trends & How-Tos | ITSupport.net.in, managing the entire sales cycle from lead generation to deal closure, helping businesses increase revenue and optimize sales performance.",
      "url": "https://www.itsupport.net.in/insights/blog",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "9913587"
      },
      "audience": {
        "@type": "Audience",
        "name": "Business Owners, Sales Managers, and Entrepreneurs",
        "description": "Decision-makers seeking professional outsourced sales solutions to enhance lead generation, streamline sales processes, and boost overall revenue performance.",
        "audienceType": "Small and Medium Businesses,Startups,B2B Companies,Enterprise Sales Teams"
      }
    },

    {
      "@type": "BreadcrumbList",
      "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.itsupport.net.in/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Insights",
          "item": "https://www.itsupport.net.in/insights/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Blog",
          "item": "https://www.itsupport.net.in/insights/blog/"
        }
      ]
    },

    {
      "@type": "WebSite",
      "url": "https://www.itsupport.net.in/insights/blog",
      "name": "IT Support",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.itsupport.net.in/insights/blog/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },

    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Momina Mushtehasan"
      },
      "name": "Outstanding IT Support Blog – Tips, Trends & How-Tos | ITSupport.net.in by IT Support",
      "url": "https://www.itsupport.net.in/insights/blog",
      "image": "image-url",
      "reviewBody": "IT Support has transformed our sales operations with their end-to-end outsourcing solutions. Their team managed everything from lead generation to deal closure, significantly increasing our revenue and freeing up our internal resources. Highly professional, reliable, and results-driven.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.9"
      },
      "itemReviewed": {
        "@type": "LocalBusiness",
        "name": "IT Support",
        "priceRange": "12000",
        "image": "image-url",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "IT Support, 105 ELMSFORD ST, DURHAM, NC 27703, USA",
          "addressLocality": "ELMSFORD ST",
          "addressRegion": "ELMSFORD ST",
          "postalCode": "27703",
          "telephone": "+91-906-968-9226",
          "addressCountry": {
            "@type": "Country",
            "name": "US"
          }
        }
      }
    },

    {
      "@type": "ProfessionalService",
      "name": "IT Support IT Support Blog – Tips, Trends & How-Tos | ITSupport.net.in",
      "image": "image-url",
      "@id": "",
      "url": "https://www.itsupport.net.in/insights/blog",
      "telephone": "+91-906-968-9226",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "IT Support, 105 ELMSFORD ST, DURHAM, NC 27703, USA",
        "addressLocality": "ELMSFORD ST",
        "postalCode": "27703",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 35.96039,
        "longitude": -78.8272
      },
      "priceRange": "$",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      "sameAs": [
        "https://www.facebook.com/L4RGINDIA/",
        "https://twitter.com/L4rgindia",
        "https://www.instagram.com/l4rgllc/",
        "https://www.youtube.com/c/L4RGINDIA",
        "https://in.linkedin.com/company/l4rgindia",
        "https://in.pinterest.com/L4RGINDIA/",
        "https://l4rgcompany.quora.com/",
        "https://www.itsupport.net.in/insights/blog"
      ]
    },

    {
      "@type": "EmployerAggregateRating",
      "itemReviewed": {
        "@type": "Organization",
        "name": "IT Support IT Support Blog – Tips, Trends & How-Tos | ITSupport.net.in",
        "sameAs": "https://www.itsupport.net.in/insights/blog"
      },
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "6199532"
    },

    {
      "@type": "FAQPage",
      "mainEntity": [{
          "@type": "Question",
          "name": "What are IT Support Blog – Tips, Trends & How-Tos | ITSupport.net.in at IT Support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "IT Support provides comprehensive IT Support Blog – Tips, Trends & How-Tos | ITSupport.net.in, managing the entire sales cycle from lead generation to deal closure, ensuring consistent revenue growth for businesses."
          }
        },
        {
          "@type": "Question",
          "name": "How can IT Support help my company increase sales through outsourcing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "By outsourcing sales to IT Support, businesses gain access to skilled sales professionals, proven strategies, and advanced tools that accelerate the sales process, improve conversion rates, and maximize revenue."
          }
        },
        {
          "@type": "Question",
          "name": "Does IT Support customize services strategies for different industries?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, IT Support tailors its end-to-end services strategies to fit each industry's unique needs, ensuring that lead generation, client outreach, and deal closing processes are optimized for maximum effectiveness."
          }
        },
        {
          "@type": "Question",
          "name": "What specific services are included in IT Support's services solutions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our services include lead generation, prospecting, appointment setting, sales pipeline management, client follow-up, CRM management, and full-cycle sales execution to support business growth."
          }
        },
        {
          "@type": "Question",
          "name": "Why should companies choose IT Support for end-to-end services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "With over 20 years of experience and a global client base, IT Support combines skilled professionals, advanced technology, and data-driven strategies to deliver scalable, efficient, and results-oriented services solutions."
          }
        }
      ]
    },

    {
      "@type": "QAPage",
      "mainEntity": {
        "@type": "Question",
        "name": "What services are included in IT Support's End-to-End services?",
        "text": "Which aspects of the sales process does IT Support manage for businesses?",
        "answerCount": 1,
        "upvoteCount": 12,
        "datePublished": "2025-08-17T14:00:00+05:30",
        "author": {
          "@type": "Person",
          "name": "Cherry James",
          "url": "https://www.itsupport.net.in/insights/blog"
        },
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "IT Support manages the complete sales cycle including lead generation, prospecting, appointment setting, pipeline management, client follow-ups, and deal closure to ensure consistent revenue growth.",
          "dateCreated": "2025-07-14T10:00:00+05:30",
          "upvoteCount": 10,
          "url": "https://www.itsupport.net.in/insights/blog#q1a1",
          "author": {
            "@type": "Person",
            "name": "Mickey Taylor",
            "url": "https://www.itsupport.net.in/insights/blog"
          }
        }
      }
    },

    {
      "@type": "QAPage",
      "mainEntity": {
        "@type": "Question",
        "name": "How does outsourcing sales to IT Support benefit my company?",
        "text": "What advantages do businesses gain by partnering with IT Support for services?",
        "answerCount": 1,
        "datePublished": "2025-08-17T14:00:00+05:30",
        "author": {
          "@type": "Person",
          "name": "Richard Wilson",
          "url": "https://www.itsupport.net.in/insights/blog"
        },
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Outsourcing sales to IT Support provides access to experienced sales professionals, proven strategies, and advanced tools, reducing overhead costs while accelerating lead conversion and revenue growth.",
          "dateCreated": "2025-07-14T10:10:00+05:30",
          "upvoteCount": 8,
          "url": "https://www.itsupport.net.in/insights/blog#q3a1",
          "author": {
            "@type": "Person",
            "name": "Taylor Kiyovisky",
            "url": "https://www.itsupport.net.in/insights/blog"
          }
        }
      }
    },

    {
      "@type": "QAPage",
      "mainEntity": {
        "@type": "Question",
        "name": "Can IT Support customize services strategies for different industries?",
        "text": "Does IT Support tailor its sales services to the specific needs of various business sectors?",
        "answerCount": 1,
        "datePublished": "2025-08-17T14:00:00+05:30",
        "author": {
          "@type": "Person",
          "name": "Diego Fabio",
          "url": "https://www.itsupport.net.in/insights/blog"
        },
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, IT Support customizes its end-to-end services strategies according to industry, business size, and target market, ensuring optimized lead generation, engagement, and conversion rates.",
          "dateCreated": "2025-07-14T10:15:00+05:30",
          "upvoteCount": 7,
          "url": "https://www.itsupport.net.in/insights/blog#q4a1",
          "author": {
            "@type": "Person",
            "name": "Camilla Perry",
            "url": "https://www.itsupport.net.in/insights/blog"
          }
        }
      }
    }
  ]
}

const page = () => {
  return (
    <div>
      <HeroInformattionPage
        title='ITSupport.net.in Blog – Your Go-To Resource for IT Support & Network Solutions'
        subtitle1=''
        subtitle2=''
        pageName='Insights  →  Blogs'
      />
      <BlogMattersSection/>
      <BlogYouWillFind/>
      <WhoOurBlogsIsFor/>
      <BlogInfos/>
      <FaqSection
        faqs={faqs}
      />
      <Script
          id="behavioral-marketing-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    </div>
  )
}

export default page