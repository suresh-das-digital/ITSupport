// components/ExperienceExpertise.tsx


import Link from "next/link";
import {
    LuStethoscope,
    LuLandmark,
    LuShoppingCart,
    LuFactory,
    LuGraduationCap,
    LuBriefcaseBusiness,
    LuHotel,
    LuConstruction,
    LuTruck,
  } from "react-icons/lu";



  export const features = [
    {
      icon: LuStethoscope,
      title: "Healthcare IT Support",
      description:
        "We deliver secure, HIPAA-compliant IT solutions for healthcare providers, ensuring seamless operation of EMR/EHR systems, telemedicine platforms, and medical devices.",
      iconClass: "bg-gradient-to-tr from-blue-500 to-cyan-400 text-white",
      link: "/industries/healthcare",
    },
    {
      icon: LuLandmark,
      title: "Finance & Banking IT Support",
      description:
        "Our expert team safeguards financial institutions with PCI DSS-compliant systems, fraud prevention tools, and 24/7 secure transaction support.",
      iconClass: "bg-gradient-to-tr from-purple-500 to-indigo-400 text-white",
      link: "/industries/finance-banking-it-support",
    },
    {
      icon: LuShoppingCart,
      title: "Retail & E-commerce IT Support",
      description:
        "We keep your retail and online stores running smoothly with reliable POS systems, inventory management, and high-uptime e-commerce platforms.",
      iconClass: "bg-gradient-to-tr from-blue-500 to-cyan-400 text-white",
      link: "/industries/retail-ecommerce-it-support",
    },
    {
      icon: LuFactory,
      title: "Manufacturing IT Support",
      description:
        "From IoT integration to production monitoring, we help manufacturers boost efficiency with cutting-edge IT infrastructure and automation support.",
      iconClass: "bg-gradient-to-tr from-purple-500 to-indigo-400 text-white",
      link: "/industries/manufacturing-it-support",
    },
    {
      icon: LuGraduationCap,
      title: "Education IT Support",
      description:
        "We empower schools and universities with robust IT infrastructure, LMS platforms, and secure virtual classroom solutions.",
      iconClass: "bg-gradient-to-tr from-blue-500 to-cyan-400 text-white",
      link: "/industries/education-it-support",
    },
    {
      icon: LuBriefcaseBusiness,
      title: "Professional Services IT Support",
      description:
        "Our tailored IT services help professional firms manage client data securely, streamline workflows, and enable remote collaboration.",
      iconClass: "bg-gradient-to-tr from-purple-500 to-indigo-400 text-white",
      link: "/industries/professional-services-it-support",
    },
    {
      icon: LuHotel,
      title: "Travel & Hospitality IT Support",
      description:
        "We enhance guest experiences with reliable reservation systems, property management solutions, and customer service technologies.",
      iconClass: "bg-gradient-to-tr from-blue-500 to-cyan-400 text-white",
      link: "/industries/travel-hospitality-it-support",
    },
    {
      icon: LuConstruction,
      title: "Construction IT Support",
      description:
        "We support construction companies with project management software, site connectivity, and real-time collaboration tools for mobile teams.",
      iconClass: "bg-gradient-to-tr from-purple-500 to-indigo-400 text-white",
      link: "/industries/construction",
    },
    {
      icon: LuTruck,
      title: "Logistics IT Support",
      description:
        "Our IT solutions streamline logistics operations with fleet tracking, warehouse management, and real-time shipment monitoring.",
      iconClass: "bg-gradient-to-tr from-blue-500 to-cyan-400 text-white",
      link: "/industries/logistics-it-support",
    },
  ];

export default function IndustrySpecific() {
  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="xl:px-[8%] 2xl:px-0 2xl:max-w-[1488px] mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-2 text-black">
        
          <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">Industry-Specific  {' '}</span>IT Support Solutions
        </h2>
       
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-8 lg:mt-20 mb-16">
          {features.map(({ icon: Icon, title, description, iconClass, link }) => (
            <Link key={title} href={link}>
            <div  className="bg-white rounded-xl shadow-xl p-6 flex flex-col items-center border-[1px] border-black/10 hover:scale-105 hover:shadow-2xl transition-all duration-300 group">
              <span className={`w-16 h-16 flex items-center justify-center rounded-xl mb-4 text-2xl bg-gradient-to-br group-hover:scale-110 transition-all duration-300 ${iconClass}`}>
                <Icon size={35}/>
              </span>
              <h3 className="font-semibold text-xl mb-2 text-black">{title}</h3>
              <p className="text-gray-500 text-center text-sm mt-3">{description}</p>
            </div>
            </Link>
          ))}
        </div>
        
      </div>
    </section>
  );
}
