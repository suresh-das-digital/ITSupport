// new shivam

import { title } from "process";

interface Industry {
    slug: string;
    title?: string;
    subtitle?: string;
    description?: string;
    imageUrl?: string;
    metadata?: any;
    schema:any;
}

const industriesData:Industry[] = [
    {
        slug:"healthcare",
        title:"Healthcare IT Support Services",
        subtitle:"",
        description:"",
        imageUrl:"",
        metadata:{
            title: "Healthcare IT Support Services",
            description:
              "Specialized IT support for hospitals, clinics, and medical facilities. HIPAA compliance, EHR management, secure backups, and 24/7 assistance.",
            keywords: [
              "healthcare IT support",
              "healthcare IT services",
              "hospital IT assistance",
              "medical network support",
              "EHR support",
              "HIPAA compliant IT services",
              "healthcare data backup",
              "healthcare cloud solutions",
              "healthcare network troubleshooting",
              "managed healthcare IT services",
            ],
            openGraph: {
              title: "Healthcare IT Support Services",
              description:
                "Specialized healthcare IT support for hospitals, clinics, and medical facilities. HIPAA compliance, EHR assistance, secure backups, and 24/7 technical help.",
              url: "https://www.itsupport.net.in/industries/healthcare/",
              siteName: "Healthcare IT Support Services",
              images: [
                {
                  url: "image-url",
                  alt: "Professional Healthcare IT Support Services",
                  type: "images/png",
                  width: "Fix Size",
                  height: "Fix Size",
                  secureUrl: "image-url",
                },
              ],
              type: "website",
              locale: "en_US",
            },
            twitter: {
              card: "summary_large_image",
              title: "Hospital & Medical IT Services",
              description:
                "Trusted healthcare IT support solutions. Network monitoring, cloud services, and HIPAA-compliant assistance for medical organizations.",
              image: "image-url",
              imageAlt: "Healthcare IT Support Services",
              imageType: "images/png",
              creator: "@L4RGINDIA",
              url: "https://www.itsupport.net.in/industries/healthcare/",
            },
            authors: [{ name: "Healthcare Support industry" }],
            copyright: "© 2025",
            robots: { index: true, follow: true },
            alternates: {
              canonical: "https://www.itsupport.net.in/industries/healthcare/",
              languages: {
                "en-US": "https://www.itsupport.net.in/industries/healthcare/",
              },
            },
          },
        schema:{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@id": "#product",
                "@type": "Product",
                "name": "Healthcare IT Support Services",
                "description": "Comprehensive IT support for the healthcare industry, including EHR system assistance, HIPAA-compliant cloud solutions, secure data backup, network monitoring, and 24/7 technical help for hospitals, clinics, and medical facilities.",
                "url": "https://www.itsupport.net.in/industries/healthcare",
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "986518"
                },
                "audience": {
                  "@type": "Audience",
                  "description": "Healthcare providers and organizations seeking specialized IT support services including secure network management, HIPAA compliance, data protection, and 24/7 technical assistance.",
                  "audienceType": "Healthcare Organizations, Hospitals, Clinics, Medical Practices"
                }
              },
              {
                "@type": "WebSite",
                "url": "https://www.itsupport.net.in/industries/healthcare",
                "name": "L4RG Healthcare IT Support Services",
                "description": "Specialized IT support services for the healthcare industry, including EHR assistance, HIPAA-compliant cloud solutions, secure backups, and 24/7 technical help for hospitals and clinics.",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://www.itsupport.net.in/search?q={search_term_string}"
                  },
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@type": "Review",
                "name": "Expert Healthcare IT Support Services | HIPAA-Compliant Assistance",
                "url": "https://www.itsupport.net.in/industries/healthcare",
                "image": "https://www.itsupport.net.in/images/healthcare-it-support.jpg",
                "author": {
                  "@type": "Person",
                  "name": "Mike"
                },
                "reviewBody": "Best healthcare IT support in the USA, offering HIPAA compliance, EHR management, secure data backup, and 24/7 technical assistance for hospitals and clinics.",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "4.8"
                },
                "itemReviewed": {
                  "@type": "LocalBusiness",
                  "name": "L4RG US LLC",
                  "priceRange": "12000",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "L4RG US LLC, 105 ELMSFORD ST, DURHAM, NC 27703, USA",
                    "addressLocality": "ELMSFORD ST",
                    "addressRegion": "ELMSFORD ST",
                    "postalCode": "27703",
                    "telephone": "+1-978-615-9403",
                    "addressCountry": {
                      "@type": "Country",
                      "name": "US"
                    }
                  }
                }
              },
              {
                "@type": "ProfessionalService",
                "name": "Healthcare IT Support Services",
                "image": "https://www.itsupport.net.in/images/healthcare-it-support.jpg",
                "@id": "https://www.itsupport.net.in/industries/healthcare",
                "url": "https://www.itsupport.net.in/",
                "telephone": "+1-978-615-9403",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "L4RG US LLC, 105 ELMSFORD ST, DURHAM, NC 27703, USA",
                  "addressLocality": "ELMSFORD ST",
                  "postalCode": "27703",
                  "addressCountry": "US"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 35.960390,
                  "longitude": -78.827200
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
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
                  "https://www.itsupport.net.in/"
                ]
              },
              {
                "@type": "EmployerAggregateRating",
                "itemReviewed": {
                  "@type": "Organization",
                  "name": "Healthcare IT Support Services - itsupport.net.in",
                  "sameAs": "https://www.itsupport.net.in/industries/healthcare"
                },
                "ratingValue": "99",
                "bestRating": "100",
                "worstRating": "1",
                "ratingCount": "4574"
              },
              {
                "@type": "WebPage",
                "name": "Expert Healthcare IT Support Services",
                "url": "https://www.itsupport.net.in/industries/healthcare",
                "inLanguage": "en-US",
                "isPartOf": {
                  "@type": "WebSite",
                  "url": "https://www.itsupport.net.in/",
                  "name": "L4RG US LLC"
                }
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 156790,
                    "name": "Home",
                    "item": "https://www.itsupport.net.in/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 156791,
                    "name": "industries",
                    "item": "https://www.itsupport.net.in/industries"
                  },
                  {
                    "@type": "ListItem",
                    "position": 156792,
                    "name": "finance & banking support industries",
                    "item": "https://www.itsupport.net.in/industries/healthcare"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How do you ensure HIPAA compliance for healthcare IT systems?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We conduct detailed security audits, implement data encryption, access controls, and maintain audit logs to ensure complete HIPAA compliance."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can you integrate our existing EMR system with new telemedicine software?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Our team specializes in integrating EMR/EHR systems with telemedicine platforms, ensuring secure and seamless data flow."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you offer 24/7 healthcare IT support?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": " Absolutely. We provide round-the-clock remote and on-site IT assistance for healthcare facilities worldwide."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do you protect against healthcare cyberattacks?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We use advanced cybersecurity measures like intrusion detection, MFA, endpoint protection, and regular vulnerability scanning to safeguard your network."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can you work with multi-location hospitals and clinics?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": " Yes, we provide centralized IT management and secure networking solutions for healthcare organizations with multiple locations."
                    }
                  }
                ]
              },
              {
                "@type": "QAPage",
                "mainEntity": {
                  "@type": "Question",
                  "name": "Can you help with setting up secure healthcare IT systems?",
                  "text": "Absolutely. We provide complete setup and configuration of secure healthcare IT systems, including HIPAA-compliant networks, encrypted communications, access control management, and performance optimization to keep patient data secure and systems running efficiently.",
                  "url": "https://www.itsupport.net.in/industries/healthcare#q1a1",
                  "answerCount": 1,
                  "upvoteCount": 0,
                  "datePublished": "2025-07-14T10:00:00+05:30",
                  "author": {
                    "@type": "Person",
                    "name": "IT Support Team",
                    "url": "https://www.itsupport.net.in/"
                  },
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. We provide complete setup and configuration of secure healthcare IT systems, including HIPAA-compliant networks, encrypted communications, access control management, and performance optimization to keep patient data secure and systems running efficiently.",
                    "url": "https://www.itsupport.net.in/industries/healthcare#q1a1",
                    "dateCreated": "2025-07-14T10:00:00+05:30",
                    "upvoteCount": 0,
                    "author": {
                      "@type": "Person",
                      "name": "IT Support Team",
                      "url": "https://www.itsupport.net.in/"
                    }
                  }
                }
              },
              {
                "@type": "QAPage",
                "mainEntity": {
                  "@type": "Question",
                  "name": "What’s the difference between healthcare IT support and general IT support?",
                  "text": "Healthcare IT support specializes in managing medical systems, ensuring HIPAA compliance, securing patient data, and maintaining healthcare-specific applications, while general IT support covers broader hardware, software, and network needs. We provide both for complete coverage in healthcare organizations.",
                  "url": "https://www.itsupport.net.in/industries/healthcare#q3a1",
                  "answerCount": 1,
                  "upvoteCount": 0,
                  "datePublished": "2025-07-14T10:10:00+05:30",
                  "author": {
                    "@type": "Person",
                    "name": "IT Support Team",
                    "url": "https://www.itsupport.net.in/"
                  },
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Healthcare IT support specializes in managing medical systems, ensuring HIPAA compliance, securing patient data, and maintaining healthcare-specific applications, while general IT support covers broader hardware, software, and network needs. We provide both for complete coverage in healthcare organizations.",
                    "url": "https://www.itsupport.net.in/industries/healthcare#q3a1",
                    "dateCreated": "2025-07-14T10:10:00+05:30",
                    "upvoteCount": 0,
                    "author": {
                      "@type": "Person",
                      "name": "IT Support Team",
                      "url": "https://www.itsupport.net.in/"
                    }
                  }
                }
              },
              {
                "@type": "QAPage",
                "mainEntity": {
                  "@type": "Question",
                  "name": "Can you help secure our healthcare network from cyber threats?",
                  "text": "Yes. We provide healthcare-specific network security solutions, including HIPAA-compliant security assessments, firewall configuration, intrusion detection, and best-practice setups to protect patient data, medical devices, and healthcare systems from viruses, malware, and unauthorized access.",
                  "url": "https://www.itsupport.net.in/industries/healthcare#q4a1",
                  "answerCount": 1,
                  "upvoteCount": 0,
                  "datePublished": "2025-07-14T10:15:00+05:30",
                  "author": {
                    "@type": "Person",
                    "name": "IT Support Team",
                    "url": "https://www.itsupport.net.in/"
                  },
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We provide healthcare-specific network security solutions, including HIPAA-compliant security assessments, firewall configuration, intrusion detection, and best-practice setups to protect patient data, medical devices, and healthcare systems from viruses, malware, and unauthorized access.",
                    "url": "https://www.itsupport.net.in/industries/healthcare#q4a1",
                    "dateCreated": "2025-07-14T10:15:00+05:30",
                    "upvoteCount": 0,
                    "author": {
                      "@type": "Person",
                      "name": "IT Support Team",
                      "url": "https://www.itsupport.net.in/"
                    }
                  }
                }
              }
            ]
          }          
    },
    {
        slug:"construction",
        title:"",
        subtitle:"",
        description:"",
        imageUrl:"",
        metadata:{
            title: "Construction IT Services – Network, Cloud & BIM Support | ITSupport.net.in",
            description:
              "IT support for builders, construction technology services, secure project data, construction helpdesk, project management IT",
            keywords: [
              "construction IT support",
              "building IT services",
              "network security for construction",
              "BIM software support",
              "construction cloud solutions",
              "IT support for builders",
              "construction technology services",
              "secure project data",
              "construction helpdesk",
              "project management IT",
              "site network setup",
              "construction cybersecurity",
              "BIM troubleshooting",
              "remote construction IT support",
              "IT solutions for contractors",
              "engineering IT support",
              "construction software setup",
              "cloud backup for construction",
              "IT support India",
            ],
            openGraph: {
              title:
                "IT Support for Construction Industry – Secure & Reliable Solutions | ITSupport.net.in",
              description:
                "construction IT support, building IT services, network security for construction, BIM software support, construction cloud solutions",
              url: "https://www.itsupport.net.in/industries/construction/",
              siteName: "L4RG IT Support Services for Construction Industry",
              images: [
                {
                  url: "image-url",
                  alt: "L4RG IT Support Services for Construction Industry - Network, Cybersecurity & Cloud Solutions",
                  type: "images/png",
                  width: "Fix Size",
                  height: "Fix Size",
                  secureUrl: "image-url",
                },
              ],
              type: "website",
              locale: "en_US",
            },
            twitter: {
              card: "summary_large_image",
              title: "24/7 Construction IT Support – Project Management & Cybersecurity Experts",
              description:
                "construction industry IT, site network setup, construction cybersecurity, BIM troubleshooting, remote construction IT support",
              image: "image-url",
              imageAlt:
                "IT Support Services for the Construction Industry – Reliable network management, cybersecurity, and cloud solutions for builders, contractors, and engineering firms.",
              imageType: "images/png",
              creator: "@L4RGINDIA",
              url: "https://www.itsupport.net.in/industries/construction/",
            },
            authors: [{ name: "L4RG IT Support Services - Construction Industry" }],
            copyright: "© 2025",
            robots: { index: true, follow: true },
            alternates: {
              canonical: "https://www.itsupport.net.in/industries/construction/",
              languages: {
                "en-US": "https://www.itsupport.net.in/industries/construction/",
              },
            },
          },
        schema:{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Product",
                "name": "IT Support Services for Construction Industry",
                "description": "Comprehensive IT support solutions for the construction sector, including project management software support, network infrastructure setup, data security, cloud integration, and 24/7 technical assistance tailored for construction companies, contractors, and engineering firms.",
                "url": "https://www.itsupport.net.in/industries/construction",
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": 783421
                },
                "audience": {
                  "@type": "Audience",
                  "description": "Construction businesses and contractors needing reliable IT support, project management tools, cybersecurity, and cloud solutions.",
                  "audienceType": "Construction Companies,Contractors,Engineering Firms,Architectural Firms,Infrastructure Developers"
                }
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 156790,
                    "name": "Home",
                    "item": "https://www.itsupport.net.in/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 156791,
                    "name": "industries",
                    "item": "https://www.itsupport.net.in/industries"
                  },
                  {
                    "@type": "ListItem",
                    "position": 156792,
                    "name": "construction industries",
                    "item": "https://www.itsupport.net.in/industries/construction"
                  }
                ]
              },
              {
                "@type": "WebSite",
                "url": "https://www.itsupport.net.in/industries/construction",
                "name": "L4RG IT Support Services for Construction Industry",
                "description": "Specialized IT support services for the construction sector, including project management software support, network infrastructure setup, data security, cloud integration, and 24/7 technical assistance for construction companies, contractors, and engineering firms.",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://www.itsupport.net.in/search?q={search_term_string}"
                  },
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Michael Roberts"
                },
                "name": "Construction Industry IT Support Review",
                "url": "https://www.itsupport.net.in/industries/construction",
                "image": "https://www.itsupport.net.in/images/construction-it-support.jpg",
                "reviewBody": "ITSupport.net.in has significantly improved our construction firm's technology infrastructure. Their expertise in project management software, secure file sharing, and on-site network solutions has boosted productivity and kept our projects on track.",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "4.9"
                },
                "itemReviewed": {
                  "@type": "LocalBusiness",
                  "name": "L4RG US LLC",
                  "priceRange": "12000",
                  "image": "",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "L4RG US LLC, 105 ELMSFORD ST, DURHAM, NC 27703, USA",
                    "addressLocality": "ELMSFORD ST",
                    "addressRegion": "ELMSFORD ST",
                    "postalCode": "27703",
                    "telephone": "+1-978-615-9403",
                    "addressCountry": {
                      "@type": "Country",
                      "name": "United State America"
                    }
                  }
                }
              },
              {
                "@type": "ProfessionalService",
                "name": "construction IT Support Services",
                "image": "https://www.itsupport.net.in/images/healthcare-it-support.jpg",
                "@id": "https://www.itsupport.net.in/industries/construction",
                "url": "https://www.itsupport.net.in/",
                "telephone": "+1-978-615-9403",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "L4RG US LLC, 105 ELMSFORD ST, DURHAM, NC 27703, USA",
                  "addressLocality": "ELMSFORD ST",
                  "postalCode": "27703",
                  "addressCountry": "USA"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 35.960390,
                  "longitude": -78.827200
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
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
                  "https://www.itsupport.net.in/"
                ]
              },
              {
                "@type": "EmployerAggregateRating",
                "itemReviewed": {
                  "@type": "Organization",
                  "name": "ITSupport.net.in - construction IT Support Services",
                  "sameAs": "https://www.itsupport.net.in/industries/construction"
                },
                "ratingValue": 99,
                "bestRating": 100,
                "worstRating": 1,
                "ratingCount": 4.9
              },
              {
                "@type": "WebPage",
                "name": "construction IT Support Services",
                "url": "https://www.itsupport.net.in/industries/construction",
                "inLanguage": "en-US",
                "isPartOf": {
                  "@type": "WebSite",
                  "url": "https://www.itsupport.net.in/",
                  "name": "L4RG US LLC"
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Can you help integrate our construction software with existing systems?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. We specialize in integrating project management, BIM, and ERP systems for seamless workflows."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do you ensure data security for sensitive construction projects?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We implement encryption, role-based access, firewalls, and regular security audits."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you provide IT support for multiple construction sites?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. We offer both remote and on-site IT support for projects across different locations."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can you optimize hardware for CAD and BIM software?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Absolutely. We configure and maintain high-performance systems for heavy design workloads."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you offer cloud solutions for document sharing?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. We set up secure, scalable cloud platforms for real-time file access and collaboration."
                    }
                  }
                ]
              },
              {
                "@type": "QAPage",
                "mainEntity": {
                  "@type": "Question",
                  "name": "What IT support services are offered for the construction industry?",
                  "text": "We provide specialized IT support for construction companies, including project management software setup, network installation, secure cloud storage, cybersecurity, and 24/7 helpdesk services.",
                  "url": "https://www.itsupport.net.in/industries/construction#q1a1",
                  "answerCount": 1,
                  "datePublished": "2025-07-14T10:00:00+05:30",
                  "author": { "@type": "Organization", "name": "ITSupport.net.in" },
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "ITSupport.net.in delivers end-to-end IT services for construction projects, such as hardware installation, BIM software support, network security, and remote monitoring to ensure smooth operations on-site and in offices.",
                    "url": "https://www.itsupport.net.in/industries/construction#q1a1",
                    "dateCreated": "2025-07-14T10:00:00+05:30",
                    "author": { "@type": "Organization", "name": "ITSupport.net.in" }
                  }
                }
              },
              {
                "@type": "QAPage",
                "mainEntity": {
                  "@type": "Question",
                  "name": "Do you support Building Information Modeling (BIM) software?",
                  "text": "Our IT support covers installation, configuration, and troubleshooting for popular BIM software used in construction.",
                  "url": "https://www.itsupport.net.in/industries/construction#q2a1",
                  "answerCount": 1,
                  "datePublished": "2025-07-14T10:10:00+05:30",
                  "author": { "@type": "Organization", "name": "ITSupport.net.in" },
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we provide comprehensive support for BIM tools including AutoDesk Revit, Navisworks, and other project collaboration platforms, ensuring seamless integration with your network and cloud systems.",
                    "url": "https://www.itsupport.net.in/industries/construction#q2a1",
                    "dateCreated": "2025-07-14T10:10:00+05:30",
                    "author": { "@type": "Organization", "name": "ITSupport.net.in" }
                  }
                }
              },
              {
                "@type": "QAPage",
                "mainEntity": {
                  "@type": "Question",
                  "name": "Can you secure construction project data?",
                  "text": "We offer cybersecurity solutions to protect sensitive construction project information from breaches.",
                  "url": "https://www.itsupport.net.in/industries/construction#q3a1",
                  "answerCount": 1,
                  "datePublished": "2025-07-14T10:15:00+05:30",
                  "author": { "@type": "Organization", "name": "ITSupport.net.in" },
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. Our team implements advanced firewalls, encryption, and secure backup protocols to safeguard your architectural designs, financial records, and client data.",
                    "url": "https://www.itsupport.net.in/industries/construction#q3a1",
                    "dateCreated": "2025-07-14T10:15:00+05:30",
                    "author": { "@type": "Organization", "name": "ITSupport.net.in" }
                  }
                }
              }
            ]
          }
    },
    {
        slug:"education",
        title:"",
        subtitle:"",
        description:"",
        imageUrl:"",
        metadata:{
            title: "Reliable Education Sector IT Solutions – School & University Support",
            description:
              "IT solutions for schools, classroom technology support, campus Wi-Fi setup, education cybersecurity, online learning support",
            keywords: [
              "education IT support",
              "school network management",
              "university IT services",
              "eLearning technical support",
              "classroom technology support",
              "campus Wi-Fi setup",
              "education cybersecurity",
              "managed IT services for schools and colleges",
              "academic IT infrastructure",
              "ITSupport.net.in",
            ],
            openGraph: {
              title: "Expert IT Support Services for the Education Industry | ITSupport.net.in",
              description:
                "education IT support, school network management, university IT services, eLearning technical support, ITSupport.net.in",
              url: "https://www.itsupport.net.in/industries/education/",
              siteName: "ITSupport.net.in - Education Industry IT Support Services",
              images: [
                {
                  url: "image-url",
                  alt: "IT Support Services for Schools, Colleges & Universities | ITSupport.net.in",
                  type: "images/png",
                  width: "Fix Size",
                  height: "Fix Size",
                  secureUrl: "image-url",
                },
              ],
              type: "website",
              locale: "en_US",
            },
            twitter: {
              card: "summary_large_image",
              title: "Education IT Infrastructure, Cybersecurity & Network Support",
              description:
                "university IT support, student portal assistance, digital classroom support, education industry IT experts, ITSupport.net.in education services",
              image: "image-url",
              imageAlt:
                "IT Support Services for Schools, Colleges & Universities | ITSupport.net.in",
              imageType: "images/png",
              creator: "@L4RGINDIA",
              url: "https://www.itsupport.net.in/industries/education/",
            },
            authors: [{ name: "ITSupport.net.in - Education IT Support Experts" }],
            copyright: "© 2025",
            robots: { index: true, follow: true },
            alternates: {
              canonical: "https://www.itsupport.net.in/industries/education/",
              languages: {
                "en-US": "https://www.itsupport.net.in/industries/education/",
              },
            },
          },
        schema:{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@id": "product",
                "@type": "Product",
                "name": "IT Support Services for Education Industry",
                "description": "Comprehensive IT support solutions for the education sector, including 24/7 monitoring, cybersecurity, e-learning platform support, network management, and system maintenance tailored for schools, colleges, and universities.",
                "url": "https://www.itsupport.net.in/industries/education",
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "920478"
                },
                "audience": {
                  "@type": "Audience",
                  "description": "Educational institutions such as schools, colleges, and universities requiring reliable IT support services, including network setup, cybersecurity, e-learning platform assistance, and 24/7 technical support.",
                  "audienceType": "Schools & Educational Institutions,Universities & Colleges,E-Learning Platforms,Educational IT Managers,Training Centers"
                }
              },
              {
                "@type": "WebSite",
                "url": "https://www.itsupport.net.in/industries/education",
                "name": "L4RG IT Support Services for Education Industry",
                "description": "Comprehensive IT support services for the education sector, including network setup, cybersecurity, e-learning platform support, and 24/7 technical assistance for schools, colleges, and universities.",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://www.itsupport.net.in/search?q={search_term_string}"
                  },
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@type": "Review",
                "name": "Education IT Support Services Review",
                "url": "https://www.itsupport.net.in/industries/education",
                "image": "https://www.itsupport.net.in/images/education-it-support.jpg",
                "author": {
                  "@type": "Person",
                  "name": "Rohan"
                },
                "reviewBody": "ITSupport.net.in has greatly improved our educational institution's IT infrastructure. Their fast support, proactive monitoring, and strong cybersecurity measures have enhanced learning environments and reduced technical disruptions.",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "4.9"
                },
                "itemReviewed": {
                  "@type": "LocalBusiness",
                  "name": "L4RG US LLC",
                  "priceRange": "12000",
                  "image": "",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "L4RG US LLC, 105 ELMSFORD ST, DURHAM, NC 27703, USA",
                    "addressLocality": "ELMSFORD ST",
                    "addressRegion": "ELMSFORD ST",
                    "postalCode": "27703",
                    "telephone": "+1-978-615-9403",
                    "addressCountry": {
                      "@type": "Country",
                      "name": "United State America"
                    }
                  }
                }
              },
              {
                "@type": "ProfessionalService",
                "name": "Education IT Support Services",
                "image": "https://www.itsupport.net.in/images/healthcare-it-support.jpg",
                "@id": "https://www.itsupport.net.in/industries/education",
                "url": "https://www.itsupport.net.in/",
                "telephone": "+1-978-615-9403",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "L4RG US LLC, 105 ELMSFORD ST, DURHAM, NC 27703, USA",
                  "addressLocality": "ELMSFORD ST",
                  "postalCode": "27703",
                  "addressCountry": "USA"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 35.96039,
                  "longitude": -78.8272
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
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
                  "https://www.itsupport.net.in/"
                ]
              },
              {
                "@type": "EmployerAggregateRating",
                "itemReviewed": {
                  "@type": "Organization",
                  "name": "ITSupport.net.in - Education IT Support Services",
                  "sameAs": "https://www.itsupport.net.in/industries/education"
                },
                "ratingValue": "99",
                "bestRating": "100",
                "worstRating": "1",
                "ratingCount": "4.9"
              },
              {
                "@type": "WebPage",
                "name": "Education IT Support Services",
                "url": "https://www.itsupport.net.in/industries/education",
                "inLanguage": "en-US",
                "isPartOf": {
                  "@type": "WebSite",
                  "url": "https://www.itsupport.net.in/",
                  "name": "L4RG US LLC"
                }
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 156790,
                    "name": "Home",
                    "item": "https://www.itsupport.net.in/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 156791,
                    "name": "industries",
                    "item": "https://www.itsupport.net.in/industries"
                  },
                  {
                    "@type": "ListItem",
                    "position": 156792,
                    "name": "Manufacturing support industries",
                    "item": "https://www.itsupport.net.in/industries/education"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Can you help us set up an LMS for our institution?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. We deploy, customize, and maintain LMS platforms tailored to your academic needs."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do you ensure data security for student records?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We implement encryption, access control, and regular security audits to protect sensitive data."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you provide IT support for online examinations?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Absolutely. We ensure secure online exam platforms, monitoring tools, and backup systems are in place."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can you support both physical and virtual classrooms?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": " Yes. We provide integrated IT solutions for hybrid learning environments, connecting in-person and online students."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you offer device management for student laptops and tablets?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. We handle procurement, configuration, and ongoing management of all student and faculty devices."
                    }
                  }
                ]
              },
              {
                "@type": "QAPage",
                "mainEntity": {
                  "@type": "Question",
                  "name": "What IT support services does ITSupport.net.in offer for the education industry?",
                  "text": "Educational institutions require specialized IT services for smooth learning operations.",
                  "url": "https://www.itsupport.net.in/industries/education#q1a1",
                  "answerCount": 1,
                  "datePublished": "2025-07-14T10:00:00+05:30",
                  "author": {
                    "@type": "Organization",
                    "name": "ITSupport.net.in",
                    "url": "https://www.itsupport.net.in/"
                  },
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We provide network setup, smart classroom technology support, cybersecurity, cloud-based data storage, learning management system (LMS) integration, and 24/7 helpdesk support for schools, colleges, and universities.",
                    "url": "https://www.itsupport.net.in/industries/education#q1a1",
                    "dateCreated": "2025-07-14T10:00:00+05:30",
                    "author": {
                      "@type": "Organization",
                      "name": "ITSupport.net.in",
                      "url": "https://www.itsupport.net.in/"
                    }
                  }
                }
              },
              {
                "@type": "QAPage",
                "mainEntity": {
                  "@type": "Question",
                  "name": "How can ITSupport.net.in improve cybersecurity for schools and universities?",
                  "text": "Cybersecurity is a growing concern for the education sector due to sensitive student and staff data.",
                  "url": "https://www.itsupport.net.in/industries/education#q3a1",
                  "answerCount": 1,
                  "datePublished": "2025-07-14T10:10:00+05:30",
                  "author": {
                    "@type": "Organization",
                    "name": "ITSupport.net.in",
                    "url": "https://www.itsupport.net.in/"
                  },
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We implement advanced firewalls, secure cloud solutions, data encryption, malware protection, and regular vulnerability assessments to safeguard educational institutions against cyber threats.",
                    "url": "https://www.itsupport.net.in/industries/education#q3a1",
                    "dateCreated": "2025-07-14T10:10:00+05:30",
                    "author": {
                      "@type": "Organization",
                      "name": "ITSupport.net.in",
                      "url": "https://www.itsupport.net.in/"
                    }
                  }
                }
              },
              {
                "@type": "QAPage",
                "mainEntity": {
                  "@type": "Question",
                  "name": "Does ITSupport.net.in provide 24/7 technical assistance for educational institutions?",
                  "text": "Round-the-clock support ensures uninterrupted learning and administration.",
                  "url": "https://www.itsupport.net.in/industries/education#q4a1",
                  "answerCount": 1,
                  "datePublished": "2025-07-14T10:15:00+05:30",
                  "author": {
                    "@type": "Organization",
                    "name": "ITSupport.net.in",
                    "url": "https://www.itsupport.net.in/"
                  },
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we offer 24/7 remote and on-site technical assistance, ensuring that classrooms, labs, and administrative systems run without downtime.",
                    "url": "https://www.itsupport.net.in/industries/education#q4a1",
                    "dateCreated": "2025-07-14T10:15:00+05:30",
                    "author": {
                      "@type": "Organization",
                      "name": "ITSupport.net.in",
                      "url": "https://www.itsupport.net.in/"
                    }
                  }
                }
              }              
            ]
          }          
    },
    {
        slug:"finance-banking",
        title:"",
        subtitle:"",
        description:"",
        imageUrl:"",
        metadata:{
            title: "Secure Banking IT Solutions | Finance Industry Support",
            description:
              "Finance-focused IT services ensuring data security, uptime, and compliance. Trust itsupport.net.in for your banking tech needs.",
            keywords: [
              "finance IT services",
              "banking technology support",
              "cybersecurity for banks",
              "IT helpdesk finance",
              "IT maintenance finance industry",
            ],
            openGraph: {
              title: "IT Support Services for Finance & Banking Industry",
              description:
                "Secure, reliable IT support services tailored for the finance & banking sector. From compliance-ready infrastructure to 24/7 helpdesk, we ensure your financial systems run smoothly.",
              url: "https://www.itsupport.net.in/industries/finance-banking/",
              siteName: "Professional IT Support Services for Finance & Banking Industry",
              images: [
                {
                  url: "image-url",
                  alt: "IT Support Services for Finance & Banking Industry",
                  type: "images/png",
                  width: "Fix Size",
                  height: "Fix Size",
                  secureUrl: "image-url",
                },
              ],
              type: "website",
              locale: "en_US",
            },
            twitter: {
              card: "summary_large_image",
              title: "Finance & Banking IT Support Services",
              description:
                "Expert IT support for the finance & banking industry. 24/7 monitoring, compliance security, and seamless tech solutions for financial institutions.",
              image: "image-url",
              imageAlt: "IT Support Services for Finance & Banking Industry",
              imageType: "images/png",
              creator: "@L4RGINDIA",
              url: "https://www.itsupport.net.in/industries/finance-banking/",
            },
            authors: [{ name: "Finance & Banking Support industry" }],
            copyright: "© 2025",
            robots: { index: true, follow: true },
            alternates: {
              canonical: "https://www.itsupport.net.in/industries/finance-banking/",
              languages: {
                "en-US": "https://www.itsupport.net.in/industries/finance-banking/",
              },
            },
          },
        schema:{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Product",
                "name": "IT Support Services for Finance & Banking Industry",
                "description": "Secure and reliable IT support services tailored for finance and banking institutions. We provide 24/7 network monitoring, cybersecurity solutions, data backup, disaster recovery, and compliance-driven technology support to ensure uninterrupted operations.",
                "url": "https://www.itsupport.net.in/services/finance-banking-it-support",
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.8",
                  "reviewCount": "839521"
                },
                "audience": {
                  "@type": "Audience",
                  "description": "Businesses in the finance and banking industry seeking secure and compliant IT support services.",
                  "audienceType": "Financial Institutions, Banks, Credit Unions, Investment Firms, Insurance Companies"
                }
              },
              {
                "@type": "WebSite",
                "url": "https://www.itsupport.net.in/industries/finance-banking",
                "name": "L4RG US LLC",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://www.itsupport.net.in/search?q={search_term_string}"
                  },
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@type": "Review",
                "name": "Expert IT Support Services for Finance & Banking Industry | Secure & Reliable Solutions",
                "url": "https://www.itsupport.net.in/industries/finance-banking",
                "author": "Mike",
                "reviewBody": "Best IT support service for finance and banking sector with secure, compliant, and 24/7 assistance.",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "4.8"
                },
                "itemReviewed": {
                  "@type": "LocalBusiness",
                  "name": "L4RG US LLC",
                  "priceRange": "12000",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "L4RG US LLC, 105 ELMSFORD ST, DURHAM, NC 27703, USA",
                    "addressLocality": "ELMSFORD ST",
                    "addressRegion": "ELMSFORD ST",
                    "postalCode": "27703",
                    "telephone": "+1-978-615-9403",
                    "addressCountry": {
                      "@type": "Country",
                      "name": "United State America"
                    }
                  }
                }
              },
              {
                "@type": "ProfessionalService",
                "name": "IT Support Services for Finance & Banking Industry",
                "image": "path",
                "url": "https://www.itsupport.net.in/",
                "telephone": "+1-978-615-9403",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "L4RG US LLC, 105 ELMSFORD ST, DURHAM, NC 27703, USA",
                  "addressLocality": "ELMSFORD ST",
                  "postalCode": "27703",
                  "addressCountry": "USA"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 35.960390,
                  "longitude": -78.827200
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
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
                  "https://www.itsupport.net.in/"
                ]
              },
              {
                "@type": "EmployerAggregateRating",
                "itemReviewed": {
                  "@type": "Organization",
                  "name": "IT Support Services for Finance & Banking Industry",
                  "sameAs": "https://www.itsupport.net.in/"
                },
                "ratingValue": "99",
                "bestRating": "100",
                "worstRating": "1",
                "ratingCount": "4.9"
              },
              {
                "@type": "WebPage",
                "name": "IT Support Services for Finance & Banking Industry | Secure & Reliable Solutions",
                "url": "https://www.itsupport.net.in/industries/finance-banking",
                "inLanguage": "en-US",
                "isPartOf": {
                  "@type": "WebSite",
                  "url": "https://www.itsupport.net.in/",
                  "name": "L4RG US LLC"
                }
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 156790,
                    "name": "Home",
                    "item": "https://www.itsupport.net.in/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 156791,
                    "name": "Industries",
                    "item": "https://www.itsupport.net.in/industries"
                  },
                  {
                    "@type": "ListItem",
                    "position": 156792,
                    "name": "Finance & Banking Industry ",
                    "item": "https://www.itsupport.net.in/industries/finance-banking"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How do you ensure PCI DSS compliance for our bank?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We conduct a thorough gap analysis, implement encryption, access controls, and maintain secure payment environments to meet PCI DSS standards."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can you integrate our existing core banking system with mobile apps?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. We specialize in integrating core banking platforms with secure mobile and internet banking applications."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you offer IT support for fintech startups?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Absolutely. We provide scalable cloud solutions, secure APIs, and blockchain integration for fintech companies."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do you protect financial institutions from cyber threats?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We deploy AI-based fraud detection, intrusion prevention systems, endpoint protection, and 24/7 threat monitoring."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can you help us with compliance for multiple regions?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. We work with banks and finance companies across 50+ countries, ensuring compliance with local and international regulations."
                    }
                  }
                ]
              },
              {
                "@type": "QAPage",
                "mainEntity": {
                "@type": "Question",
                "name": "What IT support services do you provide for the finance and banking industry?",
                "text": "We provide tailored IT solutions including 24/7 network monitoring, cybersecurity, compliance support, data backup, and disaster recovery specifically designed for financial institutions.",
                "url": "https://www.itsupport.net.in/industries/finance-banking#q1a1",
                "answerCount": 1,
                "datePublished": "2025-07-14T10:00:00+05:30",
                "author": {
                "@type": "Organization",
                "name": "ITSupport.net.in",
                "url": "https://www.itsupport.net.in/"
                },
                "acceptedAnswer": {
                "@type": "Answer",
                "text": "We provide tailored IT solutions including 24/7 network monitoring, cybersecurity, compliance support, data backup, and disaster recovery specifically designed for financial institutions.",
                "url": "https://www.itsupport.net.in/industries/finance-banking#q1a1",
                "dateCreated": "2025-07-14T10:00:00+05:30",
                "author": {
                "@type": "Organization",
                "name": "ITSupport.net.in",
                "url": "https://www.itsupport.net.in/"
                }
                }
                }
                },
                {
                "@type": "QAPage",
                "mainEntity": {
                "@type": "Question",
                "name": "How do you ensure data security for banking institutions?",
                "text": "Data security is a top priority in the finance and banking sector, and our services are designed to meet strict compliance and security standards.",
                "url": "https://www.itsupport.net.in/industries/finance-banking#q3a1",
                "answerCount": 1,
                "datePublished": "2025-07-14T10:10:00+05:30",
                "author": {
                "@type": "Organization",
                "name": "ITSupport.net.in",
                "url": "https://www.itsupport.net.in/"
                },
                "acceptedAnswer": {
                "@type": "Answer",
                "text": "Data security is a top priority in the finance and banking sector, and our services are designed to meet strict compliance and security standards.",
                "url": "https://www.itsupport.net.in/industries/finance-banking#q3a1",
                "dateCreated": "2025-07-14T10:10:00+05:30",
                "author": {
                "@type": "Organization",
                "name": "ITSupport.net.in",
                "url": "https://www.itsupport.net.in/"
                }
                }
                }
                },
                {
                    "@type": "QAPage",
                    "mainEntity": {
                        "@type": "Question",
                        "name": "Can you assist with compliance requirements like PCI DSS for banks?",
                        "text": "Yes, we have expertise in compliance frameworks required for financial institutions including PCI DSS, ISO 27001, and GDPR.",
                        "url": "https://www.itsupport.net.in/industries/finance-banking#q4a1",
                        "answerCount": 1,
                        "datePublished": "2025-07-14T10:15:00+05:30",
                        "author": {
                            "@type": "Organization",
                            "name": "ITSupport.net.in",
                            "url": "https://www.itsupport.net.in/"
                        },
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, we have expertise in compliance frameworks required for financial institutions including PCI DSS, ISO 27001, and GDPR.",
                            "url": "https://www.itsupport.net.in/industries/finance-banking#q4a1",
                            "dateCreated": "2025-07-14T10:15:00+05:30",
                            "author": {
                                "@type": "Organization",
                                "name": "ITSupport.net.in",
                                "url": "https://www.itsupport.net.in/"
                            }
                        }
                    }
                }
            ]
          }          
    },
    {
        slug:"manufacturing",
        title:"",
        subtitle:"",
        description:"",
        imageUrl:"",
        metadata:{
            title: "Manufacturing IT Solutions – Network, Security & Automation Support",
            description:
              "manufacturing cybersecurity, ERP support for manufacturing, plant automation IT services, industrial tech support, itsupport.net.in",
            keywords: [
              "manufacturing IT support",
              "industrial IT solutions",
              "factory network management",
              "IT services for manufacturing",
              "manufacturing cybersecurity",
              "ERP support for manufacturing",
              "plant automation IT services",
              "IT support for production line",
              "manufacturing data backup",
              "cloud services for manufacturing",
              "factory IT maintenance",
              "manufacturing IT consultancy",
              "IT infrastructure for factories",
              "manufacturing system monitoring",
              "production IT solutions",
              "itsupport.net.in",
            ],
            openGraph: {
              title: "IT Support Services for Manufacturing Industry",
              description:
                "Boost productivity and security with our expert IT support services for the manufacturing industry. From network setup to cybersecurity, we keep your operations running smoothly.",
              url: "https://www.itsupport.net.in/industries/manufacturing/",
              siteName: "Manufacturing Industry IT Support Solutions by ITSupport.net.in",
              images: [
                {
                  url: "image-url",
                  alt: "Manufacturing Industry IT Support Solutions by ITSupport.net.in",
                  type: "images/png",
                  width: "Fix Size",
                  height: "Fix Size",
                  secureUrl: "image-url",
                },
              ],
              type: "website",
              locale: "en_US",
            },
            twitter: {
              card: "summary_large_image",
              title: "Expert IT Support for Manufacturing Plants & Production Systems",
              description:
                "IT support for production line, manufacturing data backup, cloud services for manufacturing, factory IT maintenance, itsupport.net.in",
              image: "image-url",
              imageAlt: "IT Support Services for Manufacturing Industry",
              imageType: "images/png",
              creator: "@L4RGINDIA",
              url: "https://www.itsupport.net.in/industries/manufacturing/",
            },
            authors: [{ name: "Manufacturing Industry IT Support Experts" }],
            copyright: "© 2025",
            robots: { index: true, follow: true },
            alternates: {
              canonical: "https://www.itsupport.net.in/industries/manufacturing/",
              languages: {
                "en-US": "https://www.itsupport.net.in/industries/manufacturing/",
              },
            },
          },
        schema:{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@id": "product",
                "@type": "Product",
                "name": "IT Support Services for Manufacturing Industry",
                "description": "Comprehensive IT support solutions for the manufacturing sector, including 24/7 monitoring, cybersecurity, network management, and system maintenance tailored to industrial needs.",
                "url": "https://www.itsupport.net.in/industries/manufacturing",
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "872598"
                },
                "audience": {
                  "@type": "Audience",
                  "description": "Businesses in the manufacturing sector that require reliable IT support services, including network setup, cybersecurity, data management, and 24/7 technical assistance.",
                  "audienceType": "Manufacturing Industry IT Managers & Businesses"
                }
              },
              {
                "@type": "WebSite",
                "url": "https://www.itsupport.net.in/industries/manufacturing",
                "name": "L4RG IT Support Services for Manufacturing Industry",
                "description": "Expert IT support services for the manufacturing industry. We provide network setup, maintenance, cybersecurity, and 24/7 tech support to keep your manufacturing operations running smoothly.",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://www.itsupport.net.in/search?q={search_term_string}"
                  },
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@type": "Review",
                "name": "Manufacturing IT Support Services Review",
                "url": "https://www.itsupport.net.in/industries/manufacturing",
                "image": "https://www.itsupport.net.in/images/healthcare-it-support.jpg",
                "author": {
                  "@type": "Person",
                  "name": "Rohan"
                },
                "reviewBody": "ITSupport.net.in has been instrumental in streamlining our manufacturing operations. Their proactive IT support, quick response time, and robust cybersecurity measures have minimized downtime and improved productivity across our production line.",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "4.9"
                },
                "itemReviewed": {
                  "@type": "LocalBusiness",
                  "name": "L4RG US LLC",
                  "priceRange": "12000",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "L4RG US LLC, 105 ELMSFORD ST, DURHAM, NC 27703, USA",
                    "addressLocality": "ELMSFORD ST",
                    "addressRegion": "ELMSFORD ST",
                    "postalCode": "27703",
                    "telephone": "+1-978-615-9403",
                    "addressCountry": {
                      "@type": "Country",
                      "name": "United State America"
                    }
                  }
                }
              },
              {
                "@type": "ProfessionalService",
                "name": "Retail & eCommerce IT Support Services",
                "image": "https://www.itsupport.net.in/images/healthcare-it-support.jpg",
                "@id": "https://www.itsupport.net.in/industries/manufacturing",
                "url": "https://www.itsupport.net.in/",
                "telephone": "+1-978-615-9403",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "L4RG US LLC, 105 ELMSFORD ST, DURHAM, NC 27703, USA",
                  "addressLocality": "ELMSFORD ST",
                  "postalCode": "27703",
                  "addressCountry": "USA"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 35.960390,
                  "longitude": -78.827200
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
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
                  "https://www.itsupport.net.in/"
                ]
              },
              {
                "@type": "EmployerAggregateRating",
                "itemReviewed": {
                  "@type": "Organization",
                  "name": "ITSupport.net.in - Manufacturing IT Support Services",
                  "sameAs": "https://www.itsupport.net.in/industries/manufacturing"
                },
                "ratingValue": "99",
                "bestRating": "100",
                "worstRating": "1",
                "ratingCount": "4.9"
              },
              {
                "@type": "WebPage",
                "name": "Manufacturing IT Support Services",
                "url": "https://www.itsupport.net.in/industries/manufacturing",
                "inLanguage": "en-US",
                "isPartOf": {
                  "@type": "WebSite",
                  "url": "https://www.itsupport.net.in/",
                  "name": "L4RG US LLC"
                }
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 156790,
                    "name": "Home",
                    "item": "https://www.itsupport.net.in/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 156791,
                    "name": "industries",
                    "item": "https://www.itsupport.net.in/industries"
                  },
                  {
                    "@type": "ListItem",
                    "position": 156792,
                    "name": "Manufacturing support industries",
                    "item": "https://www.itsupport.net.in/industries/manufacturing"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Can you integrate our factory machines with our ERP system?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. We specialize in connecting production machinery with ERP platforms for real-time monitoring and reporting."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do you protect industrial control systems from cyberattacks?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": " We deploy firewalls, intrusion detection systems, and secure remote access protocols to safeguard ICS and SCADA networks."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you provide support for IoT-based manufacturing solutions?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Absolutely. We integrate IoT devices for predictive maintenance, quality monitoring, and automated reporting."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can you handle IT support for multiple manufacturing sites?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. We provide centralized IT management for manufacturers operating across multiple locations globally."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you offer cloud solutions for production and R&D teams?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. We provide hybrid cloud environments, secure collaboration platforms, and cloud ERP hosting for manufacturing businesses."
                    }
                  }
                ]
              },
              {
                "@type": "QAPage",
                "mainEntity": {
                  "@type": "Question",
                  "name": "How can IT support improve efficiency in manufacturing?",
                  "text": "IT support enhances manufacturing efficiency by ensuring minimal downtime, providing real-time monitoring, automating processes, and securing critical systems against cyber threats.",
                  "url": "https://www.itsupport.net.in/industries/manufacturing#q1a1",
                  "answerCount": 1,
                  "upvoteCount": 0,
                  "datePublished": "2025-07-14T10:00:00+05:30",
                  "author": {
                    "@type": "Person",
                    "name": "IT Support Team",
                    "url": "https://www.itsupport.net.in/"
                  },
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "IT support enhances manufacturing efficiency by ensuring minimal downtime, providing real-time monitoring, automating processes, and securing critical systems against cyber threats.",
                    "url": "https://www.itsupport.net.in/industries/manufacturing#q1a1",
                    "dateCreated": "2025-07-14T10:00:00+05:30",
                    "upvoteCount": 0,
                    "author": {
                      "@type": "Person",
                      "name": "IT Support Team",
                      "url": "https://www.itsupport.net.in/"
                    }
                  }
                }
              },
              {
                "@type": "QAPage",
                "mainEntity": {
                  "@type": "Question",
                  "name": "Do you offer 24/7 IT support for manufacturing plants?",
                  "text": "Yes, we provide round-the-clock IT support to ensure continuous manufacturing operations and immediate resolution of technical issues.",
                  "url": "https://www.itsupport.net.in/industries/manufacturing#q3a1",
                  "answerCount": 1,
                  "upvoteCount": 0,
                  "datePublished": "2025-07-14T10:10:00+05:30",
                  "author": {
                    "@type": "Person",
                    "name": "IT Support Team",
                    "url": "https://www.itsupport.net.in/"
                  },
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we provide round-the-clock IT support to ensure continuous manufacturing operations and immediate resolution of technical issues.",
                    "url": "https://www.itsupport.net.in/industries/manufacturing#q3a1",
                    "dateCreated": "2025-07-14T10:10:00+05:30",
                    "upvoteCount": 0,
                    "author": {
                      "@type": "Person",
                      "name": "IT Support Team",
                      "url": "https://www.itsupport.net.in/"
                    }
                  }
                }
              },
              {
                "@type": "QAPage",
                "mainEntity": {
                  "@type": "Question",
                  "name": "Can you integrate ERP systems with manufacturing IT infrastructure?",
                  "text": "Absolutely. We specialize in integrating ERP systems with existing manufacturing IT infrastructure to improve workflow and data accuracy.",
                  "url": "https://www.itsupport.net.in/industries/manufacturing#q4a1",
                  "answerCount": 1,
                  "upvoteCount": 0,
                  "datePublished": "2025-07-14T10:15:00+05:30",
                  "author": {
                    "@type": "Person",
                    "name": "IT Support Team",
                    "url": "https://www.itsupport.net.in/"
                  },
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. We specialize in integrating ERP systems with existing manufacturing IT infrastructure to improve workflow and data accuracy.",
                    "url": "https://www.itsupport.net.in/industries/manufacturing#q4a1",
                    "dateCreated": "2025-07-14T10:15:00+05:30",
                    "upvoteCount": 0,
                    "author": {
                      "@type": "Person",
                      "name": "IT Support Team",
                      "url": "https://www.itsupport.net.in/"
                    }
                  }
                }
              }
            ]
          }          
    },
    {
        slug:"professional",
        title:"",
        subtitle:"",
        description:"",
        imageUrl:"",
        metadata:{
            title: "Expert IT Support Services for Professional Services",
            description:
              "professional services IT support, law firm IT services, consultancy IT support, corporate office IT support",
            keywords: [
              "professional services IT support",
              "law firm IT services",
              "consultancy IT support",
              "corporate office IT support",
              "managed IT services professional industry",
              "business IT infrastructure",
              "professional IT solutions",
              "IT security for firms",
              "network support for offices",
              "ITSupport.net.in",
            ],
            openGraph: {
              title: "Reliable IT Solutions for Law Firms, Consultancies & Corporates",
              description:
                "managed IT services professional industry, business IT infrastructure, professional IT solutions, IT security for firms, network support for offices",
              url: "https://www.itsupport.net.in/industries/professional/",
              siteName: "ITSupport.net.in - Professional IT Support Services",
              images: [
                {
                  url: "image-url",
                  alt: "L4RG US LLC - Professional IT Support Services for Businesses | ITSupport.net.in",
                  type: "images/png",
                  width: "Fix Size",
                  height: "Fix Size",
                  secureUrl: "image-url",
                },
              ],
              type: "website",
              locale: "en_US",
            },
            twitter: {
              card: "summary_large_image",
              title: "Managed IT Services for Professional Services Firms",
              description:
                "professional IT helpdesk, IT maintenance for corporate offices, secure IT solutions for law firms, IT management services, ITSupport.net.in professional services",
              image: "image-url",
              imageAlt:
                "Professional IT Support Services for Businesses - Network Security, Cloud Solutions, and 24/7 Technical Assistance",
              imageType: "images/png",
              creator: "@L4RGINDIA",
              url: "https://www.itsupport.net.in/industries/professional/",
            },
            authors: [
              {
                name: "L4RG US LLC - IT Support Professional Services | ITSupport.net.in",
              },
            ],
            copyright: "© 2025",
            robots: { index: true, follow: true },
            alternates: {
              canonical: "https://www.itsupport.net.in/industries/professional/",
              languages: {
                "en-US": "https://www.itsupport.net.in/industries/professional/",
              },
            },
          },
        schema:{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@id": "#product",
                "@type": "Product",
                "name": "IT Support Services for Professional Services Industry",
                "description": "Comprehensive IT support solutions for the professional services sector, including network management, cybersecurity, cloud integration, and 24/7 technical assistance tailored for law firms, consultancies, and corporate offices.",
                "url": "https://www.itsupport.net.in/industries/professional",
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "823819"
                },
                "audience": {
                  "@type": "Audience",
                  "description": "Professional services firms needing reliable IT support, network setup, cybersecurity, and cloud services.",
                  "audienceType": "Law Firms,Consultancies,Accounting Firms,Corporate Offices,Professional Service Providers"
                }
              },
              {
                "@type": "WebSite",
                "url": "https://www.itsupport.net.in/industries/professional-services",
                "name": "L4RG IT Support Services for Professional Services Industry",
                "description": "Specialized IT support services for professional services firms, including network management, cybersecurity, cloud integration, and 24/7 technical assistance for law firms, consultancies, accounting firms, and corporate offices.",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://www.itsupport.net.in/search?q={search_term_string}"
                  },
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@type": "Review",
                "name": "Professional Services IT Support Review",
                "url": "https://www.itsupport.net.in/industries/professional",
                "image": "https://www.itsupport.net.in/images/education-it-support.jpg",
                "author": {
                  "@type": "Person",
                  "name": "Newton"
                },
                "reviewBody": "ITSupport.net.in has significantly improved our professional firm's IT infrastructure. Their fast response, proactive monitoring, and robust cybersecurity solutions have ensured smooth operations and minimized downtime for our offices.",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "4.9"
                },
                "itemReviewed": {
                  "@type": "LocalBusiness",
                  "name": "L4RG US LLC",
                  "priceRange": "12000",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "L4RG US LLC, 105 ELMSFORD ST, DURHAM, NC 27703, USA",
                    "addressLocality": "ELMSFORD ST",
                    "addressRegion": "ELMSFORD ST",
                    "postalCode": "27703",
                    "telephone": "+1-978-615-9403",
                    "addressCountry": {
                      "@type": "Country",
                      "name": "United State America"
                    }
                  }
                }
              },
              {
                "@type": "ProfessionalService",
                "name": "Professional Services IT Support Services",
                "image": "https://www.itsupport.net.in/images/healthcare-it-support.jpg",
                "@id": "https://www.itsupport.net.in/industries/professional",
                "url": "https://www.itsupport.net.in/",
                "telephone": "+1-978-615-9403",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "L4RG US LLC, 105 ELMSFORD ST, DURHAM, NC 27703, USA",
                  "addressLocality": "ELMSFORD ST",
                  "postalCode": "27703",
                  "addressCountry": "USA"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 35.960390,
                  "longitude": -78.827200
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
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
                  "https://www.itsupport.net.in/"
                ]
              },
              {
                "@type": "EmployerAggregateRating",
                "itemReviewed": {
                  "@type": "Organization",
                  "name": "ITSupport.net.in - Professional Services IT Support",
                  "sameAs": "https://www.itsupport.net.in/industries/professional"
                },
                "ratingValue": "4.9",
                "bestRating": "100",
                "worstRating": "1",
                "ratingCount": "99"
              },
              {
                "@type": "WebPage",
                "name": "Professional IT Support Services",
                "url": "https://www.itsupport.net.in/industries/professional",
                "inLanguage": "en-US",
                "isPartOf": {
                  "@type": "WebSite",
                  "url": "https://www.itsupport.net.in/",
                  "name": "L4RG US LLC"
                }
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 156790,
                    "name": "Home",
                    "item": "https://www.itsupport.net.in/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 156791,
                    "name": "industries",
                    "item": "https://www.itsupport.net.in/industries"
                  },
                  {
                    "@type": "ListItem",
                    "position": 156792,
                    "name": "Professional support industries",
                    "item": "https://www.itsupport.net.in/industries/professional"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Can you secure confidential client data against cyber threats?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. We implement multi-layered cybersecurity measures including encryption, MFA, and DLP systems to keep client data secure."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you provide IT solutions for hybrid and remote work?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Absolutely. We set up VPNs, cloud desktops, and secure collaboration tools for distributed teams."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can you integrate our project management tools with existing systems?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. We specialize in integrating project management platforms with CRM, email, and communication systems for smoother workflows."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you offer cloud solutions for professional firms?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. We provide cloud migration, hosting, and backup services tailored for professional services."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How quickly can you respond to IT emergencies?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We offer instant remote assistance and priority on-site dispatch to address critical issues promptly."
                    }
                  }
                ]
              },
              {
                "@type": "QAPage",
                "mainEntity": {
                  "@type": "Question",
                  "name": "What IT support services does ITSupport.net.in provide for professional services firms?",
                  "text": "Professional services firms need reliable IT infrastructure for smooth operations.",
                  "url": "https://www.itsupport.net.in/industries/professional#q1a1",
                  "answerCount": 1,
                  "upvoteCount": 0,
                  "datePublished": "2025-07-14T10:00:00+05:30",
                  "author": {
                    "@type": "Person",
                    "name": "IT Support Team",
                    "url": "https://www.itsupport.net.in/"
                  },
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We provide network setup, cybersecurity, cloud integration, managed IT services, and 24/7 technical assistance tailored for law firms, consultancies, accounting firms, and corporate offices.",
                    "url": "https://www.itsupport.net.in/industries/professional#q1a1",
                    "dateCreated": "2025-07-14T10:00:00+05:30",
                    "upvoteCount": 0,
                    "author": {
                      "@type": "Person",
                      "name": "IT Support Team",
                      "url": "https://www.itsupport.net.in/"
                    }
                  }
                }
              },
              {
                "@type": "QAPage",
                "mainEntity": {
                  "@type": "Question",
                  "name": "How does ITSupport.net.in secure sensitive data for professional services?",
                  "text": "Data protection is critical for law, accounting, and consultancy firms.",
                  "url": "https://www.itsupport.net.in/industries/professional#q3a1",
                  "answerCount": 1,
                  "upvoteCount": 0,
                  "datePublished": "2025-07-14T10:10:00+05:30",
                  "author": {
                    "@type": "Person",
                    "name": "IT Support Team",
                    "url": "https://www.itsupport.net.in/"
                  },
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We implement encryption, firewalls, secure cloud storage, malware protection, and regular security audits to safeguard sensitive client and business data.",
                    "url": "https://www.itsupport.net.in/industries/professional#q3a1",
                    "dateCreated": "2025-07-14T10:10:00+05:30",
                    "upvoteCount": 0,
                    "author": {
                      "@type": "Person",
                      "name": "IT Support Team",
                      "url": "https://www.itsupport.net.in/"
                    }
                  }
                }
              },
              {
                "@type": "QAPage",
                "mainEntity": {
                  "@type": "Question",
                  "name": "Does ITSupport.net.in provide 24/7 IT support for professional services firms?",
                  "text": "Round-the-clock support ensures uninterrupted business operations.",
                  "url": "https://www.itsupport.net.in/industries/professional#q4a1",
                  "answerCount": 1,
                  "upvoteCount": 0,
                  "datePublished": "2025-07-14T10:15:00+05:30",
                  "author": {
                    "@type": "Person",
                    "name": "IT Support Team",
                    "url": "https://www.itsupport.net.in/"
                  },
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we offer 24/7 remote and on-site IT support to ensure law firms, consultancies, and corporate offices run smoothly without downtime.",
                    "url": "https://www.itsupport.net.in/industries/professional#q4a1",
                    "dateCreated": "2025-07-14T10:15:00+05:30",
                    "upvoteCount": 0,
                    "author": {
                      "@type": "Person",
                      "name": "IT Support Team",
                      "url": "https://www.itsupport.net.in/"
                    }
                  }
                }
              }
            ]
          }          
    },
    {
        slug:"retail-ecommerce",
        title:"",
        subtitle:"",
        description:"",
        imageUrl:"",
        metadata:{
            title: "IT Support for Retail & eCommerce | Secure & Scalable Solutions",
            description:
              "IT support retail, eCommerce IT solutions, POS system support, online store technical help, IT security for eCommerce, retail technology support",
            keywords: [
              "IT support retail",
              "eCommerce IT solutions",
              "POS system support",
              "online store technical help",
              "IT security for eCommerce",
              "retail technology support",
            ],
            openGraph: {
              title: "Expert IT Support for Retail & eCommerce Businesses",
              description:
                "Get expert IT support for the retail & eCommerce industry including POS setup, cloud solutions, cybersecurity, and 24/7 helpdesk. Trusted by businesses globally.",
              url: "https://www.itsupport.net.in/industries/retail-ecommerce/",
              siteName: "IT Support Services for Retail & eCommerce",
              images: [
                {
                  url: "image-url",
                  alt: "POS Support, eCommerce IT Solutions, Retail Technology Experts",
                  type: "images/png",
                  width: "Fix Size",
                  height: "Fix Size",
                  secureUrl: "image-url",
                },
              ],
              type: "website",
              locale: "en_US",
            },
            twitter: {
              card: "summary_large_image",
              title: "Retail & eCommerce IT Support | POS, Cloud & Cybersecurity Experts",
              description:
                "Expert IT support for retail & eCommerce: POS system setup, cloud migration, cybersecurity, and 24/7 helpdesk for smooth business operations.",
              image: "image-url",
              imageAlt:
                "IT support services for retail and eCommerce businesses - POS, cloud, cybersecurity",
              imageType: "images/png",
              creator: "@L4RGINDIA",
              url: "https://www.itsupport.net.in/industries/retail-ecommerce/",
            },
            authors: [
              { name: "providing expert IT support for Retail and eCommerce businesses" },
            ],
            copyright: "© 2025",
            robots: { index: true, follow: true },
            alternates: {
              canonical: "https://www.itsupport.net.in/industries/retail-ecommerce/",
              languages: {
                "en-US": "https://www.itsupport.net.in/industries/retail-ecommerce/",
              },
            },
          },
        schema:{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@id": "#product",
                "@type": "Product",
                "name": "IT Support Services for Retail & eCommerce",
                "description": "provides expert IT support services tailored for the retail and eCommerce industry, including POS system maintenance, cloud solutions, cybersecurity, and 24/7 technical assistance.",
                "url": "https://www.itsupport.net.in/industries/retail-ecommerce",
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "938725"
                },
                "audience": {
                  "@type": "Audience",
                  "description": "Target audience for ITSupport.net.in's Retail & eCommerce industry IT services, including website support, POS system maintenance, cybersecurity, cloud solutions, and 24/7 technical assistance.",
                  "audienceType": "Retail Business Owners, eCommerce Entrepreneurs, Online Store Managers, Retail IT Teams, POS System Operators"
                }
              },
              {
                "@type": "WebSite",
                "url": "https://www.itsupport.net.in/industries/retail-ecommerce",
                "name": "L4RG IT Support Services for Retail & eCommerce",
                "description": "Expert IT support for the retail and eCommerce industry. We provide website maintenance, POS system troubleshooting, cloud solutions, and cybersecurity for online stores and physical retail businesses.",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://www.itsupport.net.in/search?q={search_term_string}"
                  },
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@type": "Review",
                "name": "Retail & eCommerce IT Support Services Review",
                "url": "https://www.itsupport.net.in/industries/retail-ecommerce",
                "image": "https://www.itsupport.net.in/images/healthcare-it-support.jpg",
                "author": {
                  "@type": "Person",
                  "name": "Rabi"
                },
                "reviewBody": "itsupport.net.in provided outstanding IT support for our eCommerce platform and retail POS systems. Quick response times and knowledgeable staff make them the best in the business.",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "4.9"
                },
                "itemReviewed": {
                  "@type": "LocalBusiness",
                  "name": "L4RG US LLC",
                  "priceRange": "12000",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "L4RG US LLC, 105 ELMSFORD ST, DURHAM, NC 27703, USA",
                    "addressLocality": "ELMSFORD ST",
                    "addressRegion": "ELMSFORD ST",
                    "postalCode": "27703",
                    "telephone": "+1-978-615-9403",
                    "addressCountry": {
                      "@type": "Country",
                      "name": "United State America"
                    }
                  }
                }
              },
              {
                "@type": "ProfessionalService",
                "name": "Retail & eCommerce IT Support Services",
                "image": "https://www.itsupport.net.in/images/healthcare-it-support.jpg",
                "@id": "https://www.itsupport.net.in/industries/retail-ecommerce",
                "url": "https://www.itsupport.net.in/",
                "telephone": "+1-978-615-9403",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "L4RG US LLC, 105 ELMSFORD ST, DURHAM, NC 27703, USA",
                  "addressLocality": "ELMSFORD ST",
                  "postalCode": "27703",
                  "addressCountry": "USA"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 35.960390,
                  "longitude": -78.827200
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
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
                  "https://www.itsupport.net.in/"
                ]
              },
              {
                "@type": "EmployerAggregateRating",
                "itemReviewed": {
                  "@type": "Organization",
                  "name": "Expert IT Solutions for Retail & Online Stores | itsupport.net.in",
                  "sameAs": "https://www.itsupport.net.in/industries/retail-ecommerce"
                },
                "ratingValue": "99",
                "bestRating": "100",
                "worstRating": "1",
                "ratingCount": "4.9"
              },
              {
                "@type": "WebPage",
                "name": "Retail & eCommerce IT Support Services",
                "url": "https://www.itsupport.net.in/industries/retail-ecommerce",
                "inLanguage": "en-US",
                "isPartOf": {
                  "@type": "WebSite",
                  "url": "https://www.itsupport.net.in/",
                  "name": "L4RG US LLC"
                }
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 156790,
                    "name": "Home",
                    "item": "https://www.itsupport.net.in/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 156791,
                    "name": "industries",
                    "item": "https://www.itsupport.net.in/industries"
                  },
                  {
                    "@type": "ListItem",
                    "position": 156792,
                    "name": "finance & banking support industries",
                    "item": "https://www.itsupport.net.in/industries/retail-ecommerce"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Can you integrate our POS system with our online store?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. We provide seamless integration between POS and e-commerce platforms to sync sales, inventory, and customer data."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do you ensure our payment systems are secure?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We implement PCI DSS-compliant systems, encrypt transactions, and deploy fraud detection tools to protect customer data."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you offer support for multiple store locations?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": " Absolutely. We centralize IT management for multi-location retailers to ensure consistent operations across all branches."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can you handle high traffic during seasonal sales?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. We optimize e-commerce platforms for scalability, ensuring they handle spikes in traffic during promotions or festive seasons."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you provide website maintenance for e-commerce stores?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. We offer continuous monitoring, updates, and optimization to keep your e-commerce store running smoothly."
                    }
                  }
                ]
              },
              [
                {
                  "@type": "QAPage",
                  "mainEntity": {
                    "@type": "Question",
                    "name": "Do you provide IT support for retail POS systems?",
                    "text": "We offer complete IT support for retail and eCommerce POS systems, ensuring secure transactions and minimal downtime.",
                    "url": "https://www.itsupport.net.in/industries/retail-ecommerce#q1a1",
                    "answerCount": 1,
                    "upvoteCount": 0,
                    "datePublished": "2025-07-14T10:00:00+05:30",
                    "author": {
                      "@type": "Person",
                      "name": "IT Support Team",
                      "url": "https://www.itsupport.net.in/"
                    },
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, our team provides full IT support for POS systems used in retail and eCommerce. We handle installation, troubleshooting, software updates, and network security to keep your transactions running smoothly.",
                      "url": "https://www.itsupport.net.in/industries/retail-ecommerce#q1a1",
                      "dateCreated": "2025-07-14T10:00:00+05:30",
                      "upvoteCount": 0,
                      "author": {
                        "@type": "Person",
                        "name": "IT Support Team",
                        "url": "https://www.itsupport.net.in/"
                      }
                    }
                  }
                },
                {
                  "@type": "QAPage",
                  "mainEntity": {
                    "@type": "Question",
                    "name": "Can you secure my eCommerce website from cyber threats?",
                    "text": "We provide cybersecurity solutions specifically designed for eCommerce businesses, including firewalls, SSL setup, and intrusion detection.",
                    "url": "https://www.itsupport.net.in/industries/retail-ecommerce#q3a1",
                    "answerCount": 1,
                    "upvoteCount": 0,
                    "datePublished": "2025-07-14T10:10:00+05:30",
                    "author": {
                      "@type": "Person",
                      "name": "IT Support Team",
                      "url": "https://www.itsupport.net.in/"
                    },
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, we specialize in securing eCommerce platforms with advanced threat detection, secure payment gateway integration, SSL configuration, and regular security audits to keep your customer data safe.",
                      "url": "https://www.itsupport.net.in/industries/retail-ecommerce#q3a1",
                      "dateCreated": "2025-07-14T10:10:00+05:30",
                      "upvoteCount": 0,
                      "author": {
                        "@type": "Person",
                        "name": "IT Support Team",
                        "url": "https://www.itsupport.net.in/"
                      }
                    }
                  }
                },
                {
                  "@type": "QAPage",
                  "mainEntity": {
                    "@type": "Question",
                    "name": "Do you offer 24/7 support for online store downtime?",
                    "text": "We ensure your online retail store is monitored round-the-clock to prevent costly downtime.",
                    "url": "https://www.itsupport.net.in/industries/retail-ecommerce#q4a1",
                    "answerCount": 1,
                    "upvoteCount": 0,
                    "datePublished": "2025-07-14T10:15:00+05:30",
                    "author": {
                      "@type": "Person",
                      "name": "IT Support Team",
                      "url": "https://www.itsupport.net.in/"
                    },
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Absolutely. Our 24/7 monitoring and rapid-response support team ensures your online retail store remains operational, with minimal disruption to sales.",
                      "url": "https://www.itsupport.net.in/industries/retail-ecommerce#q4a1",
                      "dateCreated": "2025-07-14T10:15:00+05:30",
                      "upvoteCount": 0,
                      "author": {
                        "@type": "Person",
                        "name": "IT Support Team",
                        "url": "https://www.itsupport.net.in/"
                      }
                    }
                  }
                }
              ]              
            ]
          }
          
    },
    {
        slug:"travel-hospitality",
        title:"",
        subtitle:"",
        description:"",
        imageUrl:"",
        metadata:{
            title: "Travel & Hospitality IT Solutions | Network, PMS, Cybersecurity Support",
            description:
              "IT support for travel agencies, hotel network setup, hospitality IT security, travel business cloud integration, reservation system IT support",
            keywords: [
              "travel industry IT support",
              "hotel IT services",
              "hospitality tech support",
              "PMS integration",
              "cybersecurity for hotels",
              "resort IT solutions",
              "cloud services for travel",
              "IT support for travel agencies",
              "hotel network setup",
              "hospitality IT security",
              "travel business cloud integration",
              "reservation system IT support",
              "hotel IT infrastructure",
              "travel technology solutions",
              "hospitality IT consulting",
              "guest Wi-Fi management",
              "hotel data security",
              "hospitality software support",
              "IT maintenance for resorts",
              "tourism industry IT solutions",
            ],
            openGraph: {
              title:
                "IT Support for Travel & Hospitality Industry | 24/7 Hotel & Resort Tech Services",
              description:
                "travel industry IT support, hotel IT services, hospitality tech support, PMS integration, cybersecurity for hotels, resort IT solutions, cloud services for travel",
              url: "https://www.itsupport.net.in/industries/travel-hospitality/",
              siteName: "ITSupport.net.in - Travel & Hospitality IT Support Services",
              images: [
                {
                  url: "image-url",
                  alt: "IT Support Services for Travel & Hospitality Industry - ITSupport.net.in",
                  type: "images/png",
                  width: "Fix Size",
                  height: "Fix Size",
                  secureUrl: "image-url",
                },
              ],
              type: "website",
              locale: "en_US",
            },
            twitter: {
              card: "summary_large_image",
              title:
                "Hotel & Resort IT Support Services | Travel Industry Tech Experts",
              description:
                "hotel IT infrastructure, travel technology solutions, hospitality IT consulting, guest Wi-Fi management, hotel data security",
              image: "image-url",
              imageAlt:
                "IT support services for the travel and hospitality industry, including hotels, resorts, and travel agencies",
              imageType: "images/png",
              creator: "@L4RGINDIA",
              url: "https://www.itsupport.net.in/industries/travel-hospitality/",
            },
            authors: [
              {
                name: "ITSupport.net.in - Travel & Hospitality Industry IT Support Services",
              },
            ],
            copyright: "© 2025",
            robots: { index: true, follow: true },
            alternates: {
              canonical: "https://www.itsupport.net.in/industries/travel-hospitality/",
              languages: {
                "en-US": "https://www.itsupport.net.in/industries/travel-hospitality/",
              },
            },
          },
        schema:{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@id": "#product",
                "@type": "Product",
                "name": "IT Support Services for Travel & Hospitality Industry",
                "description": "Specialized IT support solutions for the travel and hospitality sector, including hotel management systems, booking platforms, network security, cloud integration, and 24/7 technical assistance tailored for hotels, resorts, and travel agencies.",
                "url": "https://www.itsupport.net.in/industries/travel-hospitality",
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "912943"
                },
                "audience": {
                  "@type": "Audience",
                  "description": "Travel and hospitality businesses requiring reliable IT support, booking system management, cybersecurity, and cloud services.",
                  "audienceType": "Hotels,Resorts,Travel Agencies,Tour Operators,Hospitality Service Providers"
                }
              },
              {
                "@type": "WebSite",
                "url": "https://www.itsupport.net.in/industries/travel-hospitality",
                "name": "L4RG IT Support Services for Travel & Hospitality Industry",
                "description": "Specialized IT support services for the travel and hospitality sector, including hotel management systems, booking platforms, network security, cloud integration, and 24/7 technical assistance for hotels, resorts, and travel agencies.",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://www.itsupport.net.in/search?q={search_term_string}"
                  },
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@type": "Review",
                "name": "Travel & Hospitality IT Support Review",
                "url": "https://www.itsupport.net.in/industries/travel-hospitality",
                "image": "https://www.itsupport.net.in/images/education-it-support.jpg",
                "author": {
                  "@type": "Person",
                  "name": "Emma Johnson"
                },
                "reviewBody": "ITSupport.net.in has transformed our hotel's IT systems. From secure booking platforms to reliable Wi-Fi networks, their quick response, proactive monitoring, and expert support have enhanced guest experiences and streamlined operations.",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "4.9"
                },
                "itemReviewed": {
                  "@type": "LocalBusiness",
                  "name": "L4RG US LLC",
                  "priceRange": "12000",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "L4RG US LLC, 105 ELMSFORD ST, DURHAM, NC 27703, USA",
                    "addressLocality": "ELMSFORD ST",
                    "addressRegion": "ELMSFORD ST",
                    "postalCode": "27703",
                    "telephone": "+1-978-615-9403",
                    "addressCountry": {
                      "@type": "Country",
                      "name": "United State America"
                    }
                  }
                }
              },
              {
                "@type": "ProfessionalService",
                "name": "Travel & Hospitality IT Support Services",
                "image": "https://www.itsupport.net.in/images/healthcare-it-support.jpg",
                "@id": "https://www.itsupport.net.in/industries/travel-hospitality",
                "url": "https://www.itsupport.net.in/",
                "telephone": "+1-978-615-9403",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "L4RG US LLC, 105 ELMSFORD ST, DURHAM, NC 27703, USA",
                  "addressLocality": "ELMSFORD ST",
                  "postalCode": "27703",
                  "addressCountry": "USA"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 35.960390,
                  "longitude": -78.827200
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
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
                  "https://www.itsupport.net.in/"
                ]
              },
              {
                "@type": "EmployerAggregateRating",
                "itemReviewed": {
                  "@type": "Organization",
                  "name": "ITSupport.net.in - Travel & Hospitality IT Support Services",
                  "sameAs": "https://www.itsupport.net.in/industries/travel-hospitality"
                },
                "ratingValue": "99",
                "bestRating": "100",
                "worstRating": "1",
                "ratingCount": "4.9"
              },
              {
                "@type": "WebPage",
                "name": "Travel & Hospitality IT Support Services",
                "url": "https://www.itsupport.net.in/industries/travel-hospitality",
                "inLanguage": "en-US",
                "isPartOf": {
                  "@type": "WebSite",
                  "url": "https://www.itsupport.net.in/",
                  "name": "L4RG US LLC"
                }
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 156790,
                    "name": "Home",
                    "item": "https://www.itsupport.net.in/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 156791,
                    "name": "industries",
                    "item": "https://www.itsupport.net.in/industries"
                  },
                  {
                    "@type": "ListItem",
                    "position": 156792,
                    "name": "Travel & Hospitality industries",
                    "item": "https://www.itsupport.net.in/industries/travel-hospitality"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Can you integrate our booking system with third-party platforms like Expedia or Booking.com?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. We offer multi-channel booking integration for OTAs, mobile apps, and your website."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do you secure guest Wi-Fi in hotels?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We implement separate networks for guests and staff, use firewalls, and enforce encrypted connections."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you help with payment security compliance?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": " Absolutely. We ensure your payment systems meet PCI-DSS standards for safe and compliant transactions."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can you support both small boutique hotels and large resorts?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": " Yes. Our solutions are fully scalable for any size property, from small guesthouses to global chains."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you provide mobile app support for travel companies?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. We maintain, update, and optimize mobile apps for travel agencies, airlines, and hotels."
                    }
                  }
                ]
              },
              {
                "@type": "QAPage",
                "mainEntity": {
                  "@type": "Question",
                  "name": "What IT support services do you offer for the travel and hospitality industry?",
                  "text": "We provide specialized IT support for travel agencies, hotels, resorts, and hospitality businesses, including property management system (PMS) integration, reservation system support, cybersecurity, network setup, cloud services, and 24/7 technical assistance.",
                  "url": "https://www.itsupport.net.in/industries/travel-hospitality#q1a1",
                  "answerCount": 1,
                  "upvoteCount": 0,
                  "datePublished": "2025-07-14T10:00:00+05:30",
                  "author": {
                    "@type": "Person",
                    "name": "IT Support Team",
                    "url": "https://www.itsupport.net.in/"
                  },
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We provide specialized IT support for travel agencies, hotels, resorts, and hospitality businesses, including property management system (PMS) integration, reservation system support, cybersecurity, network setup, cloud services, and 24/7 technical assistance.",
                    "url": "https://www.itsupport.net.in/industries/travel-hospitality#q1a1",
                    "dateCreated": "2025-07-14T10:00:00+05:30",
                    "upvoteCount": 0,
                    "author": {
                      "@type": "Person",
                      "name": "IT Support Team",
                      "url": "https://www.itsupport.net.in/"
                    }
                  }
                }
              },
              {
                "@type": "QAPage",
                "mainEntity": {
                  "@type": "Question",
                  "name": "Do you offer 24/7 IT support for hotels and resorts?",
                  "text": "Yes, our IT support for the travel and hospitality sector is available 24/7 to ensure minimal downtime and smooth guest experiences.",
                  "url": "https://www.itsupport.net.in/industries/travel-hospitality#q3a1",
                  "answerCount": 1,
                  "upvoteCount": 0,
                  "datePublished": "2025-07-14T10:10:00+05:30",
                  "author": {
                    "@type": "Person",
                    "name": "IT Support Team",
                    "url": "https://www.itsupport.net.in/"
                  },
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our IT support for the travel and hospitality sector is available 24/7 to ensure minimal downtime and smooth guest experiences.",
                    "url": "https://www.itsupport.net.in/industries/travel-hospitality#q3a1",
                    "dateCreated": "2025-07-14T10:10:00+05:30",
                    "upvoteCount": 0,
                    "author": {
                      "@type": "Person",
                      "name": "IT Support Team",
                      "url": "https://www.itsupport.net.in/"
                    }
                  }
                }
              },
              {
                "@type": "QAPage",
                "mainEntity": {
                  "@type": "Question",
                  "name": "Can you assist with cybersecurity for hospitality businesses?",
                  "text": "Absolutely. We provide advanced cybersecurity solutions tailored for the travel and hospitality industry to protect guest data, payment systems, and operational networks from cyber threats.",
                  "url": "https://www.itsupport.net.in/industries/travel-hospitality#q4a1",
                  "answerCount": 1,
                  "upvoteCount": 0,
                  "datePublished": "2025-07-14T10:15:00+05:30",
                  "author": {
                    "@type": "Person",
                    "name": "IT Support Team",
                    "url": "https://www.itsupport.net.in/"
                  },
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. We provide advanced cybersecurity solutions tailored for the travel and hospitality industry to protect guest data, payment systems, and operational networks from cyber threats.",
                    "url": "https://www.itsupport.net.in/industries/travel-hospitality#q4a1",
                    "dateCreated": "2025-07-14T10:15:00+05:30",
                    "upvoteCount": 0,
                    "author": {
                      "@type": "Person",
                      "name": "IT Support Team",
                      "url": "https://www.itsupport.net.in/"
                    }
                  }
                }
              }
            ]
          }
          
    },
    
]


// export function getCityByName(name: string): City | undefined {
//     return cities.find(
//       (cat) => cat.cityName.toLowerCase() === name.trim().toLowerCase()
//     );
// }

export function getIndustriesBySlug(slug: string): Industry | undefined {
  return industriesData.find(
    (cat) => cat.slug.toLowerCase() === slug.trim().toLowerCase()
  );
}

export function getAllIndustries() {
  return [...industriesData]
}