import { LucideCheckCircle } from "lucide-react";




export default function InfoSection5({title, services}:{
  title:string;
  services:any[]
}) {
  return (
    <section className="w-full bg-white py-16 text-gray-900">
      <div className="max-w-7xl 2xl:max-w-[1488px] mx-auto px-4 flex flex-col items-center">
       
        <h2 className="max-w-3xl mx-auto text-center text-3xl md:text-4xl font-bold mb-6 leading-tight">
        {title}
        </h2>
        
        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {services.map((s, idx) => (
            <div key={s.title} className="relative bg-white rounded-2xl shadow-lg p-8 flex flex-col min-h-[370px] max-w-lg mx-auto group hover:translate-y-[-20px] hover:bg-gradient-to-br hover:from-sky-50 hover:to-white transition-all duration-500">
              
              <div className="mt-8 mb-6 font-bold text-xl group-hover:text-blue-700">{s.title}</div>

              {/* <p className="text-gray-600  mb-2">{s.description}</p> */}
              <p className="text-gray-600 mb-2" dangerouslySetInnerHTML={{ __html: s.description }} />

                {
                    s.issues
                    &&
                    <div>
                    {
                        s.issues.map((item:any, index:number)=>{
                            return(
                                <div key={index} className="flex flex-col mt-1">
                                    <p className="text-base font-bold text-gray-900">{item.title}</p>
                                    <div className="text-sm text-gray-800 flex">
                                        <LucideCheckCircle size={20} className="text-green-600 mr-1 min-w-[20px]" /> {item.solution}
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
