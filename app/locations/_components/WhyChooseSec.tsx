import { IoArrowForward } from "react-icons/io5";
import {
    LuClock,
    LuAward,
    LuActivity,
    LuShieldCheck,
    LuUsers,
    LuBadgeCheck,
  } from "react-icons/lu";



const features = [
    {
      icon: LuClock,
      title: "24/7 IT Support",
      description: "True 24/7 IT support — same quality across all time zones.",
      iconClass: "bg-gradient-to-tr from-blue-500 to-cyan-400 text-white",
    },
    {
      icon: LuAward,
      title: "Certified Engineers",
      description: "Certified engineers with international experience.",
      iconClass: "bg-gradient-to-tr from-purple-500 to-indigo-400 text-white",
    },
    {
      icon: LuActivity,
      title: "Proactive Monitoring",
      description:
        "Proactive monitoring to detect issues before they impact operations.",
      iconClass: "bg-gradient-to-tr from-blue-500 to-cyan-400 text-white",
    },
    {
      icon: LuShieldCheck,
      title: "Compliance Expertise",
      description:
        "Compliance expertise for GDPR, HIPAA, ISO, and industry standards.",
      iconClass: "bg-gradient-to-tr from-purple-500 to-indigo-400 text-white",
    },
    {
      icon: LuUsers,
      title: "Hybrid IT Support",
      description:
        "Remote + onsite hybrid models depending on client needs.",
      iconClass: "bg-gradient-to-r from-blue-500 to-cyan-400 text-white",
    },
    {
      icon: LuBadgeCheck,
      title: "Affordable Plans",
      description:
        "Affordable plans with no compromise on service quality.",
      iconClass: "bg-gradient-to-br from-blue-500 to-purple-500 text-white",
    },
  ];

export default function WhyChooseSec() {
  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="xl:px-[8%] 2xl:px-0 2xl:max-w-[1488px] mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-2 text-black">
        Why Choose ITSupport.net.in for  {' '}
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Global IT Services?</span>
        </h2>
        
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
        
      </div>


      <div className="w-[90vw] lg:w-full mt-14 max-w-4xl md:max-w-7xl 2xl:max-w-[1488px] mx-auto p-6 md:p-7 bg-gradient-to-r from-gray-900 to-sky-700 rounded-3xl shadow-lg flex flex-col items-center">
          <h2 className="text-white text-center text-2xl lg:text-3xl  font-bold leading-snug mb-5">
          Get Started Today
          </h2>
          <p className="text-white text-opacity-80 text-center text-lg font-normal mb-6 max-w-5xl">
          Whether you’re in <strong>New York, London, Bangalore, Sydney, Berlin, Paris, or Toronto, ITSupport.net.in </strong> keeps your business running smoothly. Contact us at 
          <strong>assist@itsupport.net.in</strong> for a free consultation and discover how we can strengthen your IT infrastructure anywhere in the world.
          </p>
          <button
            type="button"
            aria-label="Start Your Sales Transformation"
            className="mt-2 px-5 py-2 cursor-pointer bg-white rounded-xl text-blue-700 font-bold text-sm shadow hover:bg-blue-50 transition flex items-center justify-center gap-2"
          >
            <IoArrowForward size={15} />
            <span>Get Started Today</span>
            
          </button>
        </div>
    </section>
  );
}
