
import Image from "next/image";
import { Check } from "lucide-react";

export default function AboutHistory() {
  return (
    <section
      aria-labelledby="exclusive-tech-heading"
      className="w-full py-12 lg:py-0 bg-white"
    >
      <div className="mx-auto max-w-6xl 2xl:max-w-[1488px] px-4 lg:px-6 xl:px-0 grid lg:grid-cols-2 gap-8 items-center">
        
        <div className="w-full">
          <h2
            id="exclusive-tech-heading"
            className="text-3xl font-extrabold text-[#0D1A4F] sm:text-4xl leading-tight"
          >
            Our History
          </h2>

          <p className="mt-4 text-gray-600 max-w-xl">
            Founded in the early 2000s, <strong>ITSupport.net.in</strong> began as a small team of 
            passionate IT engineers dedicated to helping businesses resolve their tech challenges. 
            Over the years, we <strong>expanded our capabilities</strong>, invested in 
            <strong> cutting-edge technology</strong>, and grew our global presence to meet the 
            evolving needs of the digital world.
          </p>

          <p className="mt-4 text-gray-600 max-w-xl">
            From our humble beginnings offering <strong>basic desktop support</strong> to becoming 
            a <strong>full-scale IT solutions provider</strong>, our journey reflects our 
            <strong> commitment to growth, learning, and excellence</strong>. Today, we are proud 
            to be a <strong>global partner</strong> for businesses in industries like 
            <strong> finance, healthcare, manufacturing, logistics, retail, travel, and hospitality</strong>.
          </p>

         

          
        </div>

        <div className="relative flex flex-col gap-6">
          {/* Main top image */}
          <div className=" overflow-hidden ">
            <Image
              src="/information/About-our-history.svg" // replace with your path
              alt="About who we are"
              title = "About who we are"
              width={600}
              height={500}
              className="w-full h-auto  object-contain "
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}
