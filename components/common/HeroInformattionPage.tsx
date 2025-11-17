
import { LucideDatabase } from 'lucide-react';
import Image from 'next/image';

export default function HeroInformattionPage({ title, subtitle1, subtitle2, pageName,}:{
  title:string;
  subtitle1:string;
  subtitle2:string;
  pageName : string;
  
}) {
  return (
    <div className="relative min-h-[30vh] lg:min-h-[50vh] w-full flex items-center justify-center overflow-hidden py-10">
      {/* Background image, absolute and full-screen */}
      <Image
        src={"/infortmation-bg.svg"} // Update the path if needed
        alt={title+" "+"background image"}
        fill
        priority
        className="object-cover w-full h-full "
      />
      {/* Content card */}
      <div className="relative z-10 max-w-5xl w-full mx-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg flex flex-col items-center py-6 xl:py-16 px-8 animate-updown">
        <h1 className="text-4xl md:text-5xl 2xl:text-6xl font-extrabold text-white text-center mb-4 animate-reveal">
          {title}
        </h1>
        <div className='w-full flex flex-col items-center'>
            {/* <LucideDatabase size={40} className='text-white'/> */}
            {
                subtitle1.length > 0 &&
                <p className="text text-white/90 text-center text-xl font-semibold mb-5 animate-reveal" dangerouslySetInnerHTML={{ __html: subtitle1 }} />
            }

            {
                subtitle2.length > 0 &&
                <p className="text text-white/90 text-center text mb-5 animate-reveal" dangerouslySetInnerHTML={{ __html: subtitle2 }} />
                    
            }
            
        </div>
        
        {/* <div className="flex gap-4 animate-reveal">
          <button className="px-6 py-3 bg-gradient-to-br from-green-400 to-blue-500 text-white font-semibold rounded-full shadow hover:scale-105 transition">
            {buttonText1}
          </button>
          <button className="px-6 py-3 bg-gradient-to-tr from-green-400 to-blue-500 text-white font-semibold rounded-full shadow hover:scale-105 transition">
            {buttonText2}
          </button>
        </div> */}

        <div className="lg:mt-8 flex items-center space-x-2 text-white/90 text-base font-medium animate-reveal">
            <span>Home</span>
            <span className="mx-2">→</span>
            <span className="text-white font-medium">{pageName}</span>
        </div>
      </div>
      {/* Optional: overlay to enhance contrast */}
      {/* <div className="absolute inset-0 bg-black/60 pointer-events-none" /> */}
    </div>
  );
}
