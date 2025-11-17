export const dynamic = "force-dynamic";
export const dynamicParams = true;



import MainWrapper from "@/components/MainWrapper";
import { getAllIndustries, getIndustriesBySlug } from "@/lib/Industriesdata";

import { industryDetailData } from "@/utils/constant/IndustryDetailData";
import { Service as IndustryInterface } from "@/utils/constant/serviceDetailData";
import { Metadata } from "next";
import { useLocale } from "next-intl";
import Head from "next/head";
import Script from "next/script";
import HeroSection from "./components/IndustryHeroSection";
import IndustriesAbout from "./components/IndustriesAbout";
import SpecializedSection from "./components/SpecializedSection";
import ServicesInDetail from "./components/IndustriesInDetailSection";
import IndustriesBenifit from "./components/IndustriesBenifit";
import FaqSection from "@/components/common/FaqSection";

interface IndustryDetailProps {
  params?: { slug: string };
}

interface IndutryPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const industries = await getAllIndustries(); 

  return industries.map((props) => ({
    slug: props.slug,
  }));
}

export async function generateMetadata({ params }: IndutryPageProps): Promise<Metadata> {
  const industry = await getIndustriesBySlug(params.slug);
  if (!industry) {
    return {
      title: "Blog post not found",
      description: "The blog post you are looking for does not exist.",
    };
  }
  return {
    ...industry.metadata,
  };
}

export default async function Page({ params }: IndustryDetailProps) {

  const decodedString = decodeURIComponent(params?.slug || "");


  let industry: IndustryInterface = {};

  industry = industryDetailData.find((s) => s.slug === decodedString) || {};

  const industryDetails = await getIndustriesBySlug(params?.slug || "");

  const pageName = params?.slug
  .split("-")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");


  return (
    <>
      <MainWrapper>
        {
          industryDetails?.heroSection
          &&
          <HeroSection
            title={industryDetails.heroSection.title}
            subtitle={industryDetails.heroSection.subtitle}
            heroimage={industryDetails.heroSection.imageUrl }
            pageName={pageName || ""}
            icon={industryDetails.heroSection.icon || null}
          />
        }

        {
          industryDetails?.aboutSection
          &&
          <IndustriesAbout
            description1={industryDetails.aboutSection.detail}
            description2={industryDetails.aboutSection.subDetails}
            imageTitle={industryDetails.aboutSection.imageTitle}
            imageAlt={industryDetails.aboutSection.imageAlt}
            image={industryDetails.aboutSection.aboutImage}
          />
        }

        {
          industryDetails?.specializedSection
          &&
          <SpecializedSection
            title={industryDetails.specializedSection.title}
            subTitle={industryDetails.specializedSection.desc}
            services={industryDetails.specializedSection.list}
          />
        }

        {
          industryDetails?.services_in_Detail
          &&
          <ServicesInDetail
            title={industryDetails.services_in_Detail.title}
            services={industryDetails.services_in_Detail.services}

          />
        }


        {
          industryDetails?.benefits_Section
          &&
          <IndustriesBenifit
            title={industryDetails.benefits_Section.title}
            benifits={industryDetails.benefits_Section.benifits}

          />
        }

        {
          industryDetails?.faq
          &&
          <FaqSection
            faqs={industryDetails.faq}
          />
        }
        

        {
          industryDetails?.schema
          &&
          <Script
            id="behavioral-marketing-schema"
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(industryDetails?.schema) }}
          />
      }

      
      </MainWrapper>
    </>
  );
}
