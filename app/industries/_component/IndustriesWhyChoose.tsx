import React from "react";
import {
  FaLaptopMedical,
  FaTools,
  FaCloud,
  FaDatabase,
  FaShieldAlt,
  FaNetworkWired,
  FaUsersCog,
} from "react-icons/fa";

export interface Service {
  title: string;
  icon: React.ComponentType<any>;
  color: string; // Tailwind class string
}

const services: Service[] = [
  {
    title: "Remote IT Support",
    icon: FaLaptopMedical,
    color: "text-blue-600",
  },
  {
    title: "On-site Troubleshooting",
    icon: FaTools,
    color: "text-emerald-600",
  },
  {
    title: "Managed IT Services",
    icon: FaUsersCog,
    color: "text-indigo-600",
  },
  {
    title: "Cloud Solutions",
    icon: FaCloud,
    color: "text-sky-600",
  },
  {
    title: "Data Backup & Recovery",
    icon: FaDatabase,
    color: "text-orange-600",
  },
  {
    title: "Cybersecurity & Compliance",
    icon: FaShieldAlt,
    color: "text-red-600",
  },
  {
    title: "Network Setup & Monitoring",
    icon: FaNetworkWired,
    color: "text-teal-600",
  },
];

// Card component
const ServiceCard = React.memo(
  ({  title, icon: Icon, color }: Service) => (
    <article
      className="bg-white shadow-xl rounded-xl p-6 lg:py-10 flex flex-col items-start hover:scale-105 focus:scale-105 transition-transform duration-300 will-change-transform mt-2 group"
      tabIndex={0}
      aria-label={`Service: ${title}`}
    >
      <span className={`w-16 h-16 flex items-center justify-center rounded-xl mb-4 text-2xl group-hover:scale-110 ${color} transition-all duration-300 `}>
                <Icon  size={35}/>
              </span>
      <h3 className="text-lg lg:text-xl font-semibold mb-2 text-black group-hover:text-blue-500 transition-colors duration-300 py-1">
        {title}
      </h3>
      
    </article>
  )
);

ServiceCard.displayName = "ServiceCard";

// Main section
export default function IndustriesWhyChoose() {
  return (
    <section
      className="py-12 px-4 xl:px-[8%] bg-blue/50"
      aria-labelledby="core-services-title bg-white"
    >
      <div className="max-w-7xl 2xl:max-w-[1488px] mx-auto">
        <h2
          id="core-services-title"
          className="text-3xl lg:text-4xl font-bold text-center mb-3 text-black"
        >
          Why Choose {" "}
          <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
          ITSupport.net.in for Your Business?
          </span>
        </h2>
        <p className="text-gray-500 mb-10 text-lg mt-4 text-center">
        We specialize in a wide range of <strong>IT support and network solutions</strong> designed to cater to both <strong>B2B and B2C clients:</strong>
        </p>

        <h2
          id="core-services-title"
          className="text-3xl lg:text-4xl font-bold text-center mb-3 text-black mt-12 xl:mt-20"
        >
          Our Core {" "}
          <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
          IT Support Services
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
