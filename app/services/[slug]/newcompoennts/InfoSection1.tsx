import { DatabaseBackup, HardDrive, HardDriveDownload } from 'lucide-react';
import React from 'react';

type Service = {
  title: string;
  icon: any;
  color: string;
  description: React.ReactNode;
};

// const services: Service[] = [
//     {
//       icon: <DatabaseBackup size={30}/>,
//       title: "Automated Backups",
//       description: "Never worry about manual backups again.",
//       color:"group-hover:text-green-500"
//     },
//     {
//       icon: <HardDrive size={30}/>,
//       title: "Hybrid Storage",
//       description: "Cloud + local options for maximum safety.",
//       color:"group-hover:text-blue-500"
//     },
//     {
//       icon: <HardDriveDownload size={30}/>,
//       title: "Disaster Recovery",
//       description: "Fast restoration in case of emergencies.",
//       color:"group-hover:text-purple-500"
//     },
//   ]

// Card component
const ServiceCard = React.memo(
  ({ icon, title, description, color }: Service) => (
    <article
      className="bg-white border-[0.5px] border-gray-300 shadow-xl rounded-xl p-6 flex flex-col items-start hover:scale-105 focus:scale-105 transition-transform duration-300 will-change-transform mt-2 group"
      tabIndex={0}
      aria-label={`Service: ${title}`}
    >
      <div
        className={`w-14 h-14 flex items-center justify-center shadow-lg rounded-md mb-2 bg-gradient-to-br  ${color && color} transition-transform duration-300 will-change-transform`}
        aria-hidden="true"
      >
        {icon}
      </div>
      <h3 className={`text-lg lg:text-xl font-semibold text-black ${color && color} transition-colors duration-300 py-2`}>
        {title}
      </h3>
      <div className="text-gray-500 text-base mt-2 ">{description}</div>
    </article>
  )
);

ServiceCard.displayName = "ServiceCard";

// Main section
export default function InfoSection1({title, services}:{
  title:string;
  services:any[];
}) {
  return (
    <section
      className="py-12 px-4 xl:px-[8%] bg-purple-50 w-full flex flex-col items-center"
      aria-labelledby="core-services-title"
    >
      <div className="max-w-7xl 2xl:max-w-[1488px] mx-auto">
        <h2
          id="core-services-title"
          className="text-3xl lg:text-4xl font-bold text-center mb-3 text-black"
        >
          {/* Why Choose Our {" "} */}
          <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
          {title}
          </span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
