import React from "react";
import {
  FaBolt,
  FaServer,
  FaSuitcase,
  FaCalendarAlt,
  FaDollarSign,
  FaCode,
  FaPaintBrush,
} from "react-icons/fa";

type Service = {
  title: string;
  description: string;
};

const services: Service[] = [
  {
    title: "Customer Focus",
    
    description: "Your success is our priority. Every solution we design is aligned with your business goals.",
  },
  {
    title: "Reliability",
    
    description: "We deliver consistent, dependable IT support that you can trust, 24/7.",
  },
  {
    title: "Innovation",
    
    description: "We adopt emerging technologies to give our clients a competitive edge.",
  },
  {
    title: "Integrity",
    
    description: "We operate with transparency, honesty, and ethical practices.",
  },
  {
    title: "Excellence",
    
    description: "We strive for perfection in every project, no matter the scale.",
  },
];

// Card component
const ServiceCard = React.memo(
  ({  title, description }: Service) => (
    <article
      className="bg-white shadow-xl rounded-xl p-6 lg:py-10 flex flex-col items-start hover:scale-105 focus:scale-105 transition-transform duration-300 will-change-transform mt-2 group"
      tabIndex={0}
      aria-label={`Service: ${title}`}
    >
      <h3 className="text-lg lg:text-xl font-semibold mb-2 text-black group-hover:text-blue-500 transition-colors duration-300 py-1">
        {title}
      </h3>
      <div className="text-gray-500 text-sm mt-1 lg:mt-3">{description}</div>
    </article>
  )
);

ServiceCard.displayName = "ServiceCard";

// Main section
export default function CoreServicesSection() {
  return (
    <section
      className="py-12 px-4 xl:px-[8%] bg-blue/50"
      aria-labelledby="core-services-title"
    >
      <div className="max-w-7xl 2xl:max-w-[1488px] mx-auto">
        <h2
          id="core-services-title"
          className="text-3xl lg:text-4xl font-bold text-center mb-3 text-black"
        >
          Core {" "}
          <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
          Values
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
