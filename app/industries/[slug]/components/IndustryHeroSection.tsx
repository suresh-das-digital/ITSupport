
import { LucideDatabase } from 'lucide-react';
import Image from 'next/image';

export default function IndustryHeroSection({heroimage, title, subtitle, pageName, icon}:{
  heroimage?:string;
  title:string;
  subtitle:string;
  pageName : string;
  icon:React.ReactNode;
//   buttonText1:string;
//   buttonText2:string
}) {
  return (
    <div className="relative min-h-[70vh] w-full flex items-center justify-center overflow-hidden ">
      {/* Background image, absolute and full-screen */}
      {/* {
        heroimage &&
        
      } */}
      <Image
            src={"/infortmation-bg.svg"} // Update the path if needed
            alt={title+" "+"bg image"}
            title={title+" "+"bg image"}
            fill
            priority
            className="object-cover w-full h-full "
        />
      
      {/* Content card */}
      <div className="relative z-10 max-w-4xl w-full mx-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg flex flex-col items-center py-16 px-8 animate-updown">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-4 animate-reveal">
          {title}
        </h1>
        <div className='w-full flex flex-col items-center'>
            {/* <LucideDatabase size={40} className='text-white'/> */} 
            {icon ? icon : null}
            <p className="text-xl text-white/90 text-center mb-10 animate-reveal">
            {subtitle}
            </p>
        </div>
        
        <div className="flex gap-4 animate-reveal">
          <button className="px-6 py-3 bg-gradient-to-br from-green-400 to-blue-500 text-white font-semibold rounded-full shadow hover:scale-105 transition">
            {/* {buttonText1} */} Get Support Now
          </button>
          <button className="px-6 py-3 bg-gradient-to-tr from-green-400 to-blue-500 text-white font-semibold rounded-full shadow hover:scale-105 transition">
            {/* {buttonText2} */} Request a Call
          </button>
        </div>

        <div className="mt-8 flex items-center space-x-2 text-white/90 text-base font-medium animate-reveal">
            <span>Home</span>
            <span className="mx-2">→</span>
            <span className="">Services</span>
            <span className="mx-2">→</span>
            <span className="text-white font-medium">{pageName}</span>
        </div>
      </div>
      {/* Optional: overlay to enhance contrast */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
    </div>
  );
}
