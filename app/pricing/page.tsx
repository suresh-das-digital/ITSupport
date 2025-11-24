import HeroInformattionPage from "@/components/common/HeroInformattionPage";
import PricingList from "./components/PricingList";
import PricingAbout from "./components/PricingAbout";
import FaqSection from "@/components/common/FaqSection";
import PricingWhyChooseSection from "./components/PricingWhyChooseSection";
import PricingPlans from "./components/PricingPlans";
import PricingDeliverValue from "./components/PricingDeliverValue";
import PricingAdditionalServices from "./components/PricingAdditionalServices";


const faqs = [
    {
    "label": "How is your pricing structured?",
    "desc": "Our pricing is monthly or yearly, depending on your preference. Plans are based on the level of support, hours, and services included."
    },
    {
    "label": "What are your contract terms?",
    "desc": "Most of our clients choose month-to-month contracts. We also offer discounted annual packages."
    },
    {
    "label": "What payment methods do you accept?",
    "desc": "We accept bank transfers, credit/debit cards, and UPI."
    },
    {
    "label": "Do you offer discounts?",
    "desc": "Yes, we provide multi-month, annual, and bulk service discounts, especially for startups and NGOs."
    },
    {
    "label": "Are there any hidden charges?",
    "desc": "No. We maintain 100% transparency—all costs are outlined in your service agreement."
    },
    {
    "label": "Can I customize a plan?",
    "desc": "Absolutely. We specialize in custom IT and network solutions to fit your exact needs."
    }
  ]

export default function Pricing() {
  return (
    
    <div>
      <HeroInformattionPage
        title="Pricing – Affordable & Transparent IT Support Plans for Every Business"
        subtitle1=""
        subtitle2=""
        pageName="Pricing"
      />
      <PricingAbout/>
      {/* <PricingList/> */}
      <PricingWhyChooseSection/>
      <PricingPlans/>
      <PricingDeliverValue/>
      <PricingAdditionalServices/>
      <FaqSection
        faqs={faqs}
      />
    </div>
  );
}

// <div className="min-h-screen flex flex-col bg-white text-gray-900 font-[family-name:var(--font-geist-sans)]">
    //   <PricingList />
    // </div>
