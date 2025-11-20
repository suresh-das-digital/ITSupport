import dynamic from "next/dynamic";
import OurExpertise from "./components/OurExperties";
import OurAchievements from "./components/OurAchievements";
import AboutFAQs from "./_components/AboutFAQs";
import WhoWeAre from "./_components/WhoWeAre";
import OurHistory from "./_components/OurHistory";
import OurMission from "./components/OurMission";
import OurVision from "./components/OurVision";
import AboutWhyChoose from "./components/AboutWhyChoose";
import { ABOUT_WHY_CHOOSE_CARDS } from "./_components/AboutWhyChooseConstant";
import HeroInformattionPage from "@/components/common/HeroInformattionPage";
import AboutWhoWeAre from "./components/AboutWhoWeAre";
import AboutHistory from "./components/AboutHistory";
import FaqSection from "@/components/common/FaqSection";

const OurCoreValues = dynamic(
  () => import("@/app/about/components/OurCoreValues"),
  {
    loading: () => <p>Loading…</p>,
  }
);


const faqs = [
  {
    label: "What industries do you serve?",
    desc: "We provide IT support for finance, healthcare, logistics, construction, manufacturing, retail, travel, hospitality, and more. Our solutions are tailored to meet industry-specific compliance and performance needs.",
    expanded: true,
  },
  {
    label: "Can you provide remote IT support?",
    desc: "Yes. We offer remote troubleshooting, system monitoring, and network management to resolve issues without the need for on-site visits, ensuring faster response times.",
    expanded: false,
  },
  {
    label: "How do you ensure network security?",
    desc: "We use firewalls, intrusion detection systems, encryption, and regular vulnerability assessments to protect your IT infrastructure from cyber threats.",
    expanded: false,
  },
  {
    label: "What is your typical response time for urgent issues?",
    desc: "For critical issues, our response is immediate through our 24/7 help desk, with escalation protocols for rapid on-site support if needed.",
    expanded: false,
  },
  {
    label: "Do you provide customized IT packages for small businesses?",
    desc: "Absolutely. We offer flexible, scalable, and budget-friendly IT support packages designed specifically for small and medium-sized businesses.",
    expanded: false,
  }
]

export default function About() {
  return (
    <>
      {/* <WhoWeAre/> */}
      <HeroInformattionPage
        title="About Us – ITSupport.net.in"
        subtitle1=""
        subtitle2=""
        pageName="About Us"
      />
      <AboutWhoWeAre/>
      <AboutHistory/>
      {/* <OurHistory/> */}
      <OurMission/>
      <OurVision/>
      <OurCoreValues/>
      <OurExpertise/>
      <OurAchievements/>
      <AboutWhyChoose />
      <FaqSection faqs={faqs} />
    </>
  );
}

