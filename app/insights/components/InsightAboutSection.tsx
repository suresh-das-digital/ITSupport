"use client";

import Image from "next/image";
import { Check } from "lucide-react";

export default function InsightAboutSection() {
  return (
    <section
      aria-labelledby="exclusive-tech-heading"
      className="w-full pt-8"
    >
      <div className="mx-auto max-w-7xl 2xl:max-w-[1488px] px-4 lg:px-6 xl:px-0 lg:grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT IMAGES */}
        

        {/* RIGHT TEXT CONTENT */}
        <div className="w-full">
          <h2
            id="exclusive-tech-heading"
            className="text-3xl font-extrabold text-[#0D1A4F] sm:text-4xl leading-tight"
          >
            Insights – Expert Knowledge to Empower Your Business
          </h2>

          <p className="mt-4 text-gray-600 max-w-3lg">
          The Insights section of ITSupport.net.in is your trusted source for 
          <strong> in-depth analysis, expert advice, and strategic guidance</strong> in the world of IT support and network solutions. Our aim is to 
          <strong>equip businesses, IT managers, and individuals</strong> with the information they need to make informed technology decisions.
          </p>

          {/* Feature list */}
          <p className="mt-4 text-gray-600 max-w-lg">
          From <strong>cybersecurity best practices</strong> and <strong>network optimization strategies</strong> to
          <strong> iloud migration planning</strong> and <strong>disaster recovery preparedness,</strong>  our insights are built on
          <strong>years of hands-on experience</strong> and the latest industry research.
          </p>


          <p className="mt-4 text-gray-600 max-w-lg">
          By regularly exploring our Insights section, you can
          </p>
          <ul className="mt-6 space-y-3">
            {[

              {
                text1:"Understand emerging IT trends",
                text2:" before they impact your business."
              },
              {
                text1:"Learn practical solutions",
                text2:"to everyday IT challenges."
              },
              {
                text1:"Gain a competitive edge through",
                text2:"data-driven decision-making."
              }
            ].map((text) => (
              <li key={text.text1} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-600 mt-1 min-w-5" aria-hidden="true" />
                <span className="text-gray-800"><strong>{text.text1}</strong> {text.text2}</span>
              </li>
            ))}
          </ul>

          <p className="mt-4 text-gray-600 max-w-lg">
          Our mission is simple—<strong>share knowledge that drives results.</strong>
          </p>

          
        </div>
        <div className="relative flex flex-col gap-6">
          {/* Main top image */}
          <div className="rounded-3xl overflow-hidden ">
            <Image
              src="/information/insights.svg" // replace with your path
              alt="Team of IT professionals collaborating in an office"
              width={600}
              height={800}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          
        </div>
      </div>
    </section>
  );
}
