"use client";

import Image from "next/image";
import { Check } from "lucide-react";

export default function InsightBlogsSection() {
  return (
    <section
      aria-labelledby="exclusive-tech-heading"
      className="w-full pt-8  bg-white"
    >
      <div className="mx-auto max-w-7xl 2xl:max-w-[1488px] px-4 lg:px-6 xl:px-0 grid lg:grid-cols-2 gap-12 items-center">
        
        <div className="relative flex flex-col gap-6">
          {/* Main top image */}
          <div className="rounded-3xl overflow-hidden ">
            <Image
              src="/information/insight-blogs.svg" // replace with your path
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
            Blog – Practical Tips, Guides & IT Resources
          </h2>

          <p className="mt-4 text-gray-600 ">
          Our <strong>Blog</strong> is where we combine
          <strong> technical expertise</strong> with <strong> practical guidance </strong> to help both businesses and individuals
          <strong>navigate the ever-changing world of technology</strong> 
          </p>
          


          <p className="mt-4 text-gray-600 max-w-lg">
          Updated regularly, our blog covers:
          </p>
          <ul className="mt-6 space-y-3">
            {[

              {
                text1:"Step-by-step guides",
                text2:" for troubleshooting common IT issues."
              },
              {
                text1:"Productivity tips",
                text2:"to get the most out of your IT infrastructure."
              },
              {
                text1:"Comparisons and reviews",
                text2:"of software, tools, and IT solutions."
              },
              {
                text1:"Best practices ",
                text2:"for maintaining security and compliance."
              }
            ].map((text) => (
              <li key={text.text1} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-600 mt-1 min-w-5" aria-hidden="true" />
                <span className="text-gray-800"><strong>{text.text1}</strong> {text.text2}</span>
              </li>
            ))}
          </ul>

          <p className="mt-4 text-gray-600 ">
          Whether you’re an <strong>IT professional seeking advanced strategies</strong> or a <strong>small business owner looking for user-friendly advice,</strong> our blog offers
          <strong> reliable, easy-to-understand content</strong> you can trust. 
          </p>

          <p className="mt-4 text-gray-600 ">
          We write with<strong>clarity, accuracy, and relevance,</strong> ensuring each post delivers 
          <strong> real value </strong> to your business operations and technology management.
          </p>

          
        </div>
        
      </div>
    </section>
  );
}
