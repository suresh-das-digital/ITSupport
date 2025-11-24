// components/PricingPlans.tsx

import React from "react";

const plans = [
    {
        name: "Small Business IT Support Plan (Perfect for Startups & SMEs)",
        price: "₹5,999",
        period: "month",
        bestFor: "Freelancers, startups, and small businesses that need reliable, affordable IT support.",
        features: [
        "8×5 remote IT support.",
        "Basic network setup and maintenance.",
        "Antivirus installation & monitoring.",
        "Software updates & patch management.",
        "Email & productivity tool support.",
        "Monthly health check reports."
        ],
        benefits: [
        "Keep your business running smoothly.",
        "Reduce IT-related downtime.",
        "Affordable entry-level pricing without compromising quality."
        ],
        highlight: false
    },
    {
        name: "Enterprise IT Support Plan (For Medium to Large Organizations)",
        price: "₹24,999",
        period: "month",
        bestFor: "Organizations requiring comprehensive, 24/7 IT support and advanced network management.",
        features: [
        "24×7 remote & on-site IT support.",
        "Advanced network monitoring & optimization.",
        "Data backup & disaster recovery solutions.",
        "Cybersecurity audits & intrusion prevention.",
        "Server and cloud infrastructure management.",
        "Dedicated account manager & priority response."
        ],
        benefits: [
        "Enterprise-grade security and uptime.",
        "Dedicated team for faster resolution.",
        "Scalable to handle growing IT demands."
        ],
        highlight: true
    },
    {
        name: "Custom IT & Network Solutions (Tailored for Unique Business Needs)",
        price: "Custom pricing",
        period: "based on requirements",
        bestFor: "Businesses with specialized IT environments or unique compliance needs.",
        features: [
        "Hybrid cloud and on-premise infrastructure design.",
        "Industry-specific compliance solutions (HIPAA, GDPR, etc.).",
        "Advanced cybersecurity frameworks.",
        "Multi-location IT management.",
        "Specialized hardware and software procurement."
        ],
        benefits: [
        "Pay only for what you need.",
        "Full flexibility in support and service levels.",
        "Perfect for businesses in niche industries."
        ],
        highlight: false
    }
];

export default function PricingPlans() {
  return (
    <section
      aria-labelledby="pricing-heading"
      className="bg-[#1A0A2D] min-h-screen px-4 py-16 flex flex-col items-center"
    >
      <div className="text-center mb-10">
        <h2
          id="pricing-heading"
          className="text-4xl md:text-5xl font-extrabold text-white"
        >
          <span className="text-pink-400">Pricing Plans</span> 
        </h2>
        {/* <p className="mt-4 text-lg text-gray-200 max-w-xl mx-auto">
          We are leading technology solutions providing company all over the world doing over 40 years lorem ipsum dolor sit amet.
        </p> */}
      </div>
      <div
        className="w-full max-w-6xl 2xl:max-w-[1488px] grid grid-cols-1 md:grid-cols-3 gap-6"
        role="list"
      >
        {plans.map((plan, idx) => (
          <div
            key={plan.name}
            role="listitem"
            aria-label={plan.name + " plan"}
            tabIndex={0}
            className={`relative bg-[#2A1842] rounded-xl shadow-md flex flex-col p-8
              ${plan.highlight ? "border-2 border-pink-400 scale-[1.02]" : "border border-gray-700"}
              focus:outline-none hover:ring-2 hover:ring-pink-400`}
          >
            <h2 className="text-xl font-semibold text-pink-300 mb-2">
              {plan.name}
            </h2>
            <div className="flex items-end mb-2">
                {
                    plan.price === "Custom pricing" ? (
                        <span className="text-xl font-semibold text-white">Custom pricing based on requirements</span>
                    ) : 
                    <>
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-md text-gray-300 ml-2">/ {plan.period}</span>
                    </>
                }
              
            </div>
            <p className="text-[18px] font-semibold text-gray-300">Best for:</p>
            <p className="mb-5 text-[15px] text-gray-300">
              {plan.bestFor}
            </p>

            <p className="text-[18px] font-semibold text-gray-300 mb-3">Features:</p>
            <ul className="space-y-2 mb-6">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center text-gray-100 text-sm"
                >
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-violet-700 mr-2">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 16 16" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 8l3 3 5-5"/>
                    </svg>
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <p className="text-[18px] font-semibold text-gray-300 mb-3">Benefits:</p>
            <ul className="space-y-2 mb-6">
              {plan.benefits.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center text-gray-100 text-sm"
                >
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-violet-700 mr-2">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 16 16" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 8l3 3 5-5"/>
                    </svg>
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className="mt-auto w-full py-2 font-bold cursor-pointer bg-gradient-to-br from-cyan-400 via-cyan-500 to-yellow-400 text-white rounded-md shadow-lg hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
              aria-label={`Choose ${plan.name} plan`}
            >
              Choose Plan
            </button>
            {/* {plan.tag && (
              <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-pink-400 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                {plan.tag}
              </span>
            )} */}
          </div>
        ))}
      </div>
    </section>
  );
}
