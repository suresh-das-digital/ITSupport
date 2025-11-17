
import { getBasicMarkup } from "@/lib/markup";
import { getMetaData, getStaticParams } from "@/lib/seo";

import { useTranslations } from "next-intl";

import HeroInformattionPage from "@/components/common/HeroInformattionPage";
import FaqSection from "@/components/common/FaqSection";
import InsightAboutSection from "./components/InsightAboutSection";

const faqs = [
  {
    label: "How can I use your Insights section to improve my IT strategy?",
    desc: "Our Insights provide expert analysis, actionable recommendations, and industry trends that you can apply directly to strengthen your IT strategy, enhance planning, and stay ahead of emerging technology challenges."
  },
  {
    label: "Can I contribute to the ITSupport.net.in Blog?",
    desc: "Yes. We welcome guest contributions from IT professionals who can offer valuable, original, and relevant insights to our audience. Approved submissions are featured on our Blog for wider reach."
  },
  {
    label: "How do you choose which case studies to feature?",
    desc: "We highlight case studies that showcase meaningful challenges, strong problem-solving approaches, measurable results, and innovations that offer learning value to our readers."
  },
  {
    label: "How often is the News section updated?",
    desc: "Our News section is updated regularly with company announcements, service improvements, industry updates, and other important developments to keep you informed."
  },
  {
    label: "Why should I read your Blog and Insights regularly?",
    desc: "By staying engaged with our Blog and Insights, you gain continuous access to expert tips, best practices, and strategic guidance that help you optimize your IT systems and strengthen your business operations."
  }
];




export const generateStaticParams = getStaticParams('insights', ['/'])
export const generateMetadata = getMetaData('insights');

export default function Insights() {
  const t = useTranslations("InsightsPage");

  
  return (<>
   
    <HeroInformattionPage
      title="Insights, Blog, Case Studies & News – ITSupport.net.in"
      subtitle1=""
      subtitle2=""
      pageName="Insights"
    />

    <InsightAboutSection/>
    
    <FaqSection
      faqs={
        faqs
      }
    /> 
    
  </>
  );
}

// https://it-support-landing.vercel.app/locations?_rsc=3lb4g