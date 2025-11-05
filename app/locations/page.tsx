import HeroSection from "@/components/HeroSection";
import { getMetaData, getStaticParams } from "@/lib/seo";
import { highlightAsSiteTitle } from "@/utils/helpers/i18n";
import { useTranslations } from "next-intl";
import { Info } from "./_components/Info";
import { WhereWeOperate } from "./_components/WhereWeOperate";
import { whyChoose } from "./_components/constant";
import WhyChoose from "@/components/WhyChoose";

export const generateStaticParams = getStaticParams('locations')
export const generateMetadata = getMetaData('locations');


export default function Locations() {
  const t = useTranslations("locations");

  return (
    <>
      <div className="h-full flex flex-col text-gray-900 font-[family-name:var(--font-geist-sans)]">
        <HeroSection
          heroTitle={t.markup("heroTitle", {
            siteTitle: highlightAsSiteTitle
          })}
          heroIntro={t("heroIntro")}
          buttonTexts={[{ label: "Get Support Now" }]}
          breadcrumbs={[
            {home: 'Home'},
            {home: 'Locations'},
          ]}
          imageSrc={
            "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80"
          }
        />
      </div>
      <div className="my-3 bg-white rounded-lg">
        <Info text="At ITSupport.net.in, we deliver comprehensive remote and onsite IT support tailored to the needs of businesses around the world. Whether you’re a startup or an enterprise, we ensure your technology infrastructure runs securely, efficiently, and without disruption." />
      </div>
      <div className="bg-[#00000003] rounded-lg mb-3">
        <WhereWeOperate />
      </div>
      <div className="bg-white rounded-lg overflow-hidden mb-3 p-0">
        <WhyChoose cards={whyChoose} linkText="" title="Why Choose ITSupport.net.in for Global IT Services?" />
      </div>
      <div className="mb-3 bg-[#00000003] rounded-lg">
        <Info title="Get Started Today" text="Whether you're in New York, London, Bangalore, Sydney, Berlin, Paris, or Toronto, ITSupport.net.in keeps your business running smoothly. Contact us at assist@itsupport.net.in for a free consultation and discover how we can strengthen your IT infrastructure anywhere in the world." />
      </div>
    </>
  );
}

// https://it-support-landing.vercel.app/industries?_rsc=3lb4g