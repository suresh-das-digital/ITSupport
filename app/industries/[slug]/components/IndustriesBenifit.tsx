import { LucideCheckCircle, LucideCircleCheck } from "lucide-react";

export default function IndustriesBenifit({title, benifits}:{
    title:string;
    benifits:any[]
}) {
  return (
    <section className="w-full bg-gray-50 py-16 text-gray-900">
      <div className="max-w-6xl 2xl:max-w-[1488px] mx-auto px-4 xl:px-0 flex flex-col items-center">
        
        <h2 className="max-w-6xl mx-auto text-center text-3xl md:text-4xl font-bold mb-4 leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-400">{title}  </span> 
        </h2>
        {/* <p className="text-gray-600 text-lg mb-10 text-center max-w-3xl">
        {subTitle}
        </p> */}
        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4  gap-8 w-full">
          {benifits.map((s, idx) => (
            <div key={idx} style={{backgroundColor:s.bg}} className="relative w-full rounded-2xl shadow-lg p-5 flex flex-col min-h-[70px] max-w-lg mx-auto group hover:scale-105  transition-all duration-500">
              
              <div className="mt-4 mb-6 font-bold text-xl group-hover:text-cyan-700">{s.title}</div>

              <p className="text-gray-600 mb-2" dangerouslySetInnerHTML={{ __html: s.desc }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}