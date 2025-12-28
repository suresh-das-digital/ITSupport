import PageCard, { PageSubSection } from "@/components/PageCard";
import { PagePara } from "@/components/PagePara";
import PagePoints, { PagePoint } from "@/components/PagePoints";
import { ContactData, ContactDataSection } from "@/components/ui/ContactData";
import Typography from "@/components/ui/Typography";
import { getBasicMarkup } from "@/lib/markup";
import { getMetaData, getStaticParams } from "@/lib/seo";
import { useLocale, useTranslations } from "next-intl";
import Script from "next/script";

export const generateStaticParams = getStaticParams('terms')
// export const generateMetadata = getMetaData('terms');

export const metadata = {
  title: "Terms of Service – ITSupport.net.in | Professional IT Support",
  description: "Review the Terms of Service for ITSupport.net.in, outlining the terms and conditions for using our professional IT support services.",
  keywords: [
    "terms of service",
    "ITSupport.net.in terms",
    "IT support terms",
    "service agreement",
    "user agreement",
    "IT services terms",
    "professional IT support terms",
    "service conditions",
    "IT support contract",
    "website terms of use"
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
    canonical: "https://www.itsupport.net.in/terms/",
    languages: {
      "en": "https://www.itsupport.net.in/terms/",
    }
  },
  openGraph: {
    type: "website",
    url: "https://www.itsupport.net.in/terms/",
    title: "Terms of Service – ITSupport.net.in | Professional IT Support",
    description: "Review the Terms of Service for ITSupport.net.in, outlining the terms and conditions for using our professional IT support services.",
    siteName: "ITSupport.net.in | Terms of Service",
    locale: "en_US",
    images: [{
      url: "image-url",
      alt: "Terms of Service",
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
    title: "Terms of Service – ITSupport.net.in | Professional IT Support",
    description: "Review the Terms of Service for ITSupport.net.in, outlining the terms and conditions for using our professional IT support services.",
    url: "https://www.itsupport.net.in/terms/",
    images: [{
      url: "image-url",
      alt: "Terms of Service",
      type: "images/webp",
    }],
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.itsupport.net.in/terms/#webpage",
      "url": "https://www.itsupport.net.in/terms/",
      "name": "Terms of Service – ITSupport.net.in | Professional IT Support | IT Support",
      "description": "IT Support provides Terms of Service – ITSupport.net.in | Professional IT Support, managing the entire sales process from lead generation to deal closure, helping businesses increase revenue and optimize performance.",
      "inLanguage": "en",
      "datePublished": "2005-01-10T09:00:00+05:30",
      "dateModified": "2025-08-17T09:00:00+05:30",
      "publisher": {
        "@type": "Organization",
        "name": "IT Support Terms of Service – ITSupport.net.in | Professional IT Support",
        "logo": {
          "@type": "ImageObject",
          "url": "image-url"
        },
        "url": "https://www.itsupport.net.in/terms/"
      },
      "about": {
        "@type": "Thing",
        "name": "End-to-End Sales Outsourcing, Lead Generation, Sales Process Management, B2B Sales Solutions"
      }
    },

    {
      "@type": "Product",
      "@id": "#product",
      "name": "Terms of Service – ITSupport.net.in | Professional IT Support",
      "image": ["image-url"],
      "description": "IT Support offers comprehensive Terms of Service – ITSupport.net.in | Professional IT Support, managing the entire sales cycle from lead generation to deal closure, helping businesses increase revenue and optimize sales performance.",
      "url": "https://www.itsupport.net.in/terms/",
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
          "name": "Terms of Services",
          "item": "https://www.itsupport.net.in/terms/"
        }
      ]
    },

    {
      "@type": "WebSite",
      "url": "https://www.itsupport.net.in/terms/",
      "name": "IT Support",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.itsupport.net.in/terms//search?q={search_term_string}"
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
      "name": "Outstanding Terms of Service – ITSupport.net.in | Professional IT Support by IT Support",
      "url": "https://www.itsupport.net.in/terms/",
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
          "addressLocality": "Durham",
          "addressRegion": "NC",
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
      "name": "IT Support Terms of Service – ITSupport.net.in | Professional IT Support",
      "image": "image-url",
      "@id": "",
      "url": "https://www.itsupport.net.in/terms/",
      "telephone": "+91-906-968-9226",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "IT Support, 105 ELMSFORD ST, DURHAM, NC 27703, USA",
        "addressLocality": "Durham",
        "addressRegion": "NC",
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
        "https://www.itsupport.net.in/terms/"
      ]
    },

    {
      "@type": "EmployerAggregateRating",
      "itemReviewed": {
        "@type": "Organization",
        "name": "IT Support Terms of Service – ITSupport.net.in | Professional IT Support",
        "sameAs": "https://www.itsupport.net.in/terms/"
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
          "name": "What are Terms of Service – ITSupport.net.in | Professional IT Support at IT Support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "IT Support provides comprehensive Terms of Service – ITSupport.net.in | Professional IT Support, managing the entire sales cycle from lead generation to deal closure, ensuring consistent revenue growth for businesses."
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
          "url": "https://www.itsupport.net.in/terms/"
        },
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "IT Support manages the complete sales cycle including lead generation, prospecting, appointment setting, pipeline management, client follow-ups, and deal closure to ensure consistent revenue growth.",
          "dateCreated": "2025-07-14T10:00:00+05:30",
          "upvoteCount": 10,
          "url": "https://www.itsupport.net.in/terms/#q1a1",
          "author": {
            "@type": "Person",
            "name": "Mickey Taylor",
            "url": "https://www.itsupport.net.in/terms/"
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
          "url": "https://www.itsupport.net.in/terms/"
        },
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Outsourcing sales to IT Support provides access to experienced sales professionals, proven strategies, and advanced tools, reducing overhead costs while accelerating lead conversion and revenue growth.",
          "dateCreated": "2025-07-14T10:10:00+05:30",
          "upvoteCount": 8,
          "url": "https://www.itsupport.net.in/terms/#q3a1",
          "author": {
            "@type": "Person",
            "name": "Mike David",
            "url": "https://www.itsupport.net.in/terms/"
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
          "url": "https://www.itsupport.net.in/terms/"
        },
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, IT Support customizes its end-to-end sales outsourcing strategies according to industry, business size, and target market, ensuring optimized lead generation, engagement, and conversion rates.",
          "dateCreated": "2025-07-14T10:15:00+05:30",
          "upvoteCount": 7,
          "url": "https://www.itsupport.net.in/terms/#q4a1",
          "author": {
            "@type": "Person",
            "name": "Charlette Holland",
            "url": "https://www.itsupport.net.in/terms/"
          }
        }
      }
    }
  ]
}

