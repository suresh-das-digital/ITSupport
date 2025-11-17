"use client";

import Image from "next/image";
import { Check } from "lucide-react";

export default function WhatAreCookies() {
  return (
    <section
      aria-labelledby="exclusive-tech-heading"
      className="w-full py-16  bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT IMAGES */}
        <div className="relative flex flex-col gap-6">
          {/* Main top image */}
          <div className="rounded-3xl overflow-hidden ">
            <Image
              src="/information/cookie-policy.svg" // replace with your path
              alt="Team of IT professionals collaborating in an office"
              width={600}
              height={800}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          
        </div>

        {/* RIGHT TEXT CONTENT */}
        <div>
          <h2
            id="exclusive-tech-heading"
            className="text-3xl font-extrabold text-[#0D1A4F] sm:text-4xl leading-tight"
          >
            What Are Cookies
          </h2>

          <p className="mt-4 text-gray-600 max-w-lg">
          Cookies are small text files that websites send to your browser and store on your device. They enable website functionality (e.g., remembering login sessions), facilitate analytics, and help deliver personalized content.
          </p>

          {/* Feature list */}
          <h2
            id="exclusive-tech-heading"
            className="text-3xl font-extrabold text-[#0D1A4F] sm:text-4xl leading-tight mt-8"
          >
            Why We Use Cookies
          </h2>
          <p className="mt-4 text-gray-600 max-w-lg">
          We use cookies to:
          </p>
          <ul className="mt-6 space-y-3">
            {[
              {
                text1:"Ensure core functionality:",
                text2:"Like maintaining your logged-in session or storing your preferences."
              },
              {
                text1:"Improve performance & analytics:",
                text2:"Collect anonymized data on site usage to enhance speed, navigation, and user experience."
              },
              {
                text1:"Support optional features:",
                text2:"Such as live chat, embedded content, or marketing integrations."
              }
            ].map((text) => (
              <li key={text.text1} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-600 mt-1 min-w-5" aria-hidden="true" />
                <span className="text-gray-800"><strong>{text.text1}</strong> {text.text2}</span>
              </li>
            ))}
          </ul>

          
        </div>
      </div>
    </section>
  );
}
