// components/ExperienceExpertise.tsx

import { FiTarget } from "react-icons/fi";
import { TbUsers } from "react-icons/tb";
import { LiaCertificateSolid } from "react-icons/lia";
import { LuDollarSign, LuCircleCheckBig, LuUserCheck, LuHandshake } from "react-icons/lu";



const features = [
  {
    title: 'Global Reach, Local Expertise',
    description: 'We understand both international standards and regional business needs.',
  },
  {
    title: '24/7 Support Availability',
    description: 'We’re always available when you need us, supporting you across time zones.',
  },
  {
    title: 'Customized IT Solutions',
    description: 'Tailored IT services designed specifically for your unique business requirements.',
  },
  {
    title: 'Proactive Approach',
    description: 'We identify and prevent issues before they impact your operations.',
  },
  {
    title: 'Security-First Mindset',
    description: 'Ensuring your business data and operations stay protected from cyber threats.',
  }
];

export default function AboutWhyChoose() {
  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="xl:px-[8%] max-w-6xl 2xl:px-0 2xl:max-w-[1488px] mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-2 text-black">
        Why Choose {' '}
          <span className="bg-gradient-to-r from-cyan-500 to-sky-600 bg-clip-text text-transparent">ITSupport.net.in?</span>
        </h2>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-8 lg:mt-20">
          {features.map(({  title, description }) => (
            <div key={title} className="bg-white rounded-xl shadow-xl p-6 flex flex-col items-center border-[1px] border-black/10 hover:scale-105 hover:shadow-2xl transition-all duration-300 group">
              {/* <span className={`w-16 h-16 flex items-center justify-center rounded-xl mb-4 text-2xl bg-gradient-to-br group-hover:scale-110 transition-all duration-300 ${iconClass}`}>
                <Icon size={35}/>
              </span> */}
              <h3 className="font-semibold text-xl mb-2 text-black">{title}</h3>
              <p className="text-gray-500 text-center text-sm mt-3">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
