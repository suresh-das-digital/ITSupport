import CoreServiceCard from "@/components/cards/CoreServiceCard";
import HeroSection from "@/components/HeroSection";
import { useLocale, useTranslations } from "next-intl";
import ServiceOffer from "../services/_component/ServiceOffer";
import {
  heroServicesDataEs,
  ServiceFQAsDataEs,
} from "../services/_component/constant";
import { outCoreDataEs } from "@/utils/constant/outCoreData";
import Typography from "@/components/ui/Typography";
import ServiceWhyChoose from "../services/_component/ServiceWhyChoose";
import FAQs from "@/components/FAQ/FAQs";
import { whyChooseDataDetailEs } from "../services/_component/ServiceWhyChooseConstant";
import { getMetaData, getStaticParams } from "@/lib/seo";
import Script from "next/script";

export const generateStaticParams = getStaticParams('serviciosdeti')
// export const generateMetadata = getMetaData('serviciosdeti');
export const metadata = {
  title: "Servicios de TI – Soporte Técnico Profesional con 20+ Años de Experiencia",
  description: "Descubre los servicios de soporte técnico de ITSupport.net.in: respaldo de datos, antivirus, redes, nube, comercio electrónico, reparación de hardware y más. Confianza global con más de 10,000 clientes satisfechos.",
  keywords: [
    "servicios de TI",
    "soporte técnico",
    "respaldo de datos",
    "soporte antivirus",
    "soporte de impresoras",
    "soporte de redes",
    "soporte en la nube",
    "soporte para comercio electrónico",
    "reparación de hardware",
    "soporte de correo electrónico",
    "soporte de Wi-Fi",
    "soporte en español"
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
    canonical: "https://www.itsupport.net.in/servicios-de-ti",
    languages: {
      "en": "https://www.itsupport.net.in/servicios-de-ti",
      "es-US": "https://www.itsupport.net.in/servicios-de-ti"
    }
  },
  openGraph: {
    type: "website",
    url: "https://www.itsupport.net.in/servicios-de-ti",
    title: "Servicios de TI – Soporte Técnico Profesional con 20+ Años de Experiencia",
    description: "Explora los servicios de soporte técnico de ITSupport.net.in: respaldo de datos, antivirus, redes, nube, comercio electrónico, reparación de hardware y más. Confianza global con más de 10,000 clientes satisfechos.",
    siteName: "ITSupport.net.in | Servicios de Soporte Técnico",
    locale: "en_US",
    images: [{
      url: "image-url",
      alt: "Servicios de Soporte Técnico",
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
    title: "Servicios de TI – Soporte Técnico Profesional con 20+ Años de Experiencia",
    description: "Descubre los servicios de soporte técnico de ITSupport.net.in: respaldo de datos, antivirus, redes, nube, comercio electrónico, reparación de hardware y más. Confianza global con más de 10,000 clientes satisfechos.",
    url: "https://www.itsupport.net.in/servicios-de-ti",
    images: [{
      url: "image-url",
      alt: "Servicios de Soporte Técnico",
      type: "images/webp",
    }],
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.itsupport.net.in/servicios-de-ti#webpage",
      "url": "https://www.itsupport.net.in/servicios-de-ti",
      "name": "Servicios de TI – IT Support | Soporte Técnico y Outsourcing para Empresas",
      "description": "Servicios de TI integrales para empresas B2B, incluyendo soporte técnico, externalización comercial, generación de prospectos, y gestión de ventas. IT Support ofrece soluciones de outsourcing profesional para optimizar operaciones y aumentar ingresos.",
      "inLanguage": "es",
      "datePublished": "2005-01-10T09:00:00+05:30",
      "dateModified": "2025-08-17T09:00:00+05:30",
      "publisher": {
        "@type": "Organization",
        "name": "IT Support | Servicios de TI y Outsourcing B2B",
        "logo": {
          "@type": "ImageObject",
          "url": "image-url"
        },
        "url": "https://www.itsupport.net.in/servicios-de-ti"
      },
      "about": {
        "@type": "Thing",
        "name": "Servicios de TI, Outsourcing B2B, Soporte Técnico, Generación de prospectos, Ventas"
      }
    },

    {
      "@type": "Product",
      "@id": "#product",
      "name": "Servicios de TI | Soporte Técnico y Outsourcing B2B",
      "image": ["image-url"],
      "description": "IT Support ofrece servicios integrales de TI, soporte técnico profesional y outsourcing de ventas para empresas B2B. Más de 20 años ayudando a negocios en generación de clientes, cierre de ventas y crecimiento empresarial.",
      "url": "https://www.itsupport.net.in/servicios-de-ti",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "9913587"
      },
      "audience": {
        "@type": "Audience",
        "name": "Empresarios, Gerentes de Ventas, y Emprendedores",
        "description": "Tomadores de decisiones que buscan soluciones de outsourcing y soporte profesional para optimizar ventas y procesos empresariales.",
        "audienceType": "Pymes, Startups, Empresas B2B, Equipos comerciales"
      }
    },

    {
      "@type": "BreadcrumbList",
      "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Inicio",
          "item": "https://www.itsupport.net.in"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Servicios de TI",
          "item": "https://www.itsupport.net.in/servicios-de-ti"
        }
      ]
    },

    {
      "@type": "WebSite",
      "url": "https://www.itsupport.net.in/servicios-de-ti",
      "name": "Servicios de TI – IT Support",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.itsupport.net.in/servicios-de-ti/search?q={search_term_string}"
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
      "name": "Satisfacción con el Soporte Técnico y Outsourcing B2B de IT Support",
      "url": "https://www.itsupport.net.in/servicios-de-ti",
      "image": "image-url",
      "reviewBody": "IT Support ha revolucionado nuestra gestión comercial y soporte técnico B2B. Sus soluciones integrales generan resultados medibles en generación de clientes y eficiencia operativa. Su equipo ofrece profesionalismo y compromiso.",
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
      "name": "IT Support | Servicios de TI y Outsourcing B2B",
      "image": "image-url",
      "@id": "",
      "url": "https://www.itsupport.net.in/servicios-de-ti",
      "telephone": "+91-906-968-9226",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "IT Support, 105 ELMSFORD ST, DURHAM, NC 27703, USA",
        "addressLocality": "Durham",
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
        "https://www.itsupport.net.in/servicios-de-ti"
      ]
    },

    {
      "@type": "EmployerAggregateRating",
      "itemReviewed": {
        "@type": "Organization",
        "name": "IT Support | Servicios de TI y Outsourcing B2B",
        "sameAs": "https://www.itsupport.net.in/servicios-de-ti"
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
          "name": "¿Qué incluye el servicio de soporte técnico de IT Support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "IT Support ofrece soporte técnico profesional, ayuda en ventas B2B y gestión integral del ciclo comercial. Our experienced team ensures seamless operations and better revenue."
          }
        },
        {
          "@type": "Question",
          "name": "How does IT Support boost sales for B2B companies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Con más de 20 años de experiencia, nuestros expertos crean estrategias que aceleran la captación de clientes, la gestión y cierre de ventas. Outsourcing reduces risk and increases efficiency."
          }
        },
        {
          "@type": "Question",
          "name": "¿IT Support personaliza soluciones para cada industria?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí, nuestros servicios se adaptan al sector, tamaño y necesidades del negocio. Personalized B2B solutions maximize growth potential."
          }
        }
      ]
    },

    {
      "@type": "QAPage",
      "mainEntity": {
        "@type": "Question",
        "name": "¿Cómo ayuda IT Support a empresas B2B con soporte técnico y ventas?",
        "text": "What technical support and sales outsourcing solutions can IT Support provide to help B2B organizations grow revenue?",
        "answerCount": 1,
        "upvoteCount": 14,
        "datePublished": "2025-08-17T14:00:00+05:30",
        "author": {
          "@type": "Person",
          "name": "Cherry James",
          "url": "https://www.itsupport.net.in/servicios-de-ti"
        },
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "IT Support ofrece servicios integrales de TI, soporte profesional y outsourcing comercial para empresas B2B. Our team manages leads, sales pipeline, deal closure, and client communication to increase operational efficiency and revenue. Experiencia reconocida en el sector y resultados probados.",
          "dateCreated": "2025-07-14T10:00:00+05:30",
          "upvoteCount": 12,
          "url": "https://www.itsupport.net.in/servicios-de-ti#q1a1",
          "author": {
            "@type": "Person",
            "name": "Mickey Taylor",
            "url": "https://www.itsupport.net.in/servicios-de-ti"
          }
        }
      }
    }
  ]
}

export default function ServiciosDeTiPage() {
  const t = useTranslations("Services");
  const heroServices = heroServicesDataEs;
  const outCore = outCoreDataEs;
  const serviceFQA = ServiceFQAsDataEs;

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
      <HeroSection
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
        buttonTexts={[{ label: "Explore Service", href: "#" }]}
        breadcrumbs={[{ home: "Home" }, { home: "Services" }]}
        imageSrc="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80"
      />

      <ServiceOffer
        serviceProvider={serviceProvider}
        heroServices={heroServices}
      />

      <section className="py-16 px-4 sm:px-6 bg-[#f4f7fa]">
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <div className="w-full p-4">
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
                  href={core.href}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServiceWhyChoose
        cards={whyChooseDataDetailEs}
        title="Por qué asociarse con ITSupport.net.in para la excelencia en el correo electrónico"
        desc="Elegir a ITSupport.net.in como su socio de soporte de correo electrónico significa aprovechar más de una década de experiencia especializada y una trayectoria global de empoderar a más de 100,000 clientes satisfechos. Nuestro compromiso con su comunicación ininterrumpida se basa en"
      />
      <FAQs data={serviceFQA} />

      <Script
          id="behavioral-marketing-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    </>
  );
}
