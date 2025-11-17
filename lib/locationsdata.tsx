import React from "react";
import { LuBackpack, LuChartColumnIncreasing, LuClock, LuCloud, LuDatabaseBackup, LuFileCheck, LuHeadphones, LuLaptop, LuLightbulb, LuMapPin, LuNetwork, LuPrinter, LuSettings2, LuShield, LuShieldAlert } from "react-icons/lu";


// interface LocationItem {
//     slug: string;
//     meta: object;
//     schema: object;
//     heroSection: object;
//     aboutSection: object;
//     whysection: object;
//     coreSection: object;
//     whyChooseSection: object;
//     partnerSection: object;
//   }

interface LocationItem {
    slug: string;
    meta: Record<string, any>;
    schema: Record<string, any>;
    loaction: string;
    heroSection: {
      heroTitle: string;
      heroSubTitle: string;
      heroIntro: string;
      bg: string;
    };
  
    aboutSection: {
      title: string;
      deatsils: string[];
      image: string;
    };
  
    whysection: {
      title: string;
      desc: string;
      list: {
        icon: React.ReactNode;
        title: string;
        desc: string;
        color: string;
      }[];
    };
  
    coreSection: {
      title: string;
      desc: string;
      cards: {
        title: string;
        desc: string;
        color: string;
        icon: React.ReactNode;
      }[];
    };
  
    whyChooseSection: {
      title: string;
      desc: string;
      cards: {
        icon: React.ReactNode;
        color: string;
        desc: string;
      }[];
    };
  
    partnerSection: {
      title: string;
      subTitle: string;
      desc: string;
      contacts: string;
    };
  }

