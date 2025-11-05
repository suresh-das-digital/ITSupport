import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// import dynamic from "next/dynamic";

import WelcomeComponent from "@/components/WelcomeComponent";
import OurCoreServices from "@/components/OurCoreServices";
import { useLocale } from "next-intl";
import {
  HomeScreenFAQData,
  HomeScreenFAQDataEs,
} from "@/utils/constant/FAQData";
import LocaleProvider from "@/components/LocaleProvider";
import { JsonLd } from "@/components/JsonLd";
import JsonLdSchemas from "@/utils/constant/JsonLdSchemas";
import { WHY_CHOOSE_CARDS } from "@/utils/constant/whyChooseConstants";
import MainWrapper from "@/components/MainWrapper";
import { getMetaData, getStaticParams } from "@/lib/seo";
import IndustriesWeServe from "@/components/IndustriesWeServe";
import OurGlobalPresence from "@/components/OurGlobalPresence";
import WhyChoose from "@/components/WhyChoose";
import OurCommitment from "@/components/OurCommitment";
import ITSupportInsights from "@/components/ITSupportInsights";
import FAQs from "@/components/FAQ/FAQs";
import ScrollToTop from "@/components/ScrollToTop";
import FaqSection from "./services/[slug]/newcompoennts/FaqSection";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const dynamic = 'force-static';

// export const generateStaticParams = getStaticParams('home')
export const generateMetadata = getMetaData('home');

export default function Home() {
  const locale = useLocale();

  const FAQsData = locale === "es" ? HomeScreenFAQDataEs : HomeScreenFAQData;

  return (
    <>
      <JsonLd type="home" slug="/" />
      <WelcomeComponent />
      <OurCoreServices />
      <IndustriesWeServe />
      <OurGlobalPresence />
      <WhyChoose cards={WHY_CHOOSE_CARDS} title="Why Choose" />
      <OurCommitment />
      <ITSupportInsights />
      {/* <FAQs data={FAQsData} /> */}
      <FaqSection faqs={FAQsData} />

      <ScrollToTop />
    </>
  );
}
