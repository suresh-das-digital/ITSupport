import Head from "next/head";
import FAQs from "@/components/FAQ/FAQs";
import Typography from "@/components/ui/Typography";
import {
  Service,
  serviceDetailDataEs,
  servicesDetailData,
} from "@/utils/constant/serviceDetailData";
import ServiceCard from "./_components/ServiceCard";
import IssueCategory from "./_components/IssueCategory";
import SpecificIssue from "./_components/SpecificIssue";
import FeatureCard from "./_components/FeatureCard";
import { useLocale, useTranslations } from "next-intl";
import ServiceWhyChoose from "../_component/ServiceWhyChoose";
import Image from "next/image";
import ServiceOffer from "../_component/ServiceOffer";
import SpecificIssueList from "./_components/SpecificIssueList";
import { servicesMeta } from "@/lib/servicesMeta";
import { buildMetadata, getMetaData, getStaticParams, renderJsonLd } from "@/lib/seo";
// import HeroSection from "@/components/HeroSection";
import { servicesMenuItem } from "@/utils/constant/defaultNavLinks";
import React from "react";
import { MetaType } from "@/lib/types";
import { JsonLd } from "@/components/JsonLd";
import { PageBox } from "@/components/PageBox";
import { IssueCategories } from "./_components/IssueCategories";
import { IssueSection } from "./_components/IssueSection";
import { ServiceHighlights } from "./_components/ServiceHighlights";
import HeroSection from "./newcompoennts/HeroSection";
import { LucideDatabase } from "lucide-react";
import DecriptionSection from "./newcompoennts/DecriptionSection";
import InfoSection1 from "./newcompoennts/InfoSection1";
import FaqSection from "./newcompoennts/FaqSection";
import InfoSection2 from "./newcompoennts/InfoSection2";
import InfoSection3 from "./newcompoennts/InfoSection3";
import InfoSection4 from "./newcompoennts/InfoSection4";

interface Props {
  params: { slug: string };
}


export const generateStaticParams = getStaticParams('services')
export const generateMetadata = getMetaData('services');

export default function ServiceDetail({params}: any) {
  const p: any = React.use(params);
  const meta: MetaType | undefined = servicesMeta[p?.slug || ""];

  const decodedString = decodeURIComponent(p?.slug);
  const t = useTranslations();
  const locale = useLocale();

  let service: Service = {};

  // if (locale === "es") {
  //   service = serviceDetailDataEs.find((s) => s.slug === decodedString) || {};
  // } else {
  service = servicesDetailData.find((s) => s.slug === decodedString) || {};
  // }
  const menuItem = servicesMenuItem.find((s) => s.href.includes(decodedString));

  if (!service) {
    return <div className="p-8">Service not found</div>;
  }

  const jsonLdScripts = renderJsonLd(meta?.jsonLd ?? []);

  console.log("service.issuecategory2?.issueCategories?????");
  return (
    <>
      <JsonLd type="services" slug={decodedString} />
      {/* <HeroSection
        heroTitle={service.title || ""}
        heroIntro={service.subtitle || ""}
        buttonTexts={[
          { label: "Get Support Now" },
          { label: "Request a Call" },
        ]}
        breadcrumbs={[
          {
            home: "Home",
          },
          {
            home: "Services",
          },
          {
            home: menuItem?.label || '',
          },
        ]}
        imageSrc={service.heroImage}
        rightSideIcons={service?.heroRightSideIcons || []}
      /> */}

      <HeroSection
        heroimage={service.heroImage || ""}
        title={service.title || ""}
        subtitle={service.subtitle || ""}
        pageName={service.title || ""}
        icon={service.heroRightSideIcons && service.heroRightSideIcons[0]}
        buttonText1="Get Support Now"
        buttonText2="Request a Call"
      />


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
        es={false}
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

      
      
      {/* ------------------------------- */}
      <section className="sm:px-16 px-2 bg-[#f4f7fa]">
        {/* <ServiceHighlights title={service.serviceHighlights?.title} services={service.serviceHighlights?.services} /> */}

        {/* <IssueSection category={service?.issuecategory} /> */}
        {/* <IssueSection category={service?.issuecategory2} /> */}
        {/* <IssueSection category={service?.issuecategory3} /> */}
        <IssueSection category={service?.issuecategory4} />

      </section>

      {/* {service?.whyChoose &&
        service?.whyChoose?.whyChoosecategories?.length > 0 && (
          <ServiceWhyChoose
            cards={service.whyChoose.whyChoosecategories}
            title={service.whyChoose.title}
            desc={service.whyChoose.desc}
          />
        )} */}
      {/* <FAQs data={service.faqs} descHTMLString /> */}
      <FaqSection 
        faqs={service.faqs || []}
      />
    </>
  );
}
