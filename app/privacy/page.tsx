import PageCard, { PageSubSection } from "@/components/PageCard";
import { PagePara, PageParaPara } from "@/components/PagePara";
import PagePoints, { PagePoint, PagePointWithHeading } from "@/components/PagePoints";
import Typography from "@/components/ui/Typography";
import { basicMarkup } from "@/lib/markup";
import { getMetaData, getStaticParams } from "@/lib/seo";
import { useLocale, useTranslations } from "next-intl";
import parse from "html-react-parser";
import Script from "next/script";


export const generateStaticParams = getStaticParams('privacy')
// export const generateMetadata = getMetaData('privacy');

export const metadata = {
  title: "Privacy Policy – ITSupport.net.in | Secure IT Support Services",
  description: "Read ITSupport.net.in Privacy Policy. Learn how we collect, use, and protect your information while providing expert IT support services.",
  keywords: [
    "privacy policy",
    "ITSupport.net.in privacy",
    "data protection",
    "IT support privacy",
    "personal information security",
    "IT services privacy",
    "GDPR compliance",
    "data handling",
    "cookies policy",
    "user data protection"
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
    canonical: "https://www.itsupport.net.in/privacy/",
    languages: {
      "en": "https://www.itsupport.net.in/privacy/",
    }
  },
  openGraph: {
    type: "website",
    url: "https://www.itsupport.net.in/privacy/",
    title: "Privacy Policy – ITSupport.net.in | Data Protection & Security",
    description: "Understand how ITSupport.net.in collects, uses, and safeguards your personal information while providing professional IT support services.",
    siteName: "ITSupport.net.in | Privacy Policy",
    locale: "en_US",
    images: [{
      url: "image-url",
      alt: "Privacy Policy",
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
    title: "Privacy Policy – ITSupport.net.in | Secure IT Support Services",
    description: "Learn about ITSupport.net.in Privacy Policy, data collection, usage, and protection while offering expert IT support services.",
    url: "https://www.itsupport.net.in/privacy/",
    images: [{
      url: "image-url",
      alt: "Privacy Policy",
      type: "images/webp",
    }],
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.itsupport.net.in/privacy/#webpage",
      "url": "https://www.itsupport.net.in/privacy/",
      "name": "Privacy Policy – ITSupport.net.in | Secure IT Support Services | IT Support",
      "description": "IT Support provides Privacy Policy – ITSupport.net.in | Secure IT Support Services, managing the entire sales process from lead generation to deal closure, helping businesses increase revenue and optimize performance.",
      "inLanguage": "en",
      "datePublished": "2005-01-10T09:00:00+05:30",
      "dateModified": "2025-08-17T09:00:00+05:30",
      "publisher": {
        "@type": "Organization",
        "name": "IT Support Privacy Policy – ITSupport.net.in | Secure IT Support Services",
        "logo": {
          "@type": "ImageObject",
          "url": "image-url"
        },
        "url": "https://www.itsupport.net.in/privacy/"
      },
      "about": {
        "@type": "Thing",
        "name": "End-to-End Sales Outsourcing, Lead Generation, Sales Process Management, B2B Sales Solutions"
      }
    },

    {
      "@type": "Product",
      "@id": "#product",
      "name": "Privacy Policy – ITSupport.net.in | Secure IT Support Services",
      "image": ["image-url"],
      "description": "IT Support offers comprehensive Privacy Policy – ITSupport.net.in | Secure IT Support Services, managing the entire sales cycle from lead generation to deal closure, helping businesses increase revenue and optimize sales performance.",
      "url": "https://www.itsupport.net.in/privacy/",
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
          "name": "Privacy Policy",
          "item": "https://www.itsupport.net.in/privacy/"
        }
      ]
    },

    {
      "@type": "WebSite",
      "url": "https://www.itsupport.net.in/privacy/",
      "name": "IT Support",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.itsupport.net.in/privacy//search?q={search_term_string}"
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
      "name": "Outstanding Privacy Policy – ITSupport.net.in | Secure IT Support Services by IT Support",
      "url": "https://www.itsupport.net.in/privacy/",
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
      "name": "IT Support Privacy Policy – ITSupport.net.in | Secure IT Support Services",
      "image": "image-url",
      "@id": "",
      "url": "https://www.itsupport.net.in/privacy/",
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
        "https://www.itsupport.net.in/privacy/"
      ]
    },

    {
      "@type": "EmployerAggregateRating",
      "itemReviewed": {
        "@type": "Organization",
        "name": "IT Support Privacy Policy – ITSupport.net.in | Secure IT Support Services",
        "sameAs": "https://www.itsupport.net.in/privacy/"
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
          "name": "What are Privacy Policy – ITSupport.net.in | Secure IT Support Services at IT Support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "IT Support provides comprehensive Privacy Policy – ITSupport.net.in | Secure IT Support Services, managing the entire sales cycle from lead generation to deal closure, ensuring consistent revenue growth for businesses."
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
    },

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
          "url": "https://www.itsupport.net.in/privacy/"
        },
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "IT Support manages the complete sales cycle including lead generation, prospecting, appointment setting, pipeline management, client follow-ups, and deal closure to ensure consistent revenue growth.",
          "dateCreated": "2025-07-14T10:00:00+05:30",
          "upvoteCount": 10,
          "url": "https://www.itsupport.net.in/privacy/#q1a1",
          "author": {
            "@type": "Person",
            "name": "Mickey Taylor",
            "url": "https://www.itsupport.net.in/privacy/"
          }
        }
      }
    },

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
          "url": "https://www.itsupport.net.in/privacy/"
        },
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Outsourcing sales to IT Support provides access to experienced sales professionals, proven strategies, and advanced tools, reducing overhead costs while accelerating lead conversion and revenue growth.",
          "dateCreated": "2025-07-14T10:10:00+05:30",
          "upvoteCount": 8,
          "url": "https://www.itsupport.net.in/privacy/#q3a1",
          "author": {
            "@type": "Person",
            "name": "Mike David",
            "url": "https://www.itsupport.net.in/privacy/"
          }
        }
      }
    },

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
          "url": "https://www.itsupport.net.in/privacy/"
        },
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, IT Support customizes its end-to-end sales outsourcing strategies according to industry, business size, and target market, ensuring optimized lead generation, engagement, and conversion rates.",
          "dateCreated": "2025-07-14T10:15:00+05:30",
          "upvoteCount": 7,
          "url": "https://www.itsupport.net.in/privacy/#q4a1",
          "author": {
            "@type": "Person",
            "name": "Tom Woods",
            "url": "https://www.itsupport.net.in/privacy/"
          }
        }
      }
    }
  ]
}

