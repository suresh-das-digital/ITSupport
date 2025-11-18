"use client";

import Image from "next/image";
import { Check } from "lucide-react";

export default function InsightNewsSection() {
  return (
    <section
      aria-labelledby="exclusive-tech-heading"
      className="w-full p-8  bg-white"
    >
      <div className="mx-auto max-w-7xl 2xl:max-w-[1488px] px-4 lg:px-6 xl:px-0 grid lg:grid-cols-2 gap-12 items-center">
        
        <div className="relative flex flex-col gap-6">
          {/* Main top image */}
          <div className="rounded-3xl overflow-hidden ">
            <Image
              src="/information/insight-news.svg" // replace with your path
              alt="Team of IT professionals collaborating in an office"
              width={600}
              height={800}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          
        </div>
        

        <div className="w-full">
          <h2
            id="exclusive-tech-heading"
            className="text-3xl font-extrabold text-[#0D1A4F] sm:text-4xl leading-tight"
          >
            News – Company Updates & Industry Developments
          </h2>

          <p className="mt-4 text-gray-600 ">
          In our <strong>News</strong> section, you’ll find the latest updates about 
          <strong> ITSupport.net.in</strong> and the <strong> technology industry </strong>.
          </p>
          


          <p className="mt-4 text-gray-600 max-w-lg">
          Here, we share:
          </p>
          <ul className="mt-6 space-y-3">
            {[

              {
                text1:"Company announcements",
                text2:"New service launches, partnerships, and expansions."
              },
              {
                text1:"Industry news",
                text2:"Key developments in IT support, networking, and cybersecurity."
              },
              {
                text1:"Event updates",
                text2:"Conferences, webinars, and training programs we’re hosting or attending."
              },
              {
                text1:"Awards and recognitions ",
                text2:"Celebrating achievements and milestones."
              }
            ].map((text) => (
              <li key={text.text1} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-600 mt-1 min-w-5" aria-hidden="true" />
                <span className="text-gray-800"><strong>{text.text1} - </strong> {text.text2}</span>
              </li>
            ))}
          </ul>

          <p className="mt-4 text-gray-600 ">
          By staying connected through our News section, you can remain <strong>informed about the latest innovations</strong> in IT services, understand 
          <strong> shifts in industry regulations,</strong> and learn how they might affect your business. 
          </p>

          
        </div>
        
      </div>
    </section>
  );
}
