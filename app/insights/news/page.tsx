import Script from 'next/script'
import React from 'react'

export const metadata = {
  title: "Latest IT Support News – Updates & Announcements | ITSupport.net.in",
  description: "Stay informed with the latest news, updates, and announcements from ITSupport.net.in, covering new services, partnerships, and industry trends.",
  keywords: [
    "IT support news",
    "IT industry updates",
    "ITSupport.net.in announcements",
    "technology news",
    "IT services news",
    "IT partnerships",
    "IT solutions updates"
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
    canonical: "https://www.itsupport.net.in/insights/news",
    languages: {
      "en": "https://www.itsupport.net.in/insights/news",
    }
  },
  openGraph: {
    type: "website",
    url: "https://www.itsupport.net.in/insights/news",
    title: "Latest IT Support News – Updates & Announcements | ITSupport.net.in",
    description: "Stay informed with the latest news, updates, and announcements from ITSupport.net.in, covering new services, partnerships, and industry trends.",
    siteName: "ITSupport.net.in | IT Support News",
    locale: "en_US",
    images: [{
      url: "image-url",
      alt: "Latest IT Support News",
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
    title: "Latest IT Support News – Updates & Announcements | ITSupport.net.in",
    description: "Stay informed with the latest news, updates, and announcements from ITSupport.net.in, covering new services, partnerships, and industry trends.",
    url: "https://www.itsupport.net.in/insights/news",
    images: [{
      url: "image-url",
      alt: "Latest IT Support News",
      type: "images/webp",
    }],
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.itsupport.net.in/insights/news#webpage",
      "url": "https://www.itsupport.net.in/insights/news",
      "name": "Latest IT Support News – Updates & Announcements| IT Support",
      "description": "IT Support provides Latest IT Support News – Updates & Announcements, managing the entire sales process from lead generation to deal closure, helping businesses increase revenue and optimize performance.",
      "inLanguage": "en",
      "datePublished": "2005-01-10T09:00:00+05:30",
      "dateModified": "2025-08-17T09:00:00+05:30",
      "publisher": {
        "@type": "Organization",
        "name": "Latest IT Support News – Updates & Announcements",
        "logo": {
          "@type": "ImageObject",
          "url": "image-url"
        },
        "url": "https://www.itsupport.net.in/insights/news"
      },
      "about": {
        "@type": "Thing",
        "name": "End-to-End services, Lead Generation, Sales Process Management, B2B Sales Solutions"
      }
    },

    {
      "@type": "Product",
      "@id": "#product",
      "name": "Latest IT Support News – Updates & Announcements",
      "image": ["image-url"],
      "description": "IT Support offers comprehensive Latest IT Support News – Updates & Announcements, managing the entire sales cycle from lead generation to deal closure, helping businesses increase revenue and optimize sales performance.",
      "url": "https://www.itsupport.net.in/insights/news",
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
          "name": "News",
          "item": "https://www.itsupport.net.in/insights/news/"
        }
      ]
    },

    {
      "@type": "WebSite",
      "url": "https://www.itsupport.net.in/insights/news",
      "name": "IT Support",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.itsupport.net.in/insights/news/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },

    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Alex Strangelove"
      },
      "name": "Outstanding Latest IT Support News – Updates & Announcements by IT Support",
      "url": "https://www.itsupport.net.in/insights/news",
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
      "name": "IT Support Latest IT Support News – Updates & Announcements",
      "image": "image-url",
      "@id": "",
      "url": "https://www.itsupport.net.in/insights/news",
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
        "https://www.itsupport.net.in/insights/news"
      ]
    },

    {
      "@type": "EmployerAggregateRating",
      "itemReviewed": {
        "@type": "Organization",
        "name": "IT Support Latest IT Support News – Updates & Announcements",
        "sameAs": "https://www.itsupport.net.in/insights/news"
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
          "name": "What are Latest IT Support News – Updates & Announcements at IT Support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "IT Support provides comprehensive Latest IT Support News – Updates & Announcements, managing the entire sales cycle from lead generation to deal closure, ensuring consistent revenue growth for businesses."
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
          "url": "https://www.itsupport.net.in/insights/news"
        },
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "IT Support manages the complete sales cycle including lead generation, prospecting, appointment setting, pipeline management, client follow-ups, and deal closure to ensure consistent revenue growth.",
          "dateCreated": "2025-07-14T10:00:00+05:30",
          "upvoteCount": 10,
          "url": "https://www.itsupport.net.in/insights/news#q1a1",
          "author": {
            "@type": "Person",
            "name": "Hugo Taylor",
            "url": "https://www.itsupport.net.in/insights/news"
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
          "url": "https://www.itsupport.net.in/insights/news"
        },
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Outsourcing sales to IT Support provides access to experienced sales professionals, proven strategies, and advanced tools, reducing overhead costs while accelerating lead conversion and revenue growth.",
          "dateCreated": "2025-07-14T10:10:00+05:30",
          "upvoteCount": 8,
          "url": "https://www.itsupport.net.in/insights/news#q3a1",
          "author": {
            "@type": "Person",
            "name": "Taylor Kiyovisky",
            "url": "https://www.itsupport.net.in/insights/news"
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
          "url": "https://www.itsupport.net.in/insights/news"
        },
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, IT Support customizes its end-to-end services strategies according to industry, business size, and target market, ensuring optimized lead generation, engagement, and conversion rates.",
          "dateCreated": "2025-07-14T10:15:00+05:30",
          "upvoteCount": 7,
          "url": "https://www.itsupport.net.in/insights/news#q4a1",
          "author": {
            "@type": "Person",
            "name": "Camilla Perry",
            "url": "https://www.itsupport.net.in/insights/news"
          }
        }
      }
    }
  ]
}

const page = () => {
  return (
    <>
    <div>News</div>
    <Script
          id="behavioral-marketing-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    </>
  )
}

export default page