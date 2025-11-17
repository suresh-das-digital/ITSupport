import Typography from "@/components/ui/Typography";
import Link from "next/link";


export const locationData = [
  {
    "item": "United States",
    "flag": "/flags/united-states.svg",
    "child": [
      {
        "item": "Why businesses need IT support",
        "text": "U.S. companies demand round-the-clock uptime, strong cybersecurity, and scalable cloud solutions to keep pace with rapid digital transformation."
      },
      {
        "item": "How we help",
        "text": "We provide 24/7 help desk support, managed IT services, and proactive monitoring to protect systems and maintain business continuity."
      },
    ],
    link : "/locations/us"
  },
  {
    "item": "United Kingdom",
    "flag": "/flags/united-kingdom.svg",
    "child": [
      {
        "item": "Why businesses need IT support",
        "text": "UK organizations face strict data compliance laws (GDPR) and an increasing need for secure remote work infrastructure."
      },
      {
        "item": "How we help",
        "text": "We deliver network security, endpoint protection, and compliance-ready IT solutions, ensuring businesses meet regulatory standards."
      }
    ],
    link : "/locations/uk"
  },
  {
    "item": "India",
    "flag": "/flags/india.webp",
    "child": [
      {
        "item": "Why businesses need IT support",
        "text": "Growing startups and SMEs in India are adopting cloud migration, hybrid work models, and digital tools at high speed."
      },
      {
        "item": "How we help",
        "text": "We offer affordable, enterprise-grade IT services, including infrastructure setup, remote troubleshooting, and 24/7 service availability."
      }
    ],
    link : "/locations/in"
  },
  {
    "item": "Australia",
    "flag": "/flags/australia.svg",
    "child": [
      {
        "item": "Why businesses need IT support",
        "text": "Companies in Australia prioritize disaster recovery planning, cybersecurity defense, and cloud performance optimization."
      },
      {
        "item": "How we help",
        "text": "Our experts provide business continuity solutions, managed firewalls, and performance monitoring tailored for regional needs."
      }
    ],
    link : "/locations/au"
  },
  {
    "item": "Germany",
    "flag": "/flags/germany.svg",
    "child": [
      {
        "item": "Why businesses need IT support",
        "text": "German enterprises are known for industry automation, manufacturing tech, and high compliance requirements (ISO, GDPR)."
      },
      {
        "item": "How we help",
        "text": "We specialize in secure IT systems, network reliability, and enterprise infrastructure support to power mission-critical operations."
      }
    ],
    link : "/locations/de"
  },
  {
    "item": "France",
    "flag": "/flags/france.svg",
    "child": [
      {
        "item": "Why businesses need IT support",
        "text": "French companies require multi-language support, cybersecurity, and productivity tools to compete in global markets."
      },
      {
        "item": "How we help",
        "text": "We offer localized remote IT support, cloud collaboration solutions, and robust endpoint protection for diverse industries."
      }
    ],
    link : "/locations/fr"
  },
  {
    "item": "Canada",
    "flag": "/flags/canada.svg",
    "child": [
      {
        "item": "Why businesses need IT support",
        "text": "Canadian firms focus on cloud adoption, data protection, and IT cost efficiency while serving global clients."
      },
      {
        "item": "How we help",
        "text": "Our services include remote IT management, hybrid cloud migration, and budget-friendly service plans that scale with your business."
      }
    ],
    link : "/locations/ca"
  }
]

export function WhereWeOperate() {
  return (<>
  <section className="p-6">
    <Typography variant="h2" className="flex justify-center font-bold text-gray-900 m-4 mb-10">
      <span>Where We Operate</span>
    </Typography>
    <div className=" max-w-6xl 2xl:max-w-[1488px] grid xl:grid-cols-2 2xl:grid-cols-3 2xl:gap-10 gap-4 mx-auto">
      {
        locationData.map((item: any, i: number) => {
          return(
            <Link key={i} href={item.link}>
            <div
              
              className="
                relative 
                flex flex-col 
                rounded-lg 
                overflow-hidden 
                shadow-md 
                hover:shadow-lg 
                hover:scale-105
                transition-all 
                duration-300
                h-full
                bg-white
              "
            >

              {/* Background Image */}
              <div
                className="
                  absolute inset-0 
                  bg-contain bg-center bg-no-repeat 
                "
                style={{ backgroundImage: `url(${item.flag})` }}
              ></div>

              {/* Black Overlay */}
              <div className="absolute inset-0 bg-white/65"></div>

              {/* Content Layer */}
              <div className="relative z-10 flex flex-col w-full ">

                {/* Card Header */}
                <div className="border-b-2 border-b-white/20 p-4">
                  <span className="text-gray-900 font-bold text-xl">
                    {item.item}
                  </span>
                </div>

                {/* Child List */}
                <ul className="p-2">
                  {item.child.map((childItem: any, j: number) => (
                    <li key={j} className="flex flex-col my-1">
                      <span className="p-2 bg-white/20 text-gray-900 rounded-lg font-semibold backdrop-blur-sm">
                        {childItem.item}
                      </span>
                      <span className="p-2 text-gray-900">{childItem.text}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
            </Link>
          )
        })
      }
    </div>
  </section>
  </>)
}