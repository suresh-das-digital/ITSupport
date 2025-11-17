// components/ExperienceExpertise.tsx

import { FiTarget } from "react-icons/fi";
import { TbUsers } from "react-icons/tb";
import { LiaCertificateSolid } from "react-icons/lia";
import { 
  LuMonitorCheck, 
  LuNetwork, 
  LuShieldCheck, 
  LuCloud, 
  LuHeadphones, 
  LuLightbulb 
} from "react-icons/lu";



const features = [
  {
    icon: LuMonitorCheck,
    title: 'Managed IT Services',
    description: 'Proactive monitoring, maintenance, and issue resolution to ensure smooth IT operations.',
    iconClass: 'bg-gradient-to-tr from-blue-500 to-cyan-400 text-white',
  },
  {
    icon: LuNetwork,
    title: 'Network Design & Implementation',
    description: 'High-performance and secure LAN, WAN, and VPN setup tailored for business scalability.',
    iconClass: 'bg-gradient-to-tr from-purple-500 to-indigo-400 text-white',
  },
  {
    icon: LuShieldCheck,
    title: 'Cybersecurity Services',
    description: 'Advanced threat prevention, data security, and compliance readiness for businesses.',
    iconClass: 'bg-gradient-to-tr from-blue-500 to-cyan-400 text-white',
  },
  {
    icon: LuCloud,
    title: 'Cloud Solutions',
    description: 'Cloud migration, optimized hosting, and hybrid cloud management for seamless operations.',
    iconClass: 'bg-gradient-to-tr from-purple-500 to-indigo-400 text-white',
  },
  {
    icon: LuHeadphones,
    title: 'Help Desk Support',
    description: '24/7 expert technical assistance with fast response and issue resolution.',
    iconClass: 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white',
  },
  {
    icon: LuLightbulb,
    title: 'IT Consulting',
    description: 'Strategic technology guidance to improve efficiency, scalability, and long-term success.',
    iconClass: 'bg-gradient-to-br from-blue-500 to-purple-500 text-white',
  }
];

export default function OurExperties() {
  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="xl:px-[8%] 2xl:px-0 2xl:max-w-[1488px] mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-2 text-black">
        Our {' '}
          <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">Expertise</span>
        </h2>
        <p className="text-gray-500 mb-10 text-xl mt-4 text-center">
        We specialize in a wide range of <strong>IT support and network solutions</strong> designed to cater to both <strong>B2B and B2C clients:</strong>
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-8 lg:mt-20 mb-16">
          {features.map(({ icon: Icon, title, description, iconClass }) => (
            <div key={title} className="bg-white rounded-xl shadow-xl p-6 flex flex-col items-center border-[1px] border-black/10 hover:scale-105 hover:shadow-2xl transition-all duration-300 group">
              <span className={`w-16 h-16 flex items-center justify-center rounded-xl mb-4 text-2xl bg-gradient-to-br group-hover:scale-110 transition-all duration-300 ${iconClass}`}>
                <Icon size={35}/>
              </span>
              <h3 className="font-semibold text-xl mb-2 text-black">{title}</h3>
              <p className="text-gray-500 text-center text-sm mt-3">{description}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-500 mb-10 text-xl mt-4 text-center">
        Our <strong>certified IT professionals</strong> use the latest tools and industry best practices to ensure <strong>maximum uptime, security, and efficiency.</strong>
        </p>
      </div>
    </section>
  );
}
