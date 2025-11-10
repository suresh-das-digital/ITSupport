export const dynamic = "force-dynamic";
export const dynamicParams = true;


import ServiceOffer from "@/app/services/_component/ServiceOffer";
import ServiceWhyChoose from "@/app/services/_component/ServiceWhyChoose";
import DetailPageHighlightsSection from "@/components/DetailPageHighlightsSection";
import FAQs from "@/components/FAQ/FAQs";
import HeroSection from "@/components/HeroSection";
import { JsonLd } from "@/components/JsonLd";
import MainWrapper from "@/components/MainWrapper";
import { getAllIndustries, getIndustriesBySlug } from "@/lib/Industriesdata";
// import { industriesMeta, IndustriesMetaType } from "@/lib/IndustriesMeta";
import { buildMetadata, getMetaData, getStaticParams, renderJsonLd } from "@/lib/seo";
import { industryDetailData } from "@/utils/constant/IndustryDetailData";
import { Service as IndustryInterface } from "@/utils/constant/serviceDetailData";
import { Metadata } from "next";
import { useLocale } from "next-intl";
import Head from "next/head";
import Script from "next/script";

interface IndustryDetailProps {
  params?: { slug: string };
}

// generateMetadata runs at build/server time and populates <head>
// export const generateMetadata = getMetaData('industry')
// export const generateStaticParams = getStaticParams('industries')
// export const generateMetadata = getMetaData('industries');

// optional: pre-render known service slugs at build
// export async function generateStaticParams() {
//   return Object.values(industriesMeta).map((m) => ({ slug: m?.slug || "" }));
// }


interface IndutryPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const industries = await getAllIndustries(); // Use the function to fetch all blog posts

  // Map the blog posts to the required format: { slug: 'value' }
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
  // Return full metadata object from blog.metadata
  return {
    ...industry.metadata,
  };
}

export default async function Page({ params }: IndustryDetailProps) {
  // const meta: IndustriesMetaType | undefined =
  //   industriesMeta[params?.slug || ""];
  const decodedString = decodeURIComponent(params?.slug || "");


  let industry: IndustryInterface = {};

  industry = industryDetailData.find((s) => s.slug === decodedString) || {};

  if (!industry?.slug) {
    return <div className="p-8">Industry not found</div>;
  }

  const industryDetails = await getIndustriesBySlug(params?.slug || "");

  // const jsonLdScripts = renderJsonLd(meta?.jsonLd ?? []);

  return (
    <>
      {/* {jsonLdScripts.map((s) => (
        <script
          key={s.key}
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: s.json }}
        />
      ))} */}
      {/* <JsonLd type="industries" slug={decodedString} /> */}
      <MainWrapper>
        <HeroSection
          heroTitle={industry.title || ""}
          heroIntro={industry.subtitle || ""}
          buttonTexts={[
            { label: "Get Support Now" },
            { label: "Request a Call" },
          ]}
          breadcrumbs={[
            {
              home: "Home",
            },
            {
              home: "Industry",
            },
            {
              home: "Industry Support",
            },
          ]}
          imageSrc={industry.heroImage}
        />

        <ServiceOffer
          serviceProvider={{
            title: industry?.intro?.headline || "",
            description: industry?.intro?.description || "",
            imageAlt: industry?.intro?.headline || "",
            imageTitle: industry?.intro?.headline || "",
            imageSrc: industry?.intro?.image || "",
            subtitle: industry?.subtitle1 || "",
          }}
        />

        <DetailPageHighlightsSection
          issuecategory={
            industry.issuecategory ?? {
              title: "",
              subTitle: "",
              issueCategories: [],
            }
          }
          serviceHighlightsItems={"even"}
          serviceHighlights={
            industry.serviceHighlights ?? { title: "", services: [] }
          }
          issuecategory2={industry.issuecategory2}
          issuecategory3={industry.issuecategory3}
          issuecategory4={industry.issuecategory4}
        />

        dsjsjsj
        {industry?.whyChoose &&
          industry?.whyChoose?.whyChoosecategories?.length > 0 && (
            <ServiceWhyChoose
              cards={industry.whyChoose.whyChoosecategories}
              title={industry.whyChoose.title}
              desc={industry.whyChoose.desc}
            />
          )}

        {/* <ServiceWhyChoose /> */}

        <FAQs data={industry.faqs} descHTMLString />

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
