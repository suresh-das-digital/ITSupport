import React from "react";
import { useTranslations } from "next-intl";


const achievementData = [
  {
    title: "Essential / Necessary",
    desc: "Required for the website to function (e.g., authentication, security)",
  },
  {
    title: "Performance / Analytics",
    desc: "Track usage patterns and errors, help us optimize the site",
  },
  {
    title: "Functional (Optional)",
    desc: "Enable features like live chat or language preferences",
  },
  {
    title: "Advertising / Targeting (Optional)",
    desc: "Used by third parties for marketing, ads, or retargeting",
  },
  
];

export default function CookiesType() {
//   const t = useTranslations("achievement");
  return (
    <section className="py-16 px-4 sm:px-6 bg-[#f4f7fa]">
      <div className="max-w-6xl 2xl:max-w-[1488px] mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        Cookie Types We Use
        </h2>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-6 w-full">
            {achievementData.map((achievement, index) => (
              <div
                key={`hero-services-${achievement.title}`}
                className="rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group border border-cyan-400 hover:border-cyan-600"
              >
                <span className="cursor-pointer">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-700 text-sm">{achievement.desc}</p>
                </span>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
