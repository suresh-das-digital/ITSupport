


// const services = [
//     {
//     title: "Tailored Backup Solutions",
//     description:
//         "One size does not fit all when it comes to data protection. We assess your unique needs to design the perfect strategy.",
//     },
//     {
//     title: "On-Premise Backup Setup",
//     description:
//         "We configure local backup solutions using external drives, NAS devices, or dedicated servers for quick access and control over your data.",
//     },
//     {
//     title: "Cloud Backup Implementation",
//     description:
//         "Leverage the power and flexibility of cloud storage (e.g., Google Drive, OneDrive, specialized backup services) for secure, off-site data replication.",
//     },
//     {
//     title: "Hybrid Backup Strategies",
//     description:
//         "For ultimate resilience, we design hybrid solutions combining local and cloud backups, offering the best of both worlds.",
//     },
//     {
//     title: "Automated Backup Configuration & Monitoring",
//     description:
//         "Manual backups are prone to human error and inconsistency. We automate the process for you.",
//     },
//     {
//     title: "Set-and-Forget Reliability",
//     description:
//         "We configure automated backup schedules, ensuring your data is regularly backed up without manual intervention.",
//     },
//     {
//     title: "Proactive Monitoring for Success",
//     description:
//         "Our team proactively monitors your backup jobs, verifying their successful completion and addressing any issues immediately, so you never have to worry.",
//     },
//     {
//     title: "Proactive Monitoring for Success",
//     description:
//         "Our team proactively monitors your backup jobs, verifying their successful completion and addressing any issues immediately, so you never have to worry.",
//     },
//     {
//     title: "Rapid Data Recovery",
//     description:
//         "In the event of data loss, quick recovery is paramount to minimize impact.",
//     },
//     {
//     title: "Disaster Recovery Planning",
//     description:
//         "We help you develop a comprehensive disaster recovery plan, outlining steps to take and resources needed to restore operations swiftly.",
//     },
//     {
//     title: "Expert Data Restoration",
//     description:
//         "Our technicians provide expert assistance in recovering lost or corrupted data from your backups, getting your systems back online with minimal downtime.",
//     },
//     {
//     title: "Data Integrity & Security",
//     description:
//         "Your data's safety is our highest priority, both during backup and recovery.",
//     },
//     {
//     title: "Encryption & Access Control",
//     description:
//         "We implement robust encryption protocols and access controls to protect your backed-up data from unauthorized access, ensuring privacy and compliance.",
//     },
//     {
//     title: "Regular Backup Verification",
//     description:
//         "We implement robust encryption protocols and access controls to protect your backed-up data from unauthorized access, ensuring privacy and compliance.",
//     },
//     {
//     title: "Data Migration & Archiving",
//     description:
//         "Managing data over its lifecycle is crucial for efficiency and compliance.",
//     },
//     {
//     title: "Seamless Data Transfers",
//     description:
//         "Whether you're upgrading hardware or moving to a new system, we ensure secure and seamless data migration with no loss.",
//     },
//     {
//     title: "Long-Term Storage Solutions",
//     description:
//         "We assist with setting up effective data archiving strategies for long-term retention requirements, ensuring accessibility when needed while optimizing storage costs.",
//     },
//     {
//     title: "24/7 Expert Assistance",
//     description:
//         "We assist with setting up effective data archiving strategies for long-term retention requirements, ensuring accessibility when needed while optimizing storage costs.",
//     },
//     {
//     title: "Always There When You Need Us",
//     description:
//         "Our remote tech support team is available around the clock, 24/7, to provide immediate assistance with any backup- or recovery-related issue, ensuring continuous protection and rapid response.",
//     },
// ];

import { LucideCheckCircle, LucideCircleCheck } from "lucide-react";

export default function InfoSection3({title, subTitle, services}:{
    title:string;
    subTitle:string;
    services:any[]
}) {
  return (
    <section className="w-full bg-blue-50 py-16 text-gray-900">
      <div className="max-w-7xl 2xl:max-w-[1488px] mx-auto px-4 flex flex-col items-center">
        
        <h2 className="max-w-7xl mx-auto text-center text-3xl md:text-4xl font-bold mb-4 leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">{title}  </span> 
        </h2>
        <p className="text-gray-600 text-lg mb-10 text-center max-w-3xl">
        {subTitle}
        </p>
        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3  gap-8 w-full">
          {services.map((s, idx) => (
            <div key={idx} className="relative bg-white rounded-2xl shadow-lg p-5 flex flex-col min-h-[70px] max-w-lg mx-auto group hover:scale-105 hover:bg-gradient-to-br hover:from-teal-100 hover:to-white transition-all duration-500">
              
              <div className="mt-8 mb-6 font-bold text-xl group-hover:text-blue-700">{s.title}</div>

              <p className="text-gray-600 mb-2" dangerouslySetInnerHTML={{ __html: s.description }} />
              {
                    s.issues
                    &&
                    <div className="mb-6">
                    {
                        s.issues[0].options?.map((item:any, index:number)=>{
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
                }
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
