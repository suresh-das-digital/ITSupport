import { getMetaData } from "@/lib/seo";
import Script from "next/script";

export const generateMetadata = getMetaData('contact')

export const metedata = {
  title: "Contact IT Support – Remote Technical Assistance & Services", // [cite: 6]
  description: "Get in touch with ITSupport.net.in for reliable remote IT support, technical assistance, and consultation. We provide 24/7 support for hardware, software, network, cloud, and cybersecurity issues.", // [cite: 7]

  // Keywords converted to array
  keywords: [
    "IT support contact",
    "remote IT support",
    "technical assistance",
    "IT consultation",
    "hardware support",
    "software support",
    "network troubleshooting",
    "cloud services support",
    "antivirus support",
    "printer support",
    "Wi-Fi support",
    "e-commerce support",
    "email setup support"
  ], // [cite: 8]

  // author nested under 'authors'
  authors: [{
    name: "IT Support"
  }], // [cite: 27]
  copyright: "© 2025", // [cite: 28]

  // robots as an object
  robots: {
    index: true,
    follow: true
  }, // [cite: 30]

  // canonical nested under 'alternates'
  alternates: {
    canonical: "https://www.itsupport.net.in/contact/", // [cite: 33]
    languages: {
      "en": "https://www.itsupport.net.in/contact/", // [cite: 34]
    }
  },

  openGraph: {
    type: "website", // [cite: 19]
    url: "https://www.itsupport.net.in/contact/", // [cite: 11]
    title: "Contact ITSupport.net.in – Remote IT Support & Technical Assistance", // [cite: 12]
    description: "Reach out to ITSupport.net.in for expert remote IT support. Our certified team helps businesses resolve hardware, software, network, and cloud issues efficiently.", // [cite: 13]
    siteName: "ITSupport.net.in | Remote IT & Technical Support", // [cite: 15]
    locale: "en_US", // [cite: 31]

    // Image details aggregated into 'images' array
    images: [{
      url: "image-url", // [cite: 9]
      alt: "Contact ITSupport.net.in for Remote IT Assistance and Support Services", // [cite: 10]
      width: "Fix Size", // [cite: 17]
      height: "Fix Size", // [cite: 18]
      type: "images/webp", // [cite: 16]
      secure_url: "image-url" // [cite: 32]
    }],
  },

  twitter: {
    card: "summary_large_image", // [cite: 21]
    site: "@L4RGINDIA", // [cite: 29]
    creator: "@L4RGINDIA", // [cite: 29]
    title: "Contact ITSupport.net.in – Remote IT Support & Consultation", // [cite: 25]
    description: "Need technical assistance? ITSupport.net.in provides 24/7 remote IT support for hardware, software, network, cloud, antivirus, and printer issues.", // [cite: 26]
    url: "https://www.itsupport.net.in/contact/", // [cite: 24]

    // Image details aggregated into 'images' array
    images: [{
      url: "image-url", // [cite: 22]
      alt: "Contact ITSupport.net.in – Remote IT Support & Technical Assistance", // [cite: 23]
      type: "images/webp", // [cite: 20]
    }],
  },
}


