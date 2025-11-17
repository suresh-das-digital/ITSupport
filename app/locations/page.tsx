import HeroSection from "@/components/HeroSection";
import { getMetaData, getStaticParams } from "@/lib/seo";
import { highlightAsSiteTitle } from "@/utils/helpers/i18n";
import { useTranslations } from "next-intl";
import { Info } from "./_components/Info";
import { WhereWeOperate } from "./_components/WhereWeOperate";
import { whyChoose } from "./_components/constant";
import WhyChoose from "@/components/WhyChoose";
import HeroInformattionPage from "@/components/common/HeroInformattionPage";
import WhyChooseSec from "./_components/WhyChooseSec";

export const generateStaticParams = getStaticParams('locations')
export const generateMetadata = getMetaData('locations');


export default function Locations() {
  const t = useTranslations("locations");

  return (
    <>
      
      <HeroInformattionPage
        title="Global IT Support Services — ITSupport.net.in"
        subtitle1="Reliable, Scalable, and 24/7 IT Support Across the US, UK, India, Australia, Germany, France, and Canada"
        subtitle2="At ITSupport.net.in, we deliver comprehensive remote and onsite IT support tailored to the needs of businesses around the world. Whether you’re a startup or an enterprise, we ensure your technology infrastructure runs securely, efficiently, and without disruption"
        pageName="Locations"
      />
      {/* <div className="my-3 bg-white rounded-lg">
        <Info text="At ITSupport.net.in, we deliver comprehensive remote and onsite IT support tailored to the needs of businesses around the world. Whether you’re a startup or an enterprise, we ensure your technology infrastructure runs securely, efficiently, and without disruption." />
      </div> */}
      <div className="bg-[#00000003] rounded-lg mb-3">
        <WhereWeOperate />
      </div>
      <WhyChooseSec/>
      
      
    </>
  );
}

// https://it-support-landing.vercel.app/industries?_rsc=3lb4g