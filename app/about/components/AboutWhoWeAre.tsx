
import Image from "next/image";
import { Check } from "lucide-react";

export default function AboutWhoWeAre() {
  return (
    <section
      aria-labelledby="exclusive-tech-heading"
      className="w-full py-12 lg:py-0 bg-white"
    >
      <div className="mx-auto max-w-6xl 2xl:max-w-[1488px] px-4 lg:px-6 xl:px-0 grid lg:grid-cols-2 gap-8 items-center">
        
        {/* LEFT IMAGES */}
        <div className="relative flex flex-col gap-6">
          {/* Main top image */}
          <div className=" overflow-hidden ">
            <Image
              src="/information/About-who-we-are.svg" // replace with your path
              alt="About who we are"
              title = "About who we are"
              width={600}
              height={500}
              className="w-full h-auto  object-contain "
              priority
            />
          </div>

        </div>

        {/* RIGHT TEXT CONTENT */}
        <div className="w-full">
          <h2
            id="exclusive-tech-heading"
            className="text-3xl font-extrabold text-[#0D1A4F] sm:text-4xl leading-tight"
          >
            Who We Are
          </h2>

          <p className="mt-4 text-gray-600 max-w-xl">
          For over  
          <a href="https://www.itsupport.net.in/" rel="noopener" className="font-bold"> two decades, ITSupport.net.in</a> has been a trusted leader in 
          <strong>IT support services and network solutions</strong>, serving clients across <strong>50+ countries</strong>. From small businesses to multinational corporations, we 
          <strong>provide tailored, secure, and reliable IT solutions</strong> that keep operations running smoothly and efficiently.
          </p>

          <p className="mt-4 text-gray-600 max-w-xl">
            With <strong>1 million+ service requests successfully resolved</strong> and 
            <strong> 20,000+ satisfied customers worldwide</strong>, we have built a solid reputation for 
            <strong> quality, innovation, and customer-first service</strong>. Whether it’s 
            <strong> network troubleshooting, cloud migration, cybersecurity,</strong> or 
            <strong> managed IT services</strong>, we ensure our clients receive solutions that are both 
            <strong> technically advanced and business-focused</strong>.
          </p>

         

          
        </div>
      </div>
    </section>
  );
}