const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.itsupport.net.in/contact/#webpage",
      "url": "https://www.itsupport.net.in/contact/",
      "name": "Contact IT Support – Remote Technical Assistance & Services | IT Support",
      "description": "IT Support provides Contact IT Support – Remote Technical Assistance & Services, managing the entire sales process from lead generation to deal closure, helping businesses increase revenue and optimize performance.",
      "inLanguage": "en",
      "datePublished": "2005-01-10T09:00:00+05:30",
      "dateModified": "2025-08-17T09:00:00+05:30",
      "publisher": {
        "@type": "Organization",
        "name": "IT Support Contact IT Support – Remote Technical Assistance & Services",
        "logo": {
          "@type": "ImageObject",
          "url": "image-url"
        },
        "url": "https://www.itsupport.net.in/contact/"
      },
      "about": {
        "@type": "Thing",
        "name": "End-to-End Sales Outsourcing, Lead Generation, Sales Process Management, B2B Sales Solutions"
      }
    }, // [cite: 141-154]

    {
      "@type": "Product",
      "@id": "#product",
      "name": "Contact IT Support – Remote Technical Assistance & Services",
      "image": ["image-url"],
      "description": "IT Support offers comprehensive Contact IT Support – Remote Technical Assistance & Services, managing the entire sales cycle from lead generation to deal closure, helping businesses increase revenue and optimize sales performance.",
      "url": "https://www.itsupport.net.in/contact/",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "9913711"
      },
      "audience": {
        "@type": "Audience",
        "name": "Business Owners, Sales Managers, and Entrepreneurs",
        "description": "Decision-makers seeking professional outsourced sales solutions to enhance lead generation, streamline sales processes, and boost overall revenue performance.",
        "audienceType": "Small and Medium Businesses,Startups,B2B Companies,Enterprise Sales Teams"
      }
    }, // [cite: 37-48]

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
          "name": "Contact",
          "item": "https://www.itsupport.net.in/contact/"
        }
      ]
    }, // [cite: 52-66]

    {
      "@type": "WebSite",
      "url": "https://www.itsupport.net.in/contact/",
      "name": "IT Support",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.itsupport.net.in/contact//search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    }, // [cite: 71-77]

    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Lara"
      },
      "name": "Outstanding Contact IT Support – Remote Technical Assistance & Services by IT Support",
      "url": "https://www.itsupport.net.in/contact/",
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
          "streetAddress": "IT Support, 105 ELMSFORD ST, DURHAM, NC 27703, USA", // [cite: 94]
          "addressLocality": "Durham", // Corrected from "ELMSFORD ST" [cite: 95]
          "addressRegion": "NC", // Corrected from "ELMSFORD ST" [cite: 96]
          "postalCode": "27703", // [cite: 97]
          "telephone": "+91-906-968-9226", // [cite: 98]
          "addressCountry": {
            "@type": "Country",
            "name": "US"
          }
        }
      }
    }, // [cite: 80-100]

    {
      "@type": "ProfessionalService",
      "name": "IT Support Contact IT Support – Remote Technical Assistance & Services",
      "image": "image-url",
      "@id": "",
      "url": "https://www.itsupport.net.in/contact/",
      "telephone": "+91-906-968-9226",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "IT Support, 105 ELMSFORD ST, DURHAM, NC 27703, USA", // [cite: 110]
        "addressLocality": "Durham", // Corrected from "ELMSFORD ST" [cite: 111]
        "addressRegion": "NC", // Added based on context
        "postalCode": "27703", // [cite: 112]
        "addressCountry": "US" // [cite: 113]
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
        "https://www.itsupport.net.in/contact/"
      ]
    }, // [cite: 103-128]

    {
      "@type": "EmployerAggregateRating",
      "itemReviewed": {
        "@type": "Organization",
        "name": "IT Support Contact IT Support – Remote Technical Assistance & Services",
        "sameAs": "https://www.itsupport.net.in/contact/"
      },
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "6199532"
    }, // [cite: 131-138]

    {
      "@type": "FAQPage",
      "mainEntity": [{
          "@type": "Question",
          "name": "What are Contact IT Support – Remote Technical Assistance & Services at IT Support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "IT Support provides comprehensive Contact IT Support – Remote Technical Assistance & Services, managing the entire sales cycle from lead generation to deal closure, ensuring consistent revenue growth for businesses."
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
          "name": "Does IT Support customize sales outsourcing strategies for different industries?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, IT Support tailors its end-to-end sales outsourcing strategies to fit each industry's unique needs, ensuring that lead generation, client outreach, and deal closing processes are optimized for maximum effectiveness."
          }
        },
        {
          "@type": "Question",
          "name": "What specific services are included in IT Support's sales outsourcing solutions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our services include lead generation, prospecting, appointment setting, sales pipeline management, client follow-up, CRM management, and full-cycle sales execution to support business growth."
          }
        },
        {
          "@type": "Question",
          "name": "Why should companies choose IT Support for end-to-end sales outsourcing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "With over 20 years of experience and a global client base, IT Support combines skilled professionals, advanced technology, and data-driven strategies to deliver scalable, efficient, and results-oriented sales outsourcing solutions."
          }
        }
      ]
    }, // [cite: 157-176]

    {
      "@type": "QAPage",
      "mainEntity": {
        "@type": "Question",
        "name": "What services are included in IT Support's End-to-End Sales Outsourcing?",
        "text": "Which aspects of the sales process does IT Support manage for businesses?",
        "answerCount": 1,
        "upvoteCount": 12,
        "datePublished": "2025-08-17T14:00:00+05:30",
        "author": {
          "@type": "Person",
          "name": "Roberts Willium",
          "url": "https://www.itsupport.net.in/contact/"
        },
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "IT Support manages the complete sales cycle including lead generation, prospecting, appointment setting, pipeline management, client follow-ups, and deal closure to ensure consistent revenue growth.",
          "dateCreated": "2025-07-14T10:00:00+05:30",
          "upvoteCount": 10,
          "url": "https://www.itsupport.net.in/contact/#q1a1",
          "author": {
            "@type": "Person",
            "name": "Mickey Taylor",
            "url": "https://www.itsupport.net.in/contact/"
          }
        }
      }
    }, // [cite: 179-196]

    {
      "@type": "QAPage",
      "mainEntity": {
        "@type": "Question",
        "name": "How does outsourcing sales to IT Support benefit my company?",
        "text": "What advantages do businesses gain by partnering with IT Support for sales outsourcing?",
        "answerCount": 1,
        "datePublished": "2025-08-17T14:00:00+05:30",
        "author": {
          "@type": "Person",
          "name": "Aishley Wilson",
          "url": "https://www.itsupport.net.in/contact/"
        },
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Outsourcing sales to IT Support provides access to experienced sales professionals, proven strategies, and advanced tools, reducing overhead costs while accelerating lead conversion and revenue growth.",
          "dateCreated": "2025-07-14T10:10:00+05:30",
          "upvoteCount": 8,
          "url": "https://www.itsupport.net.in/contact/#q3a1",
          "author": {
            "@type": "Person",
            "name": "Mike David",
            "url": "https://www.itsupport.net.in/contact/"
          }
        }
      }
    }, // [cite: 199-215]

    {
      "@type": "QAPage",
      "mainEntity": {
        "@type": "Question",
        "name": "Can IT Support customize sales outsourcing strategies for different industries?",
        "text": "Does IT Support tailor its sales services to the specific needs of various business sectors?",
        "answerCount": 1,
        "datePublished": "2025-08-17T14:00:00+05:30",
        "author": {
          "@type": "Person",
          "name": "Sumitranandan Ramaswamy",
          "url": "https://www.itsupport.net.in/contact/"
        },
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, IT Support customizes its end-to-end sales outsourcing strategies according to industry, business size, and target market, ensuring optimized lead generation, engagement, and conversion rates.",
          "dateCreated": "2025-07-14T10:15:00+05:30",
          "upvoteCount": 7,
          "url": "https://www.itsupport.net.in/contact/#q4a1",
          "author": {
            "@type": "Person",
            "name": "Robin Woods",
            "url": "https://www.itsupport.net.in/contact/"
          }
        }
      }
    } // [cite: 218-234]
  ]
}

export default function Contact() {
  return (
    <>
      {/* <Head /> */}
      <div className="min-h-screen flex flex-col bg-white text-gray-900 font-[family-name:var(--font-geist-sans)]">
        Contact
      </div>
      <Script
          id="behavioral-marketing-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />


    </>
  );
}