const locationData:LocationItem[] = [
    {
        "slug": "us",
        "meta": {},
        "schema": {},
        "loaction":"United States",
        "heroSection": {
          "heroTitle": "IT Support Services in the United States",
          "heroSubTitle": "Complete Technology Solutions for U.S. Businesses",
          "heroIntro": "Businesses across the United States rely on secure, efficient IT systems to stay competitive. With rising cybersecurity threats, compliance demands, and remote work requirements, having a trusted IT partner is essential. ITSupport.net.in provides 24/7 IT services tailored for U.S. companies, ensuring smooth operations, reduced downtime, and enhanced security.",
          "bg": "from-blue-900 to-slate-800"
        },
      
        "aboutSection": {
          "title": "Trusted IT Support for U.S. Businesses",
          "deatsils": [
            "Businesses across the United States — from startups to large enterprises — rely on secure, efficient IT systems to stay competitive.",
            "With cybersecurity threats, compliance requirements, and remote work demands increasing, professional IT support is essential.",
            "ITSupport.net.in delivers end-to-end IT services including managed support, emergency troubleshooting, and strategic consulting to ensure smooth and secure business operations."
          ],
          "image": "/flags/united-states.svg"
        },
      
        "whysection": {
          "title": "Why U.S. Companies Need Professional IT Support",
          "desc": "Modern businesses in the United States face increasing technology challenges. Expert IT support ensures security, compliance, efficiency, and seamless operations across locations.",
          "list": [
            {
              "icon": <LuShield size={30} />,
              "title": "Rising Cybersecurity Risks",
              "desc": "Ransomware, phishing, and data breaches can disrupt operations and result in major financial loss.",
              "color": "from-sky-600 to-blue-500"
            },
            {
              "icon": <LuFileCheck size={30} />,
              "title": "Strict Compliance Requirements",
              "desc": "Industries must comply with HIPAA, SOC 2, PCI DSS and other U.S. regulatory standards.",
              "color": "from-indigo-500 to-purple-500"
            },
            {
              "icon": <LuLaptop size={30} />,
              "title": "Hybrid & Remote Work",
              "desc": "Teams need secure, uninterrupted access to networks and data from anywhere.",
              "color": "from-emerald-500 to-green-600"
            },
            {
              "icon": <LuChartColumnIncreasing size={30} />,
              "title": "Cost & Productivity Optimization",
              "desc": "Outsourced IT support reduces overhead and improves operational efficiency.",
              "color": "from-orange-500 to-red-500"
            },
            {
              "icon": <LuClock size={30} />,
              "title": "24/7 Availability",
              "desc": "Round-the-clock monitoring and support ensure uptime for U.S. businesses.",
              "color": "from-yellow-500 to-amber-600"
            }
          ]
        },
      
        "coreSection": {
          "title": "Our Core IT Support Services in the U.S.",
          "desc": "We provide comprehensive IT services designed to support U.S. businesses with reliability, scalability, and security.",
          "cards": [
            {
              "title": "Managed IT Services",
              "desc": "Proactive monitoring, maintenance, and patching to prevent downtime and keep systems optimized.",
              "color": "from-blue-600 to-indigo-600",
              "icon": <LuSettings2 size={28} />
            },
            {
              "title": "24/7 Help Desk & Remote Support",
              "desc": "Instant assistance for system crashes, errors, and technical issues to maintain productivity.",
              "color": "from-green-600 to-emerald-600",
              "icon": <LuHeadphones size={28} />
            },
            {
              "title": "Cybersecurity & Data Protection",
              "desc": "Firewalls, antivirus, intrusion detection, and audits to protect against threats and ensure compliance.",
              "color": "from-red-600 to-rose-600",
              "icon": <LuShieldAlert size={28} />
            },
            {
              "title": "Cloud Services & Migration",
              "desc": "Migration and management for Microsoft 365, Google Workspace, AWS, and more.",
              "color": "from-purple-600 to-fuchsia-600",
              "icon": <LuCloud size={28} />
            },
            {
              "title": "Network Setup & Optimization",
              "desc": "Reliable, high-performance networks designed for small offices and large enterprises.",
              "color": "from-teal-600 to-cyan-600",
              "icon": <LuNetwork size={28} />
            },
            {
              "title": "Data Backup & Disaster Recovery",
              "desc": "Automated backup solutions with rapid recovery to prevent data loss.",
              "color": "from-amber-600 to-yellow-600",
              "icon": <LuDatabaseBackup size={28} />
            },
            {
              "title": "Printer & Peripheral Support",
              "desc": "Setup, driver installation, troubleshooting, and repair for office devices.",
              "color": "from-slate-600 to-gray-700",
              "icon": <LuPrinter size={28} />
            },
            {
              "title": "IT Consulting & Strategy",
              "desc": "Technology planning, budgeting, and strategy aligned with business goals.",
              "color": "from-indigo-600 to-blue-700",
              "icon": <LuLightbulb size={28} />
            },
            {
              "title": "Onsite IT Support (Major U.S. Cities)",
              "desc": "Technicians available in New York, Los Angeles, Chicago, Houston, and more.",
              "color": "from-neutral-600 to-stone-700",
              "icon": <LuMapPin size={28} />
            }
          ]
        },
      
        "whyChooseSection": {
          "title": "Why Choose ITSupport.net.in?",
          "desc": "With over 15 years of supporting U.S. businesses, we deliver reliable, secure, and cost-effective IT solutions.",
          "cards": [
            {
              "icon": <LuClock size={30} />,
              "color": "from-blue-500 to-sky-500",
              "desc": "Certified engineers available 24/7 for remote and onsite support."
            },
            {
              "icon": <LuChartColumnIncreasing size={30} />,
              "color": "from-green-500 to-teal-500",
              "desc": "Affordable, scalable plans for SMBs and enterprises."
            },
            {
              "icon": <LuBackpack size={30} />,
              "color": "from-purple-500 to-pink-500",
              "desc": "Expertise in compliance-heavy industries like healthcare, finance, and retail."
            },
            {
              "icon": <LuLightbulb size={30} />,
              "color": "from-orange-500 to-red-500",
              "desc": "Fast response and efficient problem resolution with minimal downtime."
            },
            {
              "icon": <LuMapPin size={30} />,
              "color": "from-amber-500 to-yellow-500",
              "desc": "Proven service excellence with clients across major U.S. regions."
            }
          ]
        },
      
        "partnerSection": {
          "title": "Partner With a Trusted IT Provider",
          "subTitle": "Reliable, Scalable IT Solutions for U.S. Businesses",
          "desc": "From small businesses in Austin to large enterprises in San Francisco, ITSupport.net.in provides dependable, cost-effective IT services tailored to your needs.",
          "contacts": "assist@itsupport.net.in"
        }
      },
      {
        "slug": "uk",
        "meta": {},
        "schema": {},
        "loaction": "United Kingdom",
      
        "heroSection": {
          "heroTitle": "IT Support Services in the United Kingdom",
          "heroSubTitle": "Reliable Technology Solutions for UK Businesses",
          "heroIntro":
            "From London’s financial sector to Manchester’s startups and Birmingham’s industrial hubs, UK businesses depend on secure and efficient IT systems to stay compliant, productive, and competitive. ITSupport.net.in provides 24/7 IT services tailored for UK companies, ensuring seamless operations, enhanced security, and zero disruption.",
          "bg": "from-blue-900 to-slate-800"
        },
      
        "aboutSection": {
          "title": "Trusted IT Support for UK Businesses",
          "deatsils": [
            "Businesses across the United Kingdom rely on strong IT foundations to maintain productivity, meet compliance standards, and support hybrid work environments.",
            "With rising cybersecurity threats, GDPR regulations, and complex technology needs, professional IT support has become essential for companies of all sizes.",
            "ITSupport.net.in delivers managed IT services, rapid troubleshooting, and strategic planning to keep UK businesses secure, compliant, and future-ready."
          ],
          "image": "/flags/united-kingdom.svg"
        },
      
        "whysection": {
          "title": "Why UK Companies Need Professional IT Support",
          "desc":
            "UK businesses face strict compliance rules, rising cyber threats, and evolving hybrid work environments. Expert IT support ensures security, uptime, and reliable operations across locations.",
          "list": [
            {
              "icon": <LuShield size={30} />,
              "title": "Cybersecurity Risks on the Rise",
              "desc":
                "Phishing, ransomware, and insider threats continue to impact UK businesses across industries.",
              "color": "from-sky-600 to-blue-500"
            },
            {
              "icon": <LuFileCheck size={30} />,
              "title": "Strict Compliance Regulations",
              "desc":
                "GDPR and ISO standards require strong data governance and secure handling of business information.",
              "color": "from-indigo-500 to-purple-500"
            },
            {
              "icon": <LuLaptop size={30} />,
              "title": "Hybrid & Remote Workforce",
              "desc":
                "Employees need secure, reliable access to company systems from any location.",
              "color": "from-emerald-500 to-green-600"
            },
            {
              "icon": <LuChartColumnIncreasing size={30} />,
              "title": "Cost Reduction & Improved Uptime",
              "desc":
                "Outsourcing IT helps businesses reduce operations cost while improving system performance.",
              "color": "from-orange-500 to-red-500"
            },
            {
              "icon": <LuClock size={30} />,
              "title": "24/7 Availability for Global Operations",
              "desc":
                "Round-the-clock support ensures uninterrupted operations for businesses serving international clients.",
              "color": "from-yellow-500 to-amber-600"
            }
          ]
        },
      
        "coreSection": {
          "title": "Our Core IT Support Services in the UK",
          "desc":
            "We offer comprehensive IT services designed to support UK businesses with reliability, compliance, and security.",
          "cards": [
            {
              "title": "Managed IT Services",
              "desc":
                "Proactive monitoring and routine maintenance to prevent downtime and keep networks, servers, and endpoints optimized.",
              "color": "from-blue-600 to-indigo-600",
              "icon": <LuSettings2 size={28} />
            },
            {
              "title": "24/7 Help Desk & Remote Support",
              "desc":
                "Instant technical assistance to ensure staff remain productive, whether onsite or remote.",
              "color": "from-green-600 to-emerald-600",
              "icon": <LuHeadphones size={28} />
            },
            {
              "title": "Cybersecurity & Compliance",
              "desc":
                "Threat monitoring, firewall setup, and compliance audits to protect sensitive data and meet GDPR standards.",
              "color": "from-red-600 to-rose-600",
              "icon": <LuShieldAlert size={28} />
            },
            {
              "title": "Cloud Solutions & Migration",
              "desc":
                "Smooth migration to Microsoft 365, Google Workspace, AWS, or Azure with secure configuration and support.",
              "color": "from-purple-600 to-fuchsia-600",
              "icon": <LuCloud size={28} />
            },
            {
              "title": "Network Design & Optimization",
              "desc":
                "High-performance networks for single offices or multi-site operations, built for speed and scalability.",
              "color": "from-teal-600 to-cyan-600",
              "icon": <LuNetwork size={28} />
            },
            {
              "title": "Data Backup & Disaster Recovery",
              "desc":
                "Automated data protection and rapid recovery systems to minimize downtime during disruptions.",
              "color": "from-amber-600 to-yellow-600",
              "icon": <LuDatabaseBackup size={28} />
            },
            {
              "title": "Printer & Peripheral Support",
              "desc":
                "Complete setup, driver configuration, and troubleshooting for printers and office devices.",
              "color": "from-slate-600 to-gray-700",
              "icon": <LuPrinter size={28} />
            },
            {
              "title": "IT Consulting & Strategic Planning",
              "desc":
                "Expert advice for IT budgeting, upgrades, and long-term technology planning.",
              "color": "from-indigo-600 to-blue-700",
              "icon": <LuLightbulb size={28} />
            },
            {
              "title": "Onsite IT Support (Major UK Cities)",
              "desc":
                "Hands-on technical support available in London, Manchester, Birmingham, Leeds, and more.",
              "color": "from-neutral-600 to-stone-700",
              "icon": <LuMapPin size={28} />
            }
          ]
        },
      
        "whyChooseSection": {
          "title": "Why Choose ITSupport.net.in?",
          "desc":
            "With over 15 years of experience supporting UK businesses, we provide dependable, secure, and cost-effective IT solutions.",
          "cards": [
            {
              "icon": <LuClock size={30} />,
              "color": "from-blue-500 to-sky-500",
              "desc": "Certified IT engineers available 24/7 for remote and onsite support."
            },
            {
              "icon": <LuChartColumnIncreasing size={30} />,
              "color": "from-green-500 to-teal-500",
              "desc": "Affordable and scalable plans for SMEs and large enterprises."
            },
            {
              "icon": <LuBackpack size={30} />,
              "color": "from-purple-500 to-pink-500",
              "desc":
                "Industry-specific expertise for finance, healthcare, retail, and manufacturing sectors."
            },
            {
              "icon": <LuLightbulb size={30} />,
              "color": "from-orange-500 to-red-500",
              "desc":
                "Fast response and efficient issue resolution with minimal business disruption."
            },
            {
              "icon": <LuMapPin size={30} />,
              "color": "from-amber-500 to-yellow-500",
              "desc":
                "A proven track record supporting businesses across major UK regions."
            }
          ]
        },
      
        "partnerSection": {
          "title": "Your Trusted IT Partner in the UK",
          "subTitle": "Reliable, Secure & Scalable IT Solutions for UK Businesses",
          "desc":
            "From London startups to nationwide enterprises, ITSupport.net.in delivers dependable, cost-effective IT support tailored to your operational needs.",
          "contacts": "assist@itsupport.net.in"
        }
      },
      {
        "slug": "in",
        "meta": {},
        "schema": {},
        "loaction": "India",
      
        "heroSection": {
          "heroTitle": "IT Support Services in India",
          "heroSubTitle": "End-to-End IT Solutions for Indian Businesses",
          "heroIntro":
            "From Bangalore’s tech startups and Hyderabad’s IT hubs to Mumbai’s financial institutions and Delhi’s enterprises, Indian businesses are adopting technology at a rapid pace. ITSupport.net.in delivers comprehensive IT services to keep your systems efficient, secure, and future-ready—whether you need daily IT management, 24/7 help desk support, or strategic consulting.",
          "bg": "from-blue-900 to-slate-800"
        },
      
        "aboutSection": {
          "title": "Reliable IT Support for Indian Businesses",
          "deatsils": [
            "Businesses across India depend on strong IT foundations to support growth, digital transformation, and hybrid work environments.",
            "With increasing cybersecurity threats, compliance requirements, and infrastructure complexity, professional IT support is essential for operational continuity.",
            "ITSupport.net.in provides end-to-end IT services including managed IT, cybersecurity, cloud setup, and onsite support for Indian enterprises."
          ],
          "image": "/flags/india.webp"
        },
      
        "whysection": {
          "title": "Why Indian Businesses Need Professional IT Support",
          "desc":
            "Indian companies face rapid digitization, evolving cyber threats, and unique infrastructure demands. Expert IT support ensures security, compliance, scalability, and uninterrupted operations.",
          "list": [
            {
              "icon": <LuShield size={30} />,
              "title": "Growing Cybersecurity Concerns",
              "desc":
                "Ransomware, phishing, and insider threats increasingly target SMBs and large enterprises across India.",
              "color": "from-sky-600 to-blue-500"
            },
            {
              "icon": <LuFileCheck size={30} />,
              "title": "Industry-Specific Compliance",
              "desc":
                "BFSI, healthcare, and ITES sectors must protect sensitive financial and personal data with strong compliance practices.",
              "color": "from-indigo-500 to-purple-500"
            },
            {
              "icon": <LuLaptop size={30} />,
              "title": "Complex Hybrid IT Environments",
              "desc":
                "Indian businesses increasingly use a mix of cloud and on-premise solutions, requiring expert management.",
              "color": "from-emerald-500 to-green-600"
            },
            {
              "icon": <LuChartColumnIncreasing size={30} />,
              "title": "Cost Efficiency & Scalability",
              "desc":
                "Outsourced IT support helps businesses grow faster while reducing operational overhead.",
              "color": "from-orange-500 to-red-500"
            },
            {
              "icon": <LuClock size={30} />,
              "title": "Support for Remote & Flexible Work",
              "desc":
                "Employees need secure and reliable access to systems from anywhere across India.",
              "color": "from-yellow-500 to-amber-600"
            }
          ]
        },
      
        "coreSection": {
          "title": "Our Core IT Support Services in India",
          "desc":
            "We deliver complete IT solutions to support Indian businesses with reliability, security, and scalable growth.",
          "cards": [
            {
              "title": "Managed IT Services",
              "desc":
                "Continuous monitoring, updates, and optimization of servers, networks, and endpoints to prevent downtime.",
              "color": "from-blue-600 to-indigo-600",
              "icon": <LuSettings2 size={28} />
            },
            {
              "title": "24/7 Remote Help Desk",
              "desc":
                "Instant troubleshooting for hardware, software, and network issues to keep employees productive.",
              "color": "from-green-600 to-emerald-600",
              "icon": <LuHeadphones size={28} />
            },
            {
              "title": "Cybersecurity & Data Protection",
              "desc":
                "Firewalls, threat detection tools, and compliance-focused security solutions to protect business data.",
              "color": "from-red-600 to-rose-600",
              "icon": <LuShieldAlert size={28} />
            },
            {
              "title": "Cloud Deployment & Migration",
              "desc":
                "Smooth and secure migration to Microsoft 365, Google Workspace, AWS, or Azure with complete management.",
              "color": "from-purple-600 to-fuchsia-600",
              "icon": <LuCloud size={28} />
            },
            {
              "title": "Network Design & Optimization",
              "desc":
                "High-performance LAN, WAN, and VPN solutions for single-office or multi-location businesses.",
              "color": "from-teal-600 to-cyan-600",
              "icon": <LuNetwork size={28} />
            },
            {
              "title": "Data Backup & Disaster Recovery",
              "desc":
                "Automated backups and fast disaster recovery plans to minimize downtime during disruptions.",
              "color": "from-amber-600 to-yellow-600",
              "icon": <LuDatabaseBackup size={28} />
            },
            {
              "title": "Printer & Peripheral Support",
              "desc":
                "Setup, driver installation, and expert troubleshooting for printers and essential office devices.",
              "color": "from-slate-600 to-gray-700",
              "icon": <LuPrinter size={28} />
            },
            {
              "title": "IT Consulting & Strategic Planning",
              "desc":
                "Technology roadmap planning, IT budgeting, and long-term infrastructure strategy tailored to your goals.",
              "color": "from-indigo-600 to-blue-700",
              "icon": <LuLightbulb size={28} />
            },
            {
              "title": "Onsite IT Support (Major Indian Cities)",
              "desc":
                "Technical assistance available in Bangalore, Hyderabad, Mumbai, Delhi NCR, Pune, and Chennai, supported by 24/7 remote help.",
              "color": "from-neutral-600 to-stone-700",
              "icon": <LuMapPin size={28} />
            }
          ]
        },
      
        "whyChooseSection": {
          "title": "Why Choose ITSupport.net.in?",
          "desc":
            "With over 15 years of experience supporting Indian businesses, we provide secure, scalable, and cost-effective IT solutions.",
          "cards": [
            {
              "icon": <LuClock size={30} />,
              "color": "from-blue-500 to-sky-500",
              "desc": "Dedicated IT engineers available 24/7 for remote and onsite support."
            },
            {
              "icon": <LuChartColumnIncreasing size={30} />,
              "color": "from-green-500 to-teal-500",
              "desc": "Cost-effective and scalable plans for startups, SMEs, and enterprises."
            },
            {
              "icon": <LuBackpack size={30} />,
              "color": "from-purple-500 to-pink-500",
              "desc":
                "Expertise across IT, BFSI, healthcare, manufacturing, and other major Indian sectors."
            },
            {
              "icon": <LuLightbulb size={30} />,
              "color": "from-orange-500 to-red-500",
              "desc": "Quick response times and fast issue resolution with minimal downtime."
            },
            {
              "icon": <LuMapPin size={30} />,
              "color": "from-amber-500 to-yellow-500",
              "desc": "A trusted IT partner for businesses across India for more than 15 years."
            }
          ]
        },
      
        "partnerSection": {
          "title": "Your Reliable IT Partner in India",
          "subTitle": "Secure, Scalable IT Solutions for Indian Businesses",
          "desc":
            "From fast-growing startups to nationwide enterprises, ITSupport.net.in provides dependable, efficient, and secure IT services tailored to India's unique business environment.",
          "contacts": "assist@itsupport.net.in"
        }
      },
      {
        "slug": "au",
        "meta": {},
        "schema": {},
        "loaction": "Australia",
      
        "heroSection": {
          "heroTitle": "IT Support Services in Australia",
          "heroSubTitle": "Reliable IT Solutions for Australian Businesses",
          "heroIntro":
            "From Sydney’s financial district and Melbourne’s corporate hubs to Brisbane’s SMEs and Perth’s mining enterprises, Australian businesses are adopting advanced digital technologies to remain competitive. ITSupport.net.in provides end-to-end IT support designed to keep your systems fast, secure, and future-ready—whether you need 24/7 help desk support, cloud migration, or full infrastructure management.",
          "bg": "from-blue-900 to-slate-800"
        },
      
        "aboutSection": {
          "title": "Trusted IT Support for Australian Businesses",
          "deatsils": [
            "Businesses across Australia rely on secure and efficient IT systems to maintain productivity and support nationwide operations.",
            "With rising cyber threats, strict data regulations, and the need for seamless remote work, professional IT support has become essential.",
            "ITSupport.net.in provides comprehensive IT services including managed IT, cybersecurity, network optimization, and onsite support tailored for Australian companies."
          ],
          "image": "/flags/australia.svg"
        },
      
        "whysection": {
          "title": "Why Australian Businesses Need Professional IT Support",
          "desc":
            "Australia’s rapidly evolving digital landscape demands secure, scalable, and compliant IT environments. Professional IT support helps businesses counter cyber risks, meet regulatory requirements, and operate efficiently across locations.",
          "list": [
            {
              "icon": <LuShield size={30} />,
              "title": "Rising Cybersecurity Threats",
              "desc":
                "Ransomware and phishing attacks are increasing sharply across Australian SMBs and enterprises.",
              "color": "from-sky-600 to-blue-500"
            },
            {
              "icon": <LuFileCheck size={30} />,
              "title": "Strict Data Protection Requirements",
              "desc":
                "Businesses must comply with the Australian Privacy Principles (APPs) and sector-specific data regulations.",
              "color": "from-indigo-500 to-purple-500"
            },
            {
              "icon": <LuLaptop size={30} />,
              "title": "Geographically Distributed Operations",
              "desc":
                "Multi-office setups across Australian regions require secure, reliable, and unified network connectivity.",
              "color": "from-emerald-500 to-green-600"
            },
            {
              "icon": <LuChartColumnIncreasing size={30} />,
              "title": "Managing Remote & Hybrid Workforces",
              "desc":
                "Teams need secure access, collaboration tools, and uninterrupted network performance from anywhere.",
              "color": "from-orange-500 to-red-500"
            },
            {
              "icon": <LuClock size={30} />,
              "title": "High IT Operating Costs",
              "desc":
                "Outsourcing IT support helps reduce costs while improving reliability, scalability, and response times.",
              "color": "from-yellow-500 to-amber-600"
            }
          ]
        },
      
        "coreSection": {
          "title": "Our Core IT Support Services in Australia",
          "desc":
            "We deliver end-to-end IT services for Australian businesses, ensuring reliable systems, enhanced security, and scalable infrastructure.",
          "cards": [
            {
              "title": "Managed IT Services",
              "desc":
                "Proactive management of servers, workstations, and networks with round-the-clock monitoring to prevent downtime.",
              "color": "from-blue-600 to-indigo-600",
              "icon": <LuSettings2 size={28} />
            },
            {
              "title": "24/7 Remote Help Desk",
              "desc":
                "Instant troubleshooting for software, hardware, and connectivity issues to maintain full productivity.",
              "color": "from-green-600 to-emerald-600",
              "icon": <LuHeadphones size={28} />
            },
            {
              "title": "Cybersecurity & Compliance",
              "desc":
                "Next-generation firewalls, endpoint security, threat detection, and compliance audits for complete protection.",
              "color": "from-red-600 to-rose-600",
              "icon": <LuShieldAlert size={28} />
            },
            {
              "title": "Cloud Solutions & Migration",
              "desc":
                "Migration and optimization for Microsoft 365, AWS, Google Workspace, or Azure with ongoing performance tuning.",
              "color": "from-purple-600 to-fuchsia-600",
              "icon": <LuCloud size={28} />
            },
            {
              "title": "Network Infrastructure & VPN Setup",
              "desc":
                "High-performance and secure networks designed for single or multi-location businesses across Australia.",
              "color": "from-teal-600 to-cyan-600",
              "icon": <LuNetwork size={28} />
            },
            {
              "title": "Backup & Disaster Recovery",
              "desc":
                "Automated data backups with rapid recovery strategies to minimize downtime during failures or cyber incidents.",
              "color": "from-amber-600 to-yellow-600",
              "icon": <LuDatabaseBackup size={28} />
            },
            {
              "title": "Printer & Device Support",
              "desc":
                "Setup, troubleshooting, and maintenance of printers, scanners, and essential office equipment.",
              "color": "from-slate-600 to-gray-700",
              "icon": <LuPrinter size={28} />
            },
            {
              "title": "IT Consulting & Strategy",
              "desc":
                "Expert guidance on IT investments, upgrades, and digital transformation to support long-term business goals.",
              "color": "from-indigo-600 to-blue-700",
              "icon": <LuLightbulb size={28} />
            },
            {
              "title": "Onsite IT Support (Major Cities)",
              "desc":
                "Available in Sydney, Melbourne, Brisbane, Perth, and Adelaide, supported by 24/7 remote assistance.",
              "color": "from-neutral-600 to-stone-700",
              "icon": <LuMapPin size={28} />
            }
          ]
        },
      
        "whyChooseSection": {
          "title": "Why Choose ITSupport.net.in?",
          "desc":
            "We combine global IT expertise with deep Australian market experience, delivering secure, scalable, and cost-effective solutions.",
          "cards": [
            {
              "icon": <LuClock size={30} />,
              "color": "from-blue-500 to-sky-500",
              "desc": "Dedicated IT teams available 24/7 for remote and onsite support."
            },
            {
              "icon": <LuChartColumnIncreasing size={30} />,
              "color": "from-green-500 to-teal-500",
              "desc": "Affordable service plans tailored for SMEs and large enterprises."
            },
            {
              "icon": <LuBackpack size={30} />,
              "color": "from-purple-500 to-pink-500",
              "desc":
                "Expertise across finance, healthcare, education, mining, and retail sectors."
            },
            {
              "icon": <LuLightbulb size={30} />,
              "color": "from-orange-500 to-red-500",
              "desc": "Fast issue resolution and proactive monitoring to reduce downtime."
            },
            {
              "icon": <LuMapPin size={30} />,
              "color": "from-amber-500 to-yellow-500",
              "desc":
                "A trusted partner for businesses across Australia's major cities and regions."
            }
          ]
        },
      
        "partnerSection": {
          "title": "Your Reliable IT Partner in Australia",
          "subTitle": "Secure, Scalable & Future-Ready IT Solutions",
          "desc":
            "Whether you're a startup in Brisbane, an enterprise in Sydney, or an organization with nationwide offices, ITSupport.net.in delivers dependable and efficient IT services tailored to your needs.",
          "contacts": "assist@itsupport.net.in"
        }
      },
      {
        "slug": "de",
        "meta": {},
        "schema": {},
        "loaction": "Germany",
      
        "heroSection": {
          "heroTitle": "IT Support Services in Germany",
          "heroSubTitle": "Reliable IT Solutions for German Businesses",
          "heroIntro":
            "From Berlin’s start-up ecosystem and Frankfurt’s financial institutions to Munich’s industrial manufacturers and Hamburg’s logistics leaders, German businesses are rapidly modernizing their IT infrastructure. With strict data privacy laws, increasing cyber threats, and the demand for high operational efficiency, professional IT support is essential to remain competitive. ITSupport.net.in delivers secure, compliant, and reliable IT services tailored to German businesses.",
          "bg": "from-blue-900 to-slate-800"
        },
      
        "aboutSection": {
          "title": "Trusted IT Support for German Businesses",
          "deatsils": [
            "Companies across Germany depend on secure, compliant, and high-performance IT systems to support Industry 4.0 adoption and digital transformation.",
            "Strict data privacy laws such as GDPR and BDSG, along with rising cyberattacks, demand advanced IT governance and security.",
            "ITSupport.net.in provides end-to-end IT solutions including cybersecurity, cloud deployment, infrastructure management, and 24/7 help desk support tailored to German business environments."
          ],
          "image": "/flags/germany.svg"
        },
      
        "whysection": {
          "title": "Why German Businesses Need Professional IT Support",
          "desc":
            "Germany’s technology-driven economy requires secure, compliant, and efficient IT systems. Professional IT support ensures uptime, compliance, scalability, and protection against growing cyber threats.",
          "list": [
            {
              "icon": <LuShield size={30} />,
              "title": "Strict Data Protection Laws (GDPR & BDSG)",
              "desc":
                "Non-compliance with Germany’s data privacy regulations can lead to severe penalties and legal risks.",
              "color": "from-sky-600 to-blue-500"
            },
            {
              "icon": <LuFileCheck size={30} />,
              "title": "Rapid Digital Transformation",
              "desc":
                "Industry 4.0, automation, and AI adoption require stable, scalable, and modernized IT infrastructures.",
              "color": "from-indigo-500 to-purple-500"
            },
            {
              "icon": <LuLaptop size={30} />,
              "title": "Rising Cybersecurity Threats",
              "desc":
                "Manufacturing, logistics, and finance sectors in Germany face increasing ransomware and targeted attacks.",
              "color": "from-emerald-500 to-green-600"
            },
            {
              "icon": <LuChartColumnIncreasing size={30} />,
              "title": "High IT Operating Costs",
              "desc":
                "Outsourcing IT helps businesses reduce operational expenses while improving system performance.",
              "color": "from-orange-500 to-red-500"
            },
            {
              "icon": <LuClock size={30} />,
              "title": "Secure Remote Workforce Integration",
              "desc":
                "Modern German businesses require secure VPN, remote access, and collaboration tools for distributed teams.",
              "color": "from-yellow-500 to-amber-600"
            }
          ]
        },
      
        "coreSection": {
          "title": "Our Core IT Support Services in Germany",
          "desc":
            "We provide comprehensive IT services for German enterprises, ensuring compliance, security, and seamless performance across all business operations.",
          "cards": [
            {
              "title": "Managed IT Services",
              "desc":
                "Comprehensive monitoring and maintenance of servers, systems, and networks to prevent downtime and improve availability.",
              "color": "from-blue-600 to-indigo-600",
              "icon": <LuSettings2 size={28} />
            },
            {
              "title": "24/7 Remote Help Desk",
              "desc":
                "Quick resolution of software, hardware, and connectivity issues to ensure uninterrupted employee productivity.",
              "color": "from-green-600 to-emerald-600",
              "icon": <LuHeadphones size={28} />
            },
            {
              "title": "Cybersecurity & Compliance",
              "desc":
                "Advanced firewalls, intrusion detection, penetration testing, and GDPR-compliant security frameworks.",
              "color": "from-red-600 to-rose-600",
              "icon": <LuShieldAlert size={28} />
            },
            {
              "title": "Cloud Solutions & Migration",
              "desc":
                "Seamless migration to AWS, Azure, Microsoft 365, or Google Workspace with secure configurations and optimization.",
              "color": "from-purple-600 to-fuchsia-600",
              "icon": <LuCloud size={28} />
            },
            {
              "title": "Network Infrastructure & VPN Solutions",
              "desc":
                "Secure and scalable LAN/WAN design, VPN deployment, and wireless optimization for distributed operations.",
              "color": "from-teal-600 to-cyan-600",
              "icon": <LuNetwork size={28} />
            },
            {
              "title": "Backup & Disaster Recovery",
              "desc":
                "Automated backups, reliable recovery plans, and data integrity solutions for critical business continuity.",
              "color": "from-amber-600 to-yellow-600",
              "icon": <LuDatabaseBackup size={28} />
            },
            {
              "title": "Printer & Device Support",
              "desc":
                "Setup, troubleshooting, and full support for printers, scanners, and essential workplace devices.",
              "color": "from-slate-600 to-gray-700",
              "icon": <LuPrinter size={28} />
            },
            {
              "title": "IT Consulting & Strategy",
              "desc":
                "Tailored IT roadmaps, digital transformation strategies, and technology investment planning.",
              "color": "from-indigo-600 to-blue-700",
              "icon": <LuLightbulb size={28} />
            },
            {
              "title": "Onsite IT Support (Major Cities)",
              "desc":
                "Available in Berlin, Munich, Frankfurt, Hamburg, and Stuttgart, supported by nationwide remote assistance.",
              "color": "from-neutral-600 to-stone-700",
              "icon": <LuMapPin size={28} />
            }
          ]
        },
      
        "whyChooseSection": {
          "title": "Why Choose ITSupport.net.in?",
          "desc":
            "We combine expertise in German compliance with global IT standards to deliver secure, efficient, and cost-effective solutions for all business types.",
          "cards": [
            {
              "icon": <LuClock size={30} />,
              "color": "from-blue-500 to-sky-500",
              "desc": "24/7 IT support with multilingual engineering teams."
            },
            {
              "icon": <LuChartColumnIncreasing size={30} />,
              "color": "from-green-500 to-teal-500",
              "desc": "Flexible and affordable plans for SMEs and large enterprises."
            },
            {
              "icon": <LuBackpack size={30} />,
              "color": "from-purple-500 to-pink-500",
              "desc":
                "Expertise across finance, manufacturing, logistics, and technology sectors."
            },
            {
              "icon": <LuLightbulb size={30} />,
              "color": "from-orange-500 to-red-500",
              "desc":
                "Proactive monitoring and fast problem resolution for maximum uptime."
            },
            {
              "icon": <LuMapPin size={30} />,
              "color": "from-amber-500 to-yellow-500",
              "desc":
                "Strong presence supporting businesses across Germany's major industries and regions."
            }
          ]
        },
      
        "partnerSection": {
          "title": "Your Reliable IT Partner in Germany",
          "subTitle": "Secure, Compliant & Scalable IT Solutions",
          "desc":
            "Whether you're a start-up in Berlin, a banking firm in Frankfurt, or a manufacturing enterprise in Stuttgart, ITSupport.net.in delivers cost-effective and future-ready IT solutions tailored to your operations.",
          "contacts": "assist@itsupport.net.in"
        }
      }
      
      
      
]


export const getLocationBySlug = (
    slug: string,
  ): LocationItem | null => {
    return locationData.find((item) => item.slug === slug) || null;
  };
  
  export const getAllLocations = (): LocationItem[] => {
    return locationData;
  };