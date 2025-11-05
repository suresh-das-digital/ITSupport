


const services = [
    {
      title: "Proven Expertise & Experience",
      description:
        "Our decade of experience means we've refined our processes to offer the most effective and secure backup and recovery solutions. We are industry veterans you can trust.",
    },
    {
      title: "Customized & Scalable Solutions",
      description:
        "We don't offer generic fixes. Our solutions are tailored to your specific infrastructure, data volume, and recovery objectives, designed to scale with your growth.",
    },
    {
      title: "Unwavering Commitment to Security",
      description:
        "Security is at the core of everything we do. We employ industry best practices to ensure your data is always protected, both in transit and at rest. <br />Protect your most valuable asset today. Partner with ITSupport.net.in for robust Data Backup & Recovery services and ensure your digital future is secure.",
    },
  ];

export default function InfoSection4({title, services, subTitle}:{
  title:string;
  subTitle:string;
  services:any[];
}) {
  return (
    <section className="w-full bg-gradient-to-tr from-gray-900 to-cyan-600 py-16 text-white">
      <div className="max-w-7xl 2xl:max-w-[1488px] mx-auto px-4 flex flex-col items-center">
        
        <h2 className="max-w-7xl mx-auto text-center text-3xl md:text-4xl font-bold mb-4 leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-300">{title} </span> 
        </h2>
        <p className="text-white text-lg mb-10 text-center max-w-3xl">
        {subTitle}
        </p>
        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full text-gray-900">
          {services.map((s, idx) => (
            <div key={idx} className="relative bg-white rounded-2xl shadow-lg p-4 flex flex-col min-h-[70px] max-w-lg mx-auto group hover:scale-105 transition-all duration-500">
              
              <div className="mt-8 mb-6 font-bold text-xl group-hover:text-cyan-700">{s.title}</div>

              <p className="text-gray-600  mb-6">{s.description}</p>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
