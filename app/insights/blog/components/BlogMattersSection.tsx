"use client";

import Image from "next/image";
import { Check } from "lucide-react";

export default function BlogMattersSection() {
  return (
    <section
      aria-labelledby="exclusive-tech-heading"
      className="w-full pt-8 bg-white"
    >
      <div className="mx-auto max-w-7xl 2xl:max-w-[1488px] px-4 lg:px-6 xl:px-0 lg:grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT IMAGES */}
        

        {/* RIGHT TEXT CONTENT */}
        <div className="w-full">
          <h2
            id="exclusive-tech-heading"
            className="text-3xl font-extrabold text-[#0D1A4F] sm:text-4xl leading-tight"
          >
            Why Our Blog Matters
          </h2>

          <p className="mt-4 text-gray-600 max-w-3lg">
          In today’s 
          <strong> digital-first economy, </strong> having access to 
          <strong> accurate, timely, and relevant IT information </strong> can be the difference between thriving and falling behind. Our blog bridges the gap between
          <strong> complex IT concepts and practical, real-world application.</strong>
          </p>

          <p className="mt-4 text-gray-600 max-w-lg">
          By following our blog, you’ll:
          </p>
          <ul className="mt-6 space-y-3">
            {[
              {
                text1:"Stay ahead of ",
                text2:" emerging tech trends",
                text3:"and industry updates."
              },
              {
                text1:"Learn",
                text2:" step-by-step solutions",
                text3:"for common IT challenges."
              },
              {
                text1:"Gain",
                text2:" cost-saving insights",
                text3:"to maximize your IT investments."
              },
              {
                text1:"Understand",
                text2:" best practices",
                text3:"for cybersecurity, networking, and IT management."
              },
              {
                text1:"Access",
                text2:" unbiased reviews",
                text3:"of tools, software, and solutions."
              },
            ].map((text) => (
              <li key={text.text1} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-600 mt-1 min-w-5" aria-hidden="true" />
                <span className="text-gray-800">{text.text1} <strong>{text.text2}</strong> {text.text3}</span>
              </li>
            ))}
          </ul>
          
        </div>
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
      </div>
    </section>
  );
}
