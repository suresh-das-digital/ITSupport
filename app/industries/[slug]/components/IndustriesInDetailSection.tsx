import { LucideCheckCircle, LucideCircleCheck } from "lucide-react";

export default function ServicesInDetail({title, services}:{
    title:string;
    services:any[]
}) {
  return (
    <section className="w-full bg-white py-16 text-gray-900">
      <div className="max-w-6xl 2xl:max-w-[1488px] mx-auto px-4 xl:px-0 flex flex-col items-center">
        
        <h2 className="max-w-6xl mx-auto text-center text-3xl md:text-4xl font-bold mb-4 lg:mb-8 leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">{title}  </span> 
        </h2>
        {/* <p className="text-gray-600 text-lg mb-10 text-center max-w-3xl">
        {subTitle}
        </p> */}
        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3  gap-8 w-full">
          {services.map((s, idx) => (
            <div key={idx} style={{borderColor:s.color}} className="relative bg-white w-full border-2 rounded-2xl shadow-lg p-5 flex flex-col min-h-[70px] max-w-lg mx-auto group hover:scale-105  transition-all duration-500">
              
              <div style={{color:s.color}} className="mt-4 mb-6 font-bold text-xl group-hover:text-blue-700">{s.title}</div>

              <p className="text-gray-600 mb-2" dangerouslySetInnerHTML={{ __html: s.desc }} />
              {
                    s.List
                    &&
                    <div className="mb-4">
                    {
                        s.List.map((item:any, index:number)=>{
                            return(
                                <div key={index} className="flex flex-col mt-1 w-full">
                                    {/* <p className="text-base font-bold text-gray-900">{item.title}</p> */}
                                    <div className="text text-gray-800 flex">
                                        <LucideCheckCircle size={20} className="text-green-600 mr-1 min-w-[20px]" /> {item}
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                }
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}