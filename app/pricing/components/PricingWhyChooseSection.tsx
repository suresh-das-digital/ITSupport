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

const services: Service[] = 
[
    {
    title: "Transparent Costs",
    description: "You know exactly what you're paying for."
    },
    {
    title: "Scalable Packages",
    description: "Start small, scale when you need more."
    },
    {
    title: "Full-Service Coverage",
    description: "From remote troubleshooting to on-site support."
    },
    {
    title: "Certified Experts",
    description: "Our team is trained in the latest IT and network technologies."
    },
    {
    title: "Custom Solutions",
    description: "Tailored packages for unique business needs."
    }
]
// Card component
const ServiceCard = React.memo(
  ({  title, description }: Service) => (
    <article
      className="bg-white shadow-xl rounded-xl p-4 lg:py-6 flex flex-col items-start hover:scale-105 focus:scale-105 transition-transform duration-300 will-change-transform mt-2 group"
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
export default function PricingWhyChooseSection() {
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
          Why Choose Our {" "}
          <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
          IT Support Pricing Plans?
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
