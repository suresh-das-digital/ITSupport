import { DatabaseBackup, HardDrive, HardDriveDownload } from 'lucide-react';
import React from 'react';

type Service = {
  title: string;
  icon: any;
  iconcolor: string;
  description: React.ReactNode;
};

// Card component
const ServiceCard = React.memo(
  ({ icon, title, description, iconcolor }: Service) => (
    <article
      className="bg-white border-[0.5px] border-gray-300 shadow-xl rounded-xl p-6 flex flex-col items-start hover:scale-105 focus:scale-105 transition-transform duration-300 will-change-transform mt-2 group"
      tabIndex={0}
      aria-label={`Service: ${title}`}
    >
      <div
        style={{color: iconcolor.replace("text-","")}}
        className={`w-14 h-14 flex items-center justify-center rounded-md mb-2 bg-gradient-to-br  transition-transform duration-300 will-change-transform`}
        aria-hidden="true"
      >
        {icon}
      </div>
      <h3 className={`text-lg lg:text-xl font-semibold ${iconcolor} transition-colors duration-300 py-2`}>
        {title}
      </h3>
      <div className="text-gray-500 text-base mt-2 ">{description}</div>
    </article>
  )
);

ServiceCard.displayName = "ServiceCard";

// Main section
export default function SpecializedSection({title, services, subTitle}:{
  title:string;
  services:any[];
  subTitle?:string;
}) {
  return (
    <section
      className="py-12 px-4 xl:px-[8%] bg-purple-50 w-full flex flex-col items-center"
      aria-labelledby="core-services-title"
    >
      <div className="max-w-6xl 2xl:max-w-[1488px] mx-auto">
        <h2
          id="core-services-title"
          className="text-3xl lg:text-4xl font-bold text-center mb-3 text-black"
        >
          {/* Why Choose Our {" "} */}
          <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
          {title}
          </span>
          
        </h2>

        <p className="text-gray-700 text-lg mb-10 text-center max-w-4xl mx-auto">
            {subTitle}
          </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            var iconcolor = service.color ? `text-[${service.color}]` : "text-cyan-500";
            return(
                <ServiceCard key={index} 
                iconcolor={service.color}
                title={service.title}
                icon={service.icon}
                description={service.desc}
                />
              )
          })}
        </div>
      </div>
    </section>
  );
}