export default function TermsPage() {
  // const decodedString = decodeURIComponent(params.slug);
  const locale = useLocale();
  let boxIndex = 0;
  const t = useTranslations('TermsPage');
  const basicMarkup = getBasicMarkup(t);

  return (
    <div className="max-w-6xl 2xl:max-w-[1488px] mx-auto bg-white px-4 xl:px-0 py-5">
      <Typography variant="h2" className="text-center mt-8 mb-2">{t("pageHeading")}</Typography>
      
      <PageCard noImage serial={boxIndex+=1}>
        <div className="italic flex w-full">{t("effectiveDateTitle")} <span className="font-bold">{t("effectiveDate")}</span></div>
      </PageCard>
      
      <PageCard noImage serial={boxIndex+=1} title={t("acceptanceTerm.title")}>
        <PagePara desc={
          t.markup("acceptanceTerm.para", basicMarkup)
        } />
      </PageCard>

      <PageCard noImage serial={boxIndex+=1} title={t("scope.title")}>
        <PagePara desc={
          t.markup("scope.para", basicMarkup)
        } />
      </PageCard>

      
      <PageCard noImage serial={boxIndex+=1} title={t("conduct.title")} subTitle={t("conduct.subTitle")}>
        <PagePoints>
          <PagePoint>{t("conduct.points.0")}</PagePoint>
          <PagePoint>{t("conduct.points.1")}</PagePoint>
          <PagePoint>{t("conduct.points.2")}</PagePoint>
        </PagePoints>
      </PageCard>

      <PageCard noImage serial={boxIndex+=1} title={t("ip.title")}>
        <PagePara desc={
          t.markup("ip.para", basicMarkup)
        } />
      </PageCard>
      
      <PageCard noImage serial={boxIndex+=1} title={t("warranty.title")}>
        <PagePara desc={
          t.markup("warranty.para", basicMarkup)
        } />
      </PageCard>
      
      <PageCard noImage serial={boxIndex+=1} title={t("limit.title")}>
        <PagePara desc={
          t.markup("limit.para", basicMarkup)
        } />
      </PageCard>
      
      <PageCard noImage serial={boxIndex+=1} title={t("fee.title")}>
        <PagePara desc={
          t.markup("fee.para", basicMarkup)
        } />
      </PageCard>
      
      <PageCard noImage serial={boxIndex+=1} title={t("modification.title")}>
        <PagePara desc={
          t.markup("modification.para", basicMarkup)
        } />
      </PageCard>
      
      <PageCard noImage serial={boxIndex+=1} title={t("privacy.title")}>
        <PagePara desc={
          t.markup("privacy.para", basicMarkup)
        } />
      </PageCard>

      <PageCard noImage serial={boxIndex+=1} title={t("law.title")}>
        <PagePara desc={
          t.markup("law.para", basicMarkup)
        } />
      </PageCard>

      <PageCard noImage serial={boxIndex+=1} title={t("termination.title")}>
        <PagePara desc={
          t.markup("termination.para", basicMarkup)
        } />
      </PageCard>

      <PageCard noImage serial={boxIndex+=1} title={t("agreement.title")}>
        <PagePara desc={
          t.markup("agreement.para", basicMarkup)
        } />
      </PageCard>

      <PageCard noImage serial={boxIndex+=1} title={t("contact.title")} subTitle={t("contact.subTitle")}>
        <ContactData name={t("contact.contact.name")}>
          <ContactDataSection>
            <b>{t("contact.contact.name")}</b>
          </ContactDataSection>
          <ContactDataSection keyData={t("contact.contact.email.title")} value={t("contact.contact.email.value")} />
          <ContactDataSection keyData={t("contact.contact.address.title")} value={t("contact.contact.address.value")} />
          <ContactDataSection keyData={t("contact.contact.phone.title")} value={t("contact.contact.phone.value")} />
        </ContactData>

        <PageSubSection title={t("contact.compliance.title")}>
          <PagePoints>
            <PagePoint>{t("contact.compliance.points.0")}</PagePoint>
            <PagePoint>{t("contact.compliance.points.1")}</PagePoint>
            <PagePoint>{t("contact.compliance.points.2")}</PagePoint>
            <PagePoint>{t("contact.compliance.points.3")}</PagePoint>
          </PagePoints>
        </PageSubSection>
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