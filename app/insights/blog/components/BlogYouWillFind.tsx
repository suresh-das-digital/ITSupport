// components/ExperienceExpertise.tsx


import Link from "next/link";
import { LuBookOpenCheck, LuLightbulb, LuPenTool, LuTrendingUp, LuWrench } from "react-icons/lu";



  export const features = [
    {
      icon: LuLightbulb,
      title: "Expert Tips & Best Practices",
      description:
        "<p>Our posts share <strong>proven strategies</strong> to help you keep your systems running at peak performance. From <strong>optimizing network speeds</strong> to <strong>enhancing data backup processes</strong>, these tips are based on <strong>real-world experience</strong> with clients across industries.</p>",
      iconClass: "bg-gradient-to-tr from-blue-500 to-cyan-400 text-white",
    },
    {
      icon: LuTrendingUp,
      title: "Industry Updates & Trends",
      description:
        "<p>We track the latest developments in the IT services industry—covering <strong>cybersecurity threats</strong>, <strong>cloud technology advancements</strong>, <strong>networking innovations</strong>, and <strong>regulatory changes</strong> that may impact your operations.</p>",
      iconClass: "bg-gradient-to-tr from-purple-500 to-indigo-400 text-white",
    },
    {
      icon: LuBookOpenCheck,
      title: "How-To Guides & Tutorials",
      description:
        "<p>Our <strong>step-by-step guides</strong> simplify technical processes, making them accessible to both seasoned IT professionals and beginners. Whether it’s <strong>configuring firewalls</strong>, <strong>troubleshooting connectivity issues</strong>, or <strong>setting up secure remote work systems</strong>, we’ve got you covered.</p>",
      iconClass: "bg-gradient-to-tr from-blue-500 to-cyan-400 text-white",
    },
    {
      icon: LuWrench,
      title: "Troubleshooting Advice",
      description:
        "<p>When something goes wrong, you need <strong>fast, clear, and effective solutions</strong>. Our troubleshooting articles help you <strong>identify, diagnose, and resolve IT problems</strong> without unnecessary downtime.</p>",
      iconClass: "bg-gradient-to-tr from-purple-500 to-indigo-400 text-white",
    },
    {
      icon: LuPenTool,
      title: "Thought Leadership & Insights",
      description:
        "<p>We go beyond quick fixes to provide <strong>deep insights into IT strategy and innovation</strong>. These articles help decision-makers in businesses of all sizes <strong>plan long-term IT roadmaps</strong> with confidence.</p>",
      iconClass: "bg-gradient-to-tr from-blue-500 to-cyan-400 text-white",
    }
  ];
  

export default function BlogYouWillFind() {
  return (
    <section className="py-12 sm:py-20 bg-blue-50">
      <div className="xl:px-[8%] 2xl:px-0 2xl:max-w-[1488px] mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-2 text-black">
        What You’ll Find on the {' '}
          <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">ITSupport.net.in Blog</span>
        </h2>
       
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-8 lg:mt-20 mb-16">
          {features.map(({ icon: Icon, title, description, iconClass }) => (
            <div key={title} className="bg-white rounded-xl shadow-xl p-6 flex flex-col items-center border-[1px] border-black/10 hover:scale-105 hover:shadow-2xl transition-all duration-300 group">
              <span className={`w-16 h-16 flex items-center justify-center rounded-xl mb-4 text-2xl bg-gradient-to-br group-hover:scale-110 transition-all duration-300 ${iconClass}`}>
                <Icon size={35}/>
              </span>
              <h3 className="font-semibold text-xl mb-2 text-black">{title}</h3>
              <div className="text-gray-500 text-center text-sm mt-3" dangerouslySetInnerHTML={{__html:description}}/>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
