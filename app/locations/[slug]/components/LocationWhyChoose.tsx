import React from "react";
import { useTranslations } from "next-intl";
import { LuCheck } from "react-icons/lu";

export default function LocationWhyChoose({title, desc, list}:{
    title: string;
    desc: string;
    list:string[]
}) {
  const t = useTranslations("achievement");
  return (
    <section className="py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl 2xl:max-w-[1488px] mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
          {title}
        </h2>
        {
          desc.length>0
          &&
          <p className="text-gray-500 mb-10 text-xl mt-4 text-center">
          {desc}
          </p>
        }
        <div className="flex items-center justify-center">
          
          <ul className="mt-3 space-y-3">
            {list.map((text, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <LuCheck size={30} className=" text-green-600 mt-1 " aria-hidden="true" />
                <span className="text-gray-800 text-lg"> {text}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
