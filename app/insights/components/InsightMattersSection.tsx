import React from "react";
import { useTranslations } from "next-intl";
import { LuCheck } from "react-icons/lu";

export default function InsightMattersSection() {
  const t = useTranslations("achievement");
  return (
    <section className="py-16 px-4 sm:px-6 bg-blue-50">
      <div className="max-w-6xl 2xl:max-w-[1488px] mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
        Why These Sections Matter to You
        </h2>
        
        <div className="flex items-center justify-center max-w-4xl mx-auto">
          
          <ul className="mt-3 space-y-3">
            {[
                {
                    text:"For Businesses:",
                    desc:"Gain actionable knowledge, learn from real results, and stay competitive in a fast-moving tech environment."
                },
                {
                    text:"For Individuals:",
                    desc:"Improve your IT skills, troubleshoot with confidence, and keep your devices and data secure."
                },
                {
                    text:"For Industry Professionals:",
                    desc:"Access thought leadership, discover best practices, and track emerging technologies."
                }
            ].map((text, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <LuCheck size={30} className=" text-green-600 mt-1 " aria-hidden="true" />
                <span className="text-gray-800 text-lg"> <strong>{text.text}</strong> {text.desc}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 text-gray-600 max-w-4xl text-lg mx-auto text-center">
        At <strong>ITSupport.net.in,</strong> we believe that 
          <strong> information is the foundation of better decision-making.</strong> That’s why our Insights, Blog, Case Studies, and News sections are designed to  
          <strong> empower you with the right information at the right time. </strong>
        </p>

      </div>
    </section>
  );
}
