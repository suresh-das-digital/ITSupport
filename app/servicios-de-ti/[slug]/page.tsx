import Head from "next/head";
import { useLocale, useTranslations } from "next-intl";
import IssueCategory from "@/app/services/[slug]/_components/IssueCategory";
import ServiceCard from "@/app/services/[slug]/_components/ServiceCard";
import SpecificIssue from "@/app/services/[slug]/_components/SpecificIssue";
import SpecificIssueList from "@/app/services/[slug]/_components/SpecificIssueList";
import ServiceOffer from "@/app/services/_component/ServiceOffer";
import ServiceWhyChoose from "@/app/services/_component/ServiceWhyChoose";
import FAQs from "@/components/FAQ/FAQs";
// import HeroSection from "@/components/HeroSection";
import Typography from "@/components/ui/Typography";
import { getMetaData, getStaticParams, renderJsonLd } from "@/lib/seo";
// import { ServiceMeta, servicesMetaEs } from "@/lib/servicesMeta";
import {
  Service,
  serviceDetailDataEs,
} from "@/utils/constant/serviceDetailData";
// import { servicesMenuItemEs } from "@/utils/constant/defaultNavLinksES";
import { spnaishServiceFooterLink } from "@/utils/constant/footerServicesLinks";
import { JsonLd } from "@/components/JsonLd";
import { use } from "react";
import { IssueSection } from "@/app/services/[slug]/_components/IssueSection";
import { ServiceHighlights } from "@/app/services/[slug]/_components/ServiceHighlights";
import HeroSection from "@/app/services/[slug]/newcompoennts/HeroSection";
import DecriptionSection from "@/app/services/[slug]/newcompoennts/DecriptionSection";
import InfoSection1 from "@/app/services/[slug]/newcompoennts/InfoSection1";
import InfoSection2 from "@/app/services/[slug]/newcompoennts/InfoSection2";
import InfoSection3 from "@/app/services/[slug]/newcompoennts/InfoSection3";
import FaqSection from "@/app/services/[slug]/newcompoennts/FaqSection";
import InfoSection4 from "@/app/services/[slug]/newcompoennts/InfoSection4";
// import { ServiceMeta, servicesMetaEs } from "@/_lib_back/servicesMeta";

interface ServiceDetailSpanishProps {
  params: { slug: string };
}

export const generateStaticParams = getStaticParams('serviciosdeti')
export const generateMetadata = getMetaData('serviciosdeti');

export default function InsightDetail(props: any) {
  const decodedString = decodeURIComponent(use<any>(props.params).slug);

  // const meta: ServiceMeta | undefined = servicesMetaEs[decodedString || ""];

  const t = useTranslations();
  const locale = useLocale();
  const menuItem = spnaishServiceFooterLink.find((s) =>
    s.href.includes(decodedString)
  );

  let service: Service =
    serviceDetailDataEs.find((s) => s.slug === decodedString) || {};

  if (!service) {
    return <div className="p-8">Service not found</div>;
  }

  // const jsonLdScripts = renderJsonLd(meta?.jsonLd ?? []);

  return (
    <>
      <JsonLd type="serviciosdeti" slug={decodedString} />
      {/* <HeroSection
        heroTitle={service.title || ""}
        heroIntro={service.subtitle || ""}
        buttonTexts={[
          { label: "Obtenga SAoporte Ahora" },
          { label: "Solicitar una Llamada" },
        ]}
        breadcrumbs={[
          {
            home: "Hogar",
          },
          {
            home: "Servicios De TI",
          },
          {
            home: menuItem?.label || "",
          },
        ]}
        imageSrc={service.heroImage}
      /> */}
      <HeroSection
        heroimage={service.heroImage || ""}
        title={service.title || ""}
        subtitle={service.subtitle || ""}
        pageName={service.title || ""}
        icon={service.heroRightSideIcons && service.heroRightSideIcons[0]}
        buttonText1="Obtenga SAoporte Ahora"
        buttonText2="Solicitar una Llamada"
      />

      <DecriptionSection
        title ={ service?.intro?.headline || ""}
        description = {service?.intro?.description || ""}
        imageAlt =  {service?.intro?.headline || ""}
        imageTitle = {service?.intro?.headline || ""}
        image =  {service?.intro?.image || ""}
        subTitle = {service?.subtitle1 || ""}
      />

      <InfoSection1
        title={service?.serviceHighlights?.title || ""}
        services={service?.serviceHighlights?.services || []}
      />

      <InfoSection2
        title={service?.issuecategory?.title || ""}
        services={service?.issuecategory?.issueCategories ||[]}
        es={true}
      />
      {
        service?.issuecategory2
        &&
        <InfoSection3
          title={service?.issuecategory2?.title || ""}
          services={service?.issuecategory2?.issueCategories || []}
          subTitle={service?.issuecategory2?.subTitle || ""}
        />
      }

      {
        service?.issuecategory3
        &&
        <InfoSection4
          title={service?.issuecategory3?.title || ""}
          services={service?.issuecategory3?.issueCategories || []}
          subTitle={service?.issuecategory3?.subTitle || ""}
        />
      }

      {/* <ServiceOffer
        serviceProvider={{
          title: service?.intro?.headline || "",
          description: service?.intro?.description || "",
          imageAlt: service?.intro?.headline || "",
          imageTitle: service?.intro?.headline || "",
          imageSrc: service?.intro?.image || "",
          subtitle: service?.subtitle1 || "",
        }}
      /> */}

      {/* ------------------------------- */}
      <section className="sm:px-16 px-2 bg-[#f4f7fa]">
        {/* <ServiceHighlights title={service.serviceHighlights?.title} services={service.serviceHighlights?.services} /> */}
        

        {/* <IssueSection category={service?.issuecategory} />
        <IssueSection category={service?.issuecategory2} /> */}
        <IssueSection category={service?.issuecategory3} />
        <IssueSection category={service?.issuecategory4} />
      </section>

      {/* <ServiceWhyChoose
        cards={service.whyChoose?.whyChoosecategories ?? []}
        title={service.whyChoose?.title ?? ""}
        desc={service.whyChoose?.desc ?? ""}
      />

      <FAQs data={service.faqs} descHTMLString /> */}
      <FaqSection 
        faqs={service.faqs || []}
      />
    </>
  );
}
