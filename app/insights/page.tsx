import HeroSection from "@/components/HeroSection";
import PageCard from "@/components/PageCard";
import { PagePara, PageParaPara } from "@/components/PagePara";
import { getBasicMarkup } from "@/lib/markup";
import { getMetaData, getStaticParams } from "@/lib/seo";
import { highlightAsSiteTitle } from "@/utils/helpers/i18n";
import { useTranslations } from "next-intl";
import { get } from "node:https";
import parse from "html-react-parser";
import FAQs from "@/components/FAQ/FAQs";



export const generateStaticParams = getStaticParams('insights', ['/'])
export const generateMetadata = getMetaData('insights');

export default function Insights() {
  const t = useTranslations("InsightsPage");
  const basicMarkup = getBasicMarkup(t);
  let boxIndex = 0;
  
  return (<>
    <div className="h-full flex flex-col text-gray-900 font-[family-name:var(--font-geist-sans)]">
      <HeroSection
        heroTitle={t.markup("hero.title", basicMarkup)}
        heroIntro={t("hero.intro")}
        buttonTexts={[{ label: "Get Support Now" }]}
        breadcrumbs={[
          {home: 'Home'},
          {home: 'Insights'},
        ]}
        imageSrc={
          "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80"
        }
      />
    </div>

    <PageCard serial={boxIndex+=1} imageRatio={0.3}>
        <PagePara>
          <PageParaPara className="px-8">
           {parse(t.markup("para.0", basicMarkup))}
          </PageParaPara>
          <PageParaPara className="px-8">
           {parse(t.markup("para.1", basicMarkup))} 
          </PageParaPara>
        </PagePara>
    </PageCard>

    <PageCard noImage serial={boxIndex+=1}>
      <FAQs data={[
        {label: t("faq.0.label"), desc: t("faq.0.desc"), expanded: true},
        {label: t("faq.1.label"), desc: t("faq.1.desc")},
        {label: t("faq.2.label"), desc: t("faq.2.desc")},
        {label: t("faq.3.label"), desc: t("faq.3.desc")},
        {label: t("faq.4.label"), desc: t("faq.4.desc")},
      ]} />
    </PageCard>
    
  </>
  );
}

// https://it-support-landing.vercel.app/locations?_rsc=3lb4g