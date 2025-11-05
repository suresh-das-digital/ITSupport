// import { useTranslations } from "next-intl";

// import Link from "next/link";

// export default function WelcomeComponent() {
//   const t = useTranslations("Welcome");

//   return (
//     <section className="z-1 overflow-hidden relative flex lg:flex-row flex-col-reverse h-auto py-5 px-4 bg-gradient-to-b from-[#f8fafc] to-grey-200">
//       <div
//         className="z-1 flex text-grey-200 flex-col h-full justify-center mb-5 flex-1"
//         style={{ opacity: 1, transform: "none" }}
//       >
//         <h1
//           className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center leading-tight"
//           style={{ opacity: 1, transform: "none" }}
//         >
//           {t("welcome")}{" "}
//           <a
//             href="https://it-support-landing.vercel.app"
//             className="text-[#61CE70] hover:text-[#4CAF50] transition-colors duration-300"
//           >
//             {" "}
//             ITSupport.net.in
//           </a>
//         </h1>
//         <p
//           className="text-lg sm:text-xl text-grey-200 max-w-4xl mx-auto leading-relaxed"
//           style={{ opacity: 1, transform: "none" }}
//         >
//           {t("intro1.prefix")}{" "}
//           <a
//             href="https://it-support-landing.vercel.app"
//             className="text-[#61CE70] hover:text-[#4CAF50] transition-colors duration-300"
//           >
//             {" "}
//             ITSupport.net.in
//           </a>{" "}
//           {t("intro1.suffix")}
//         </p>
//         <p
//           className="text-lg sm:text-xl text-grey-200 max-w-4xl mx-auto leading-relaxed mt-6"
//           style={{ opacity: 1, transform: "none" }}
//         >
//           {t("intro2")}
//         </p>
//         <div
//           className="flex w-full justify-center md:justify-baseline mt-5"
//           style={{ opacity: 1, transform: "none" }}
//         >
//           <Link
//             className="inline-block bg-gradient-to-r from-[#61CE70] via-blue-500 to-[#61CE70] text-grey-200 px-8 py-3 sm:px-10 sm:py-4 rounded-full font-extrabold shadow-xl hover:from-blue-500 hover:to-[#61CE70] hover:scale-105 transition-all duration-300 text-lg sm:text-xl tracking-wide ring-2 ring-[#61CE70] hover:ring-4 focus:outline-none focus:ring-4 focus:ring-[#61CE70]/60 group"
//             href="/services"
//             style={{
//               boxShadow:
//                 "rgba(97, 206, 112, 0.25) 0px 8px 32px 0px, rgba(10, 25, 47, 0.1) 0px 1.5px 8px 0px",
//               letterSpacing: "0.04em",
//             }}
//           >
//             <span className="inline-flex items-center gap-2">
//               {t("exploreServices")}
//               <svg
//                 className="w-5 h-5 text-grey-200 group-hover:translate-x-1 group-hover:scale-110 transition-transform duration-300"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2.2"
//                 viewBox="0 0 24 24"
//                 aria-hidden="true"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M17 8l4 4m0 0l-4 4m4-4H3"
//                 ></path>
//               </svg>
//             </span>
//           </Link>
//         </div>
//       </div>
//       <div
//         className="top-0 left-0 w-full flex rounded-4xl flex-1"
//         style={{ opacity: 1, transform: "none" }}
//       >
//         <video
//           width="960"
//           height="540"
//           muted
//           autoPlay
//           loop
//           playsInline
//         preload="auto">
//           <source src={`/it-support-services.small.mp4`} />
//         </video>
//         {/* <video
//           className="w-full"
//           style={{filter: 'blur(0px)'}}
//           src="it-support-services.small.mp4"
//           muted
//           autoPlay={true}
//           loop={true}
//           playsInline={false}
//           preload="auto"
//         ></video> */}
//       </div>
//     </section>
//   );
// }


// import { useTranslations } from "next-intl";
// import Link from "next/link";

// export default function WelcomeComponent() {
//   const t = useTranslations("Welcome");

//   return (
//     <section className="relative min-h-[80vh] 2xl:min-h-[65vh] flex items-center justify-center overflow-hidden z-0">
//       {/* Full-bleed blurred video background */}
//       <video
//         className="absolute inset-0 w-full h-full object-cover z-0 brightness-75"
//         src="/it-support-services.small.mp4"
//         autoPlay
//         muted
//         loop
//         playsInline
//         preload="auto"
//       />
//       {/* Overlay card with frosted glass effect */}
//       <div className="relative mx-4 md:mx-auto z-10 max-w-4xl w-full  bg-black/40 backdrop-blur-lg rounded-3xl p-10 py-8 flex flex-col items-center shadow-2xl">
//         <h1 className="text-3xl sm:text-5xl font-bold text-white mb-8 text-center">
//           {t("welcome")}{" "}
//           <a
//              href="https://it-support-landing.vercel.app"
//             className="text-[#61CE70] hover:text-[#4CAF50] transition-colors duration-300"
//           >
//            {" "}
//             ITSupport.net.in
//           </a> 
//         </h1>

//         <p className="text-white text-center mb-8 ">
//         For over 20 years, ITSupport.net.in has been a pioneer in delivering remote IT and technical support worldwide. With a proven track record of solving over 3 lakh issues and serving 50,000 satisfied clients across 50+ countries, we have become the go-to partner for businesses seeking reliable, efficient, and cost-effective IT solutions.
//         </p>
        
//         <div className="flex gap-4 mb-6">
//           <Link href="/services">
//           <button className="bg-gradient-to-r cursor-pointer flex items-center from-[#15e088] to-[#2ca3ff] text-white px-8 py-3 rounded-full font-semibold text-lg hover:scale-105 shadow-lg transition-all">
//           {t("exploreServices")}
//                <svg
//                  className="w-5 h-5 text-grey-200 group-hover:translate-x-1 group-hover:scale-110 transition-transform duration-300"
//                  fill="none"
//                  stroke="currentColor"
//                  strokeWidth="2.2"
//                  viewBox="0 0 24 24"
//                  aria-hidden="true"
//                >
//                  <path
//                    strokeLinecap="round"
//                    strokeLinejoin="round"
//                    d="M17 8l4 4m0 0l-4 4m4-4H3"
//                  ></path>
//                </svg>
//           </button>
//           </Link>
//         </div>
        
//       </div>
//     </section>
//   );
// }

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
// import { FaWhatsapp } from "react-icons/fa";
// import { LuTarget, LuTrendingUp, LuUserSearch, LuZap } from 'react-icons/lu';

export default function HireHeroSection() {
  const t = useTranslations("Welcome");
  return (
    <div className="bg-[linear-gradient(135deg,_#001731_0%,_#00426F_50%,_#0D76B1_100%)] overflow-hidden text-white w-full lg:min-h-[30vh] min-h-[30vh] flex flex-col-reverse lg:flex-row items-center justify-center px-[4%] xl:px-[8%] pt-[80px] pb-20 lg:pb-10 lg:pt-[80px]  ">
      
      <div className='w-full 2xl:max-w-[1488px] flex flex-col-reverse lg:flex-row items-center'>
      <div className=" flex flex-col items-center lg:items-start lg:w-1/2 lg:pr-[4%] space-y-6 mt-12 lg:mt-0 z-10">
        
        <h1 className="text-3xl sm:text-5xl font-bold text-white mb-8  ">
           Welcome to
          <a
             href="https://it-support-landing.vercel.app"
            className="text-[#61CE70] hover:text-[#4CAF50] transition-colors duration-300"
          >
           {" "}
            ITSupport.net.in
          </a> 
        </h1>
        <p className="text-lg sm:text-xl text-center lg:text-start animate-reveal">
        For over 20 years, ITSupport.net.in has been a pioneer in delivering remote IT and technical support worldwide. With a proven track record of solving over 3 lakh issues and serving 50,000 satisfied clients across 50+ countries, we have become the go-to partner for businesses seeking reliable, efficient, and cost-effective IT solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg items-center lg:items-start lg:justify-start mt-4 animate-reveal">
        <Link href="/services">
           <button className="bg-gradient-to-r cursor-pointer flex items-center from-[#15e088] to-[#2ca3ff] text-white px-8 py-3 rounded-full font-semibold text-lg hover:scale-105 shadow-lg transition-all">
           {t("exploreServices")}
                <svg
                 className="w-5 h-5 text-grey-200 group-hover:translate-x-1 group-hover:scale-110 transition-transform duration-300"
                 fill="none"
                 stroke="currentColor"
                 strokeWidth="2.2"
                 viewBox="0 0 24 24"
                 aria-hidden="true"
               >
                 <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   d="M17 8l4 4m0 0l-4 4m4-4H3"
                 ></path>
               </svg>
          </button>
          </Link>
          
        </div>
        
        
      </div>


        {/* right side */}
      <div className="flex-1 flex items-center justify-center w-full xl:w-1/2 mt-6 lg:mt-0 animate-reveal-left">
      <div className='relative ripple-container w-full z-0'>
        <div className="relative animate-updown w-[98%] lg:w-full z-10  xl:h-[450px] h-[240px] sm:h-[340px] hover:shadow-2xl rounded-lg hover:shadow-[#ffffff2b] border-[8px] lg:border-[15px] border-[#ffffff2d] overflow-hidden">
        <div className="relative w-full h-full">
            <video
              src="/it-support-services.small.mp4"
              // alt="Hire Remote Freelance Part Time Talent"
              title="Hire Remote Freelance Part Time Talent"
              className="absolute top-0 left-0 w-full h-full object-cover object-right"
              autoPlay
              loop
              muted
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <div className='w-full h-1/2 bg-gradient-to-b from-transparent to-black/80 absolute bottom-0 z-0'></div>
          {/* <div className="absolute bottom-4 left-4  bg-opacity-75 px-3 py-2 rounded shadow flex flex-col gap-2 z-20">
            <span className=" animate-updown2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl w-16 h-16 flex items-center justify-center text-white font-bold text-lg">
              <LuUserSearch size={35}/>
            </span>
            <span className="text-white font-semibold text-xl ">Remote Workforce</span>
            <p className='text-white text-sm '>Hire top-tier freelancers available for both full-time and part-time projects.</p>
          </div> */}
        </div>
        {/* <span className=" absolute z-20 -top-5 -left-2 animate-updown2 border-[0.5px] border-white bg-white/20 rounded-xl w-12 h-12 flex items-center justify-center text-white font-bold text-lg">
              <LuTrendingUp size={30}/>
            </span>
            <span className=" absolute z-20 bottom-0.5 -right-2 animate-updown2 border-[0.5px] border-white bg-white/20 rounded-xl w-12 h-12 flex items-center justify-center text-white font-bold text-lg">
              <LuTarget size={30}/>
            </span> */}
        </div>
      </div>
      </div>
    </div>
  );
}