export default function PrivacyPage() {
  // const decodedString = decodeURIComponent(params.slug);
  const locale = useLocale();
  let boxIndex = 0;
  const t = useTranslations('PrivacyPage');
  
  return (
    <div className="max-w-6xl 2xl:max-w-[1488px] mx-auto bg-white px-4 xl:px-0 py-5">
      <Typography variant="h2" className="text-center mt-8 mb-2">Privacy Policy - ITSupport.net.in</Typography>
      
      <PageCard noImage serial={boxIndex+=1}>
        <div className="italic flex w-full">Effective date: <span className="font-bold">August 27, 2025</span></div>
      </PageCard>
      
      <PageCard noImage serial={boxIndex+=1}>
        <PagePara desc={
          t("para")
        } />
      </PageCard>
      
      <PageCard noImage serial={boxIndex+=1} imageSrc="/assets/padlock-icon.svg">
        <PagePara title={t("scopeTitle")} desc={t("scopePara")} />
      </PageCard>
      
      <PageCard noImage serial={boxIndex+=1} imageSrc="/assets/padlock-icon.svg">
        <PagePoints title={t("infoCollectTitle")} subTitle={t("infoCollectSubTitle")}>
          <PagePointWithHeading heading={t("infoCollectPara.0.heading")} text={t("infoCollectPara.0.text")} />
          <PagePointWithHeading heading={t("infoCollectPara.1.heading")} text={t("infoCollectPara.1.text")} />
        </PagePoints>
      </PageCard>

      <PageCard noImage serial={boxIndex+=1}>
        <PagePoints title={t("howWeUseInfoTitle")} subTitle={t("howWeUseInfoSubTitle")} footerText={t("howWeUseInfoFooterText")}>
          <PagePoint><span>{t("howWeUseInfoPoints.0")}</span></PagePoint>
          <PagePoint><span>{t("howWeUseInfoPoints.1")}</span></PagePoint>
          <PagePoint><span>{t("howWeUseInfoPoints.2")}</span></PagePoint>
          <PagePoint><span>{t("howWeUseInfoPoints.3")}</span></PagePoint>
          <PagePoint><span>{t("howWeUseInfoPoints.4")}</span></PagePoint>
          <PagePoint><span>{t("howWeUseInfoPoints.5")}</span></PagePoint>
        </PagePoints>
      </PageCard>

      <PageCard noImage serial={boxIndex+=1}>
        <PagePara title={t("legalBasicTitle")} >
          <p>{parse(t.markup("legalBasicPara", basicMarkup ))}</p>
        </PagePara>
      </PageCard>

      <PageCard noImage serial={boxIndex+=1}>
        <PagePoints title={t("sharingTitle")} subTitle={t("sharingSubTitle")}>
          <PagePoint><span>{parse(t.markup("sharingPoints.0", basicMarkup))}</span></PagePoint>
          <PagePoint><span>{parse(t.markup("sharingPoints.1", basicMarkup))}</span></PagePoint>
          <PagePoint><span>{parse(t.markup("sharingPoints.2", basicMarkup))}</span></PagePoint>
          <PagePoint><span>{parse(t.markup("sharingPoints.3", basicMarkup))}</span></PagePoint>
        </PagePoints>
      </PageCard>

      <PageCard noImage serial={boxIndex+=1}>
        <PagePara title={t("dataSecurityTitle")}>
          <span>{parse(t('dataSecurityDesc'))}</span>
        </PagePara>
      </PageCard>

      <PageCard noImage serial={boxIndex+=1}>
        <PagePoints title={t("cookieTrackingTitle")} subTitle={t("cookieTrackingSubTitle")}>
          <PagePointWithHeading heading={t("cookieTrackingPoints.0.heading")} text={t("cookieTrackingPoints.0.text")} />
          <PagePointWithHeading heading={t("cookieTrackingPoints.1.heading")} text={t("cookieTrackingPoints.0.text")} />
          <PagePointWithHeading heading={t("cookieTrackingPoints.2.heading")} text={t("cookieTrackingPoints.0.text")} />
        </PagePoints>
      </PageCard>

      <PageCard noImage serial={boxIndex+=1}>
        <PagePara title={t("dataRetentionTitle")}>
          <span>{parse(t('dataRetentionDesc'))}</span>
        </PagePara>
      </PageCard>

      <PageCard noImage serial={boxIndex+=1} title={t("yourChoice.title")}>
        <PageSubSection title={t("yourChoice.general.title")}>
          <PagePoints>
            <PagePointWithHeading heading={t("yourChoice.general.points.0.heading")} text={t("yourChoice.general.points.0.text")} />
            <PagePointWithHeading heading={t("yourChoice.general.points.1.heading")} text={t("yourChoice.general.points.1.text")} />
            <PagePointWithHeading heading={t("yourChoice.general.points.2.heading")} text={t("yourChoice.general.points.2.text")} />
          </PagePoints>
        </PageSubSection>
        
        <PageSubSection title={t("yourChoice.ccap.title")}>
          <PagePara>
            <span>{parse(t.markup("yourChoice.ccap.desc", basicMarkup))}</span>
          </PagePara>
        </PageSubSection>
        
        <PageSubSection title={t("yourChoice.coppa.title")}>
          <PagePara>
            <span>{parse(t.markup("yourChoice.coppa.desc", basicMarkup))}</span>
          </PagePara>
        </PageSubSection>

        <PageSubSection title={t("yourChoice.hipaa.title")}>
          <PagePara>
            <span>{parse(t.markup("yourChoice.hipaa.desc", basicMarkup))}</span>
          </PagePara>
        </PageSubSection>
      </PageCard>

      <PageCard noImage serial={boxIndex+=1}>
        <PagePara title={t("intlTransferTitle")}>
          <span>{parse(t('intlTransferDesc'))}</span>
        </PagePara>
      </PageCard>

      <PageCard noImage serial={boxIndex+=1}>
        <PagePara title={t("tpLinksTitle")}>
          <span>{parse(t('tpLinksDesc'))}</span>
        </PagePara>
      </PageCard>

      <PageCard noImage serial={boxIndex+=1}>
        <PagePara title={t("lawEnforceTitle")}>
          <span>{parse(t('lawEnforceDesc'))}</span>
        </PagePara>
      </PageCard>

      <PageCard noImage serial={boxIndex+=1}>
        <PagePara title={t("changesTitle")}>
          <span>{parse(t('changesDesc'))}</span>
        </PagePara>
      </PageCard>
      <Script
          id="behavioral-marketing-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    </div>
  );
}