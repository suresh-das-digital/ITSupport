import { useLocale, useTranslations } from "next-intl";
import { Globe, Server } from "lucide-react";

import CoreServiceCard from "@/components/cards/CoreServiceCard";
import Typography from "@/components/ui/Typography";
import outCoreData, { outCoreDataEs } from "@/utils/constant/outCoreData";
import ServiceWhyChoose from "./_component/ServiceWhyChoose";
import FAQs from "@/components/FAQ/FAQs";
import {
  heroServicesData,
  heroServicesDataEs,
  ServiceFQAsData,
  ServiceFQAsDataEs,
} from "./_component/constant";
import ServiceOffer from "./_component/ServiceOffer";
import HeroSection from "@/components/HeroSection";
import { whyChooseDataDetail } from "./_component/ServiceWhyChooseConstant";
import { getMetaData, getStaticParams } from "@/lib/seo";
import HeroInformattionPage from "@/components/common/HeroInformattionPage";
import FaqSection from "@/components/common/FaqSection";
import Script from "next/script";

export const generateStaticParams = getStaticParams('services', ['/'])
// export const generateMetadata = getMetaData('services');

export const metadata = {
  title: "Comprehensive IT Support Services – 20+ Years of Expertise",
  description: "Explore ITSupport.net.in's wide range of IT support services, including data backup, antivirus, network, cloud, e-commerce, hardware repair, and more. Trusted by over 50,000 clients worldwide.",
  keywords: [
    "IT support services",
    "data backup support",
    "antivirus support",
    "network support",
    "cloud support",
    "e-commerce support",
    "hardware repair",
    "printer support",
    "email setup",
    "Wi-Fi network support",
    "IT solutions",
    "remote tech support",
    "IT support India",
    "IT support USA",
    "IT support UK",
    "IT support Australia",
    "IT support Germany",
    "IT support France",
    "IT support Canada"
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
    canonical: "https://www.itsupport.net.in/services/",
    languages: {
      "en": "https://www.itsupport.net.in/services/",
    }
  },
  openGraph: {
    type: "website",
    url: "https://www.itsupport.net.in/services/",
    title: "Comprehensive IT Support Services – 20+ Years of Expertise",
    description: "Discover ITSupport.net.in's extensive IT support services, offering solutions for data backup, antivirus, network, cloud, e-commerce, hardware repair, and more. Serving clients globally with over 20 years of experience.",
    siteName: "ITSupport.net.in | Comprehensive IT Support Services",
    locale: "en_US",
    images: [{
      url: "image-url",
      alt: "Comprehensive IT Support Services",
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
    title: "Comprehensive IT Support Services – 20+ Years of Expertise",
    description: "Explore ITSupport.net.in's wide range of IT support services, including data backup, antivirus, network, cloud, e-commerce, hardware repair, and more. Trusted by over 50,000 clients worldwide.",
    url: "https://www.itsupport.net.in/services/",
    images: [{
      url: "image-url",
      alt: "Comprehensive IT Support Services",
      type: "images/webp",
    }],
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.itsupport.net.in/services/#webpage",
      "url": "https://www.itsupport.net.in/services/",
      "name": "Comprehensive IT Support Services – 20+ Years of Expertise | IT Support",
      "description": "IT Support provides Comprehensive IT Support Services – 20+ Years of Expertise, managing the entire sales process from lead generation to deal closure, helping businesses increase revenue and optimize performance.",
      "inLanguage": "en",
      "datePublished": "2005-01-10T09:00:00+05:30",
      "dateModified": "2025-08-17T09:00:00+05:30",
      "publisher": {
        "@type": "Organization",
        "name": "IT Support Comprehensive IT Support Services – 20+ Years of Expertise",
        "logo": {
          "@type": "ImageObject",
          "url": "image-url"
        },
        "url": "https://www.itsupport.net.in/services/"
      },
      "about": {
        "@type": "Thing",
        "name": "End-to-End services, Lead Generation, Sales Process Management, B2B Sales Solutions"
      }
    },

    {
      "@type": "Product",
      "@id": "#product",
      "name": "Comprehensive IT Support Services – 20+ Years of Expertise",
      "image": ["image-url"],
      "description": "IT Support offers comprehensive Comprehensive IT Support Services – 20+ Years of Expertise, managing the entire sales cycle from lead generation to deal closure, helping businesses increase revenue and optimize sales performance.",
      "url": "https://www.itsupport.net.in/services/",
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
          "item": "https://www.itsupport.net.in"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://www.itsupport.net.in/services/"
        }
      ]
    },

    {
      "@type": "WebSite",
      "url": "https://www.itsupport.net.in/services/",
      "name": "IT Support",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.itsupport.net.in/services//search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },

    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Lara"
      },
      "name": "Outstanding Comprehensive IT Support Services – 20+ Years of Expertise by IT Support",
      "url": "https://www.itsupport.net.in/services/",
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
      "name": "IT Support Comprehensive IT Support Services – 20+ Years of Expertise",
      "image": "image-url",
      "@id": "",
      "url": "https://www.itsupport.net.in/services/",
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
        "https://www.itsupport.net.in/services/"
      ]
    },

    {
      "@type": "EmployerAggregateRating",
      "itemReviewed": {
        "@type": "Organization",
        "name": "IT Support Comprehensive IT Support Services – 20+ Years of Expertise",
        "sameAs": "https://www.itsupport.net.in/services/"
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
          "name": "What are Comprehensive IT Support Services – 20+ Years of Expertise at IT Support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "IT Support provides comprehensive Comprehensive IT Support Services – 20+ Years of Expertise, managing the entire sales cycle from lead generation to deal closure, ensuring consistent revenue growth for businesses."
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
          "url": "https://www.itsupport.net.in/services/"
        },
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "IT Support manages the complete sales cycle including lead generation, prospecting, appointment setting, pipeline management, client follow-ups, and deal closure to ensure consistent revenue growth.",
          "dateCreated": "2025-07-14T10:00:00+05:30",
          "upvoteCount": 10,
          "url": "https://www.itsupport.net.in/services/#q1a1",
          "author": {
            "@type": "Person",
            "name": "Mickey Taylor",
            "url": "https://www.itsupport.net.in/services/"
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
          "name": "Robert Wilson",
          "url": "https://www.itsupport.net.in/services/"
        },
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Outsourcing sales to IT Support provides access to experienced sales professionals, proven strategies, and advanced tools, reducing overhead costs while accelerating lead conversion and revenue growth.",
          "dateCreated": "2025-07-14T10:10:00+05:30",
          "upvoteCount": 8,
          "url": "https://www.itsupport.net.in/services/#q3a1",
          "author": {
            "@type": "Person",
            "name": "Taylor Kiyovisky",
            "url": "https://www.itsupport.net.in/services/"
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
          "url": "https://www.itsupport.net.in/services/"
        },
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, IT Support customizes its end-to-end services strategies according to industry, business size, and target market, ensuring optimized lead generation, engagement, and conversion rates.",
          "dateCreated": "2025-07-14T10:15:00+05:30",
          "upvoteCount": 7,
          "url": "https://www.itsupport.net.in/services/#q4a1",
          "author": {
            "@type": "Person",
            "name": "Robin Woods",
            "url": "https://www.itsupport.net.in/services/"
          }
        }
      }
    }
  ]
}

export default function Services() {
  const locale = useLocale();
  const t = useTranslations("Services");
  const heroServices = locale === "es" ? heroServicesDataEs : heroServicesData;
  const outCore = locale === "es" ? outCoreDataEs : outCoreData;
  const serviceFQA = locale === "es" ? ServiceFQAsDataEs : ServiceFQAsData;
  console.log("heroServices");

  const serviceProvider = {
    imageAlt: t("ServiceProvider.imageAlt"),
    imageTitle: t("ServiceProvider.imageTitle"),
    imageSrc:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    title: t("ServiceProvider.title"),
    highlight: t("ServiceProvider.highlight"),
    subtitle: t("ServiceProvider.description"),
  };

  return (
    <>
      {/* <HeroSection
        heroTitle={`${t(
          "heroTitle"
        )} <span class="text-[#61CE70] hover:text-[#4CAF50] transition-colors duration-300">${t(
          "heroHighlight"
        )}</span> ${t("heroServices")}`}
        heroIntro={`${t(
          "heroIntro1"
        )} <span className="text-[#61CE70] hover:text-[#4CAF50] transition-colors duration-300"> ITSupport.net.in </span> ${t(
          "heroIntro2"
        )}`}
        rightSideIcons={[
          <Globe className="w-6 h-6 text-white" />,
          <Server className="w-6 h-6 text-white" />,
        ]}
        buttonTexts={[{ label: "Explore Service", href: "#" }]}
        breadcrumbs={[{ home: "Home" }, { home: "Services" }]}
        imageSrc="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80"
      /> */}
      <HeroInformattionPage
        title="ITSupport.net.in — Our Services"
        subtitle1="Delivering Reliable, Secure IT Support You Can Count On"
        subtitle2="At ITSupport.net.in, we offer a full spectrum of tech support services—whether you’re a startup, evolving SMB, or established enterprise. Our suite of services is designed to keep your technology running efficiently, securely, and future-ready."
        pageName="Services"
      />

      <ServiceOffer
        serviceProvider={serviceProvider}
        heroServices={heroServices}
      />

      <section className="py-16 px-4 sm:px-6 bg-[#f4f7fa] max-w-6xl 2xl:max-w-[1488px] mx-auto xl:px-0">
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <div className="w-full p-4 xl:px-0">
            <div className="text-center mb-16">
              <span className="inline-block bg-gradient-to-r from-[#61CE70] via-blue-500 to-[#61CE70] text-white px-1 py-1 sm:px-1 sm:py-1 rounded-full font-semibold shadow-xl text-xs tracking-wide group mb-4">
                {t("coreServices")}
              </span>

              <Typography variant="h2" className="font-bold text-gray-900 mb-4">
                {t("reliableITSupport")}{" "}
                <span className="text-[#61CE70] hover:text-[#4CAF50] transition-colors duration-300">
                  {t("reliableHighlight")}
                </span>{" "}
                {t("forEveryBusinessStage")}
              </Typography>

              <p className="text-lg text-center text-gray-700 mb-12 max-w-4xl mx-auto">
                {t("comprehensiveRange1")}{" "}
                <span className="text-[#61CE70] hover:text-[#4CAF50] transition-colors duration-300">
                  ITSupport.net.in
                </span>{" "}
                {t("comprehensiveRange2")}
              </p>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              style={{ opacity: 1 }}
            >
              {outCore.map((core, index) => (
                <CoreServiceCard
                  key={`ourCoreService-${core.label}-${index}`}
                  label={core.label}
                  desc={core.desc}
                  icon={core.icon}
                  theme={core.theme}
                  href={core.href}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServiceWhyChoose
        cards={whyChooseDataDetail}
        title="Why Partner with ITSupport.net.in for Email Excellence"
        desc="Choosing ITSupport.net.in as your email support partner means leveraging over a decade of specialized expertise and a global track record of empowering 100,000+ satisfied customers. Our commitment to your uninterrupted communication is built on"
      />
      {/* <FAQs data={serviceFQA} /> */}

      <FaqSection faqs={serviceFQA} />

      <Script
          id="behavioral-marketing-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    </>
  );
}
