import outCoreData, { outCoreDataEs } from "@/utils/constant/outCoreData";

import { useLocale, useTranslations } from "next-intl";

import "aos/dist/aos.css";
import IndustriesWhyChoose from "./_component/IndustriesWhyChoose";

import HeroInformattionPage from "@/components/common/HeroInformattionPage";
import IndustrySpecific from "./_component/IndustrySpecific";

// export const metadata = {

// }


export default function Industries() {
  const locale = useLocale();
  const t = useTranslations("IndustriesPage");
  // const heroServices = locale === "es" ? heroServicesDataEs : heroServicesData;
  const outCore = locale === "es" ? outCoreDataEs : outCoreData;

  return (
    <>
      
      <HeroInformattionPage
        title="Global IT Support Services – Trusted Worldwide for Over 20 Years"
        subtitle1="Brief brand intro with key stats, keyword-rich (tech support, IT services, managed IT, global IT support)."
        subtitle2=""
        pageName="Industries"
      />
      <IndustriesWhyChoose/>

      <IndustrySpecific/>

      
    </>
  );
}
