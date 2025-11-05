import { LucideCheckCircle } from "lucide-react";



// const services = [
//     {
//       title: "The Silent Threat of Data Loss",
//       description:
//         "Data loss isn't always a dramatic event. It can stem from a variety of sources:",
//       bottomDesc:
//         "Without a robust backup and recovery strategy, any of these scenarios can lead to devastating consequences.",
//       issues: [
//         {
//           title: "Hardware Failure",
//           solution: "Hard drives crash, SSDs fail, and devices wear out.",
//         },
//         {
//           title: "Human Error",
//           solution:
//             "Accidental deletions, overwriting files, or formatting the wrong drive.",
//         },
//         {
//           title: "Cyber-Attacks",
//           solution:
//             "Ransomware encrypts files, malware corrupts data, and hackers steal sensitive information.",
//         },
//         {
//           title: "Software Corruption",
//           solution:
//             "Operating system errors, application crashes, or corrupt files.",
//         },
//         {
//           title: "Natural Disasters",
//           solution:
//             "Fires, floods, or other physical damage to your devices.",
//         },
//       ],
//     },
//     {
//       title: "Business Continuity & Personal Peace of Mind",
//       description:
//         "For businesses, data loss translates directly into downtime, financial losses, reputational damage, and potential legal liabilities. A quick and effective recovery plan ensures business continuity, minimizing disruption and getting you back on track swiftly. For individuals, losing irreplaceable photos, videos, or documents can be emotionally taxing. Secure backups safeguard these precious memories.",
//     },
//     {
//       title: "Beyond Simple Copies",
//       description:
//         "Simply dragging and dropping files to an external drive isn't a comprehensive backup solution. True data protection requires systematic, automated, verified backups, and a clear, tested recovery plan. It involves strategy, technology, and ongoing management, which is where professional support becomes indispensable.",
//     },
//     {
//       title: "ITSupport.net.in: Your Fortress for Precious Data",
//       description:
//         "For over a decade, ITSupport.net.in has been the trusted name in tech support, safeguarding digital assets for clients around the globe. Our expertise in data backup and recovery is built on years of hands-on experience and a relentless commitment to security.",
//     },
//     {
//       title: "A Decade of Data Guardianship",
//       description:
//         "With <strong>10 years of dedicated tech support services</strong>, ITSupport.net.in has cultivated unparalleled expertise in protecting digital information. We've navigated countless data loss scenarios, perfecting our strategies to provide solutions that are not just effective but also resilient and future-proof. Our long-standing presence signifies our reliability and deep understanding of evolving data challenges.",
//     },
//     {
//       title: "10,000+ Customers, Global Trust",
//       description:
//         "Our reputation is built on the satisfaction of our clients. We are proud to serve <strong>10,000+ satisfied customers globally,</strong> from individual users to growing businesses. This extensive experience across diverse sectors and geographical locations underscores our ability to deliver tailored, effective, and dependable data backup and recovery solutions, earning trust one client at a time.",
//     },
//   ];

export default function InfoSection2({title, services, es=false}:{
  title:string;
  services:any[];
  es:boolean
}) {
  return (
    <section className="w-full bg-white py-16 text-gray-900">
      <div className="max-w-7xl 2xl:max-w-[1488px] mx-auto px-4 flex flex-col items-center">
       
        <h2 className="max-w-3xl mx-auto text-center text-3xl md:text-4xl font-bold mb-6 leading-tight">
        {title}
        </h2>
        
        {/* Services Cards */}
        <div className={`grid grid-cols-1 ${services.length>2 ? "md:grid-cols-3" : "md:grid-cols-2"}  gap-8 w-full`}>
          {services.map((s, idx) => (
            <div key={s.title} className="relative bg-white rounded-2xl shadow-lg p-8 flex w-full flex-col min-h-[370px] max-w-lg mx-auto group hover:translate-y-[-20px] hover:bg-gradient-to-br hover:from-sky-50 hover:to-white transition-all duration-500">
              
              <div className="mt-8 mb-6 font-bold text-xl group-hover:text-blue-700">{s.title}</div>

              {/* <p className="text-gray-600  mb-2">{s.description}</p> */}
              <p className="text-gray-600 mb-2" dangerouslySetInnerHTML={{ __html: s.description }} />

                {
                    s.issues
                    &&
                    <>
                      {
                        es
                        ?
                        <div className="mb-6">
                    {
                        s.issues[0].options.map((item:any, index:number)=>{
                            return(
                                <div key={index} className="flex flex-col mt-1">
                                    <p className="text-base font-bold text-gray-900">{item.title}</p>
                                    <div className="text-sm text-gray-800 flex">
                                        <LucideCheckCircle size={20} className="text-green-600 mr-1 min-w-[20px]" /> {item.desc}
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                    :
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
                    </>
                    
                }
              
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
