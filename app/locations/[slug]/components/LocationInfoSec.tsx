// components/ExperienceExpertise.tsx


interface props {
    title: string;
    desc: string;
    list: {
      icon: React.ReactNode;
      title: string;
      desc: string;
      color: string;
    }[];
};

export default function LocationInfoSection({title, desc, list }: props) {
  return (
    <section className="py-8 sm:pt-12 bg-cyan/50">
      <div className="xl:px-[8%] 2xl:px-0 2xl:max-w-[1488px] mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-2 text-black">
        {/* Our {' '} */}
          <span className="bg-gradient-to-r from-gray-700 to-cyan-500 bg-clip-text text-transparent">{title}</span>
        </h2>
        {
          desc.length>0
          &&
          <p className="text-gray-500 mb-10 text-xl mt-4 text-center">
          {desc}
          </p>
        }
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-8 lg:mt-20 mb-10">
          {list.map(({ icon, title, desc, color }) => (
            <div key={title} className="bg-white rounded-xl shadow-xl p-6 flex flex-col items-center border-[1px] border-black/10 hover:scale-105 hover:shadow-2xl transition-all duration-300 group">
              <span className={`w-16 h-16 flex items-center justify-center rounded-xl mb-4 text-2xl bg-gradient-to-br group-hover:scale-110 transition-all duration-300 text-white ${color}`}>
                {icon}
              </span>
              <h3 className="font-semibold text-xl mb-2 text-black">{title}</h3>
              <div className="text-gray-500 text-center text-sm mt-3" dangerouslySetInnerHTML={{ __html: desc }} />
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
