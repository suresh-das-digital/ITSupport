"use client";

import Image from "next/image";
import { Check } from "lucide-react";

export default function InsightCaseStudySection() {
  return (
    <section
      aria-labelledby="exclusive-tech-heading"
      className="w-full py-8  bg-blue-50"
    >
      <div className="mx-auto max-w-7xl 2xl:max-w-[1488px] px-4 lg:px-6 xl:px-0 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT IMAGES */}
        

        {/* RIGHT TEXT CONTENT */}
        <div className="w-full">
          <h2
            id="exclusive-tech-heading"
            className="text-3xl font-extrabold text-[#0D1A4F] sm:text-4xl leading-tight"
          >
            Case Studies – Real Stories, Real Results
          </h2>

          <p className="mt-4 text-gray-600 ">
          Our <strong>Case Studies</strong> section demonstrates exactly how 
          <strong> ITSupport.net.in delivers measurable outcomes</strong> for our clients. Each case study walks you through the journey from 
          <strong> problem identification </strong> to <strong>solution implementation </strong> and <strong>results achieved</strong> 
          </p>


          <p className="mt-4 text-gray-600 ">
          Through these real-life examples, you can see how we:
          </p>
          <ul className="mt-6 space-y-3">
            {[

                {
                text1:"Step-by-step guides",
                text2:" Resolved critical downtime issues for enterprise clients."
                },
                {
                text1:"Productivity tips",
                text2:"Designed secure, high-performance networks for growing businesses"
                },
                {
                text1:"Comparisons and reviews",
                text2:"Migrated complex infrastructure to the cloud without disruption."
                },
                {
                text1:"Best practices ",
                text2:"Implemented cost-saving IT solutions that boosted efficiency"
                }
            ].map((text) => (
              <li key={text.text1} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-600 mt-1 min-w-5" aria-hidden="true" />
                <span className="text-gray-800"> {text.text2}</span>
              </li>
            ))}
          </ul>

          <p className="mt-4 text-gray-600 ">
          Each story is backed by  <strong>clear metrics, client feedback, and technical breakdowns,</strong> making it easy for you to understand our 
          <strong> problem-solving approach</strong> and how it might apply to your business needs. 
          </p>

          <p className="mt-4 text-gray-600 ">
          Our case studies are more than just success stories—they’re <strong>proof of our capability, innovation, and commitment </strong> to excellence.
          </p>

          
        </div>
        <div className="relative flex flex-col gap-6">
          {/* Main top image */}
          <div className="rounded-3xl overflow-hidden ">
            <Image
              src="/information/insight-caseStudy.svg" // replace with your path
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
