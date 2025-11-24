// components/PricingPlans.tsx

import React from "react";

const plans = [
    {
        name: "Website & Hosting Support",
        price: "From ₹999/month.",
        highlight: false
    },
    {
        name: "Cybersecurity Hardening",
        price: "From ₹4,999/project.",
        
        highlight: false
    },
    {
        name: "Cloud Migration",
        price: "From ₹9,999/project.",
        
        highlight: false
    },
    {
        name: "On-Site Emergency Visits",
        price: "From ₹2,999/call.",
        
        highlight: false
    }
];

export default function PricingAdditionalServices() {
  return (
    <section
      aria-labelledby="pricing-heading"
      className="bg-[#1A0A2D] min-h-[20vh] px-4 py-16 flex flex-col items-center"
    >
      <div className="text-center mb-10">
        <h2
          id="pricing-heading"
          className="text-4xl md:text-5xl font-extrabold text-white"
        >
          <span className="text-pink-400">Additional Services & Add-ons</span> 
        </h2>
        {/* <p className="mt-4 text-lg text-gray-200 max-w-xl mx-auto">
          We are leading technology solutions providing company all over the world doing over 40 years lorem ipsum dolor sit amet.
        </p> */}
      </div>
      <div
        className="w-full max-w-6xl 2xl:max-w-[1488px] grid grid-cols-1 md:grid-cols-4 gap-6"
        role="list"
      >
        {plans.map((plan, idx) => (
          <div
            key={plan.name}
            role="listitem"
            aria-label={plan.name + " plan"}
            tabIndex={0}
            className={`relative bg-[#2A1842] rounded-xl shadow-md flex flex-col p-8
              ${plan.highlight ? "border-2 border-cyan-400 scale-[1.02]" : "border border-gray-700"}
              focus:outline-none hover:ring-2 hover:ring-cyan-400`}
          >
            <h2 className="text-xl font-semibold text-cyan-300 mb-2">
              {plan.name}
            </h2>
            <div className="flex items-end mb-2">
            <span className="text-2xl font-bold text-white">{plan.price}</span>
              
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
}
