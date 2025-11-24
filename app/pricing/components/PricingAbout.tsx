"use client";

import Image from "next/image";
import { Check } from "lucide-react";

export default function PricingAbout() {
  return (
    <section
      aria-labelledby="exclusive-tech-heading"
      className="w-full pt-4 bg-white"
    >
      <div className="mx-auto max-w-7xl 2xl:max-w-[1488px] px-4 lg:px-6 xl:px-0 lg:grid lg:grid-cols-2 gap-x-12 items-center">
        
        {/* LEFT IMAGES */}
        

        {/* RIGHT TEXT CONTENT */}
        <div className="w-full">
          <h2
            id="exclusive-tech-heading"
            className="text-3xl font-extrabold text-[#0D1A4F] sm:text-4xl leading-tight"
          >
            Your Technology. Our Expertise. One Clear Price.
          </h2>

          <p className="mt-4 text-gray-600 max-w-3lg">
          At
          <strong> ITSupport.net.in</strong> we believe in <strong>clear, upfront pricing </strong> with
          <strong> no hidden charges.</strong> Whether you’re a <strong> small business</strong> looking for essential tech support or a <strong>large enterprise</strong> needing a fully managed network infrastructure, our pricing is designed to deliver
          <strong> maximum value</strong> for every budget.
          </p>



          <p className="mt-4 text-gray-600 max-w-lg">
          Our flexible IT support plans help you:
          </p>
          <ul className="mt-6 space-y-3">
            {[

              {
                text1:"Reduce downtime",
                text2:" with proactive monitoring."
              },
              {
                text1:"Protect your data",
                text2:"with enterprise-grade cybersecurity"
              },
              {
                text1:"Scale your infrastructure",
                text2:"as your business grows."
              }
            ].map((text) => (
              <li key={text.text1} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-600 mt-1 min-w-5" aria-hidden="true" />
                <span className="text-gray-800"><strong>{text.text1}</strong> {text.text2}</span>
              </li>
            ))}
          </ul>

          
        </div>
        <div className="relative flex flex-col gap-6">
          {/* Main top image */}
          <div className="rounded-3xl overflow-hidden ">
            <Image
              src="/information/pricing-about.svg" // replace with your path
              alt="Team of IT professionals collaborating in an office"
              width={500}
              height={600}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          
        </div>
      </div>
    </section>
  );
}
