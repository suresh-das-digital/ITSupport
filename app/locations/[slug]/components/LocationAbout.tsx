"use client";

import Image from "next/image";
import { Check } from "lucide-react";

export default function LocationAbout({title, descriptions, image}:{
    title:string;
    descriptions:string[];
    image:string;
}) {
  return (
    <section
      aria-labelledby="exclusive-tech-heading"
      className="w-full py-16  bg-white"
    >
      <div className="mx-auto max-w-7xl 2xl:max-w-[1488px] px-4 lg:px-6 xl:px-0 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT IMAGES */}
        

        {/* RIGHT TEXT CONTENT */}
        <div className="w-full">
          <h2
            id="exclusive-tech-heading"
            className="text-3xl font-extrabold text-[#0D1A4F] sm:text-4xl leading-tight"
          >
            {title}
          </h2>

            {
            descriptions.map((desc, index) => (
                <p key={index} className="mt-4 text-gray-600 ">
                    {desc}
                </p>
            ))
            }
          {/* <p className="mt-4 text-gray-600 max-w-3lg">
          The Insights section of ITSupport.net.in is your trusted source for 
          <strong> in-depth analysis, expert advice, and strategic guidance</strong> in the world of IT support and network solutions. Our aim is to 
          <strong>equip businesses, IT managers, and individuals</strong> with the information they need to make informed technology decisions.
          </p> */}

        

          
        </div>
        <div className="relative flex flex-col gap-6">
          {/* Main top image */}
          <div className="rounded-3xl overflow-hidden ">
            <Image
              src={image} // replace with your path
              alt={title}
              title={title}
              width={600}
              height={400}
              className="w-full h-auto max-h-[400px] object-contain"
              priority
            />
          </div>

          
        </div>
      </div>
    </section>
  );
}
