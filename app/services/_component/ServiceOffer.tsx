import Typography from "@/components/ui/Typography";
import FeatureCard from "../[slug]/_components/FeatureCard";
import Image from "next/image";

interface ServiceProvider {
  imageAlt: string;
  imageTitle?: string;
  imageSrc: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  description?: string;
}

interface HeroService {
  title: string;
  desc: string;
}

interface ServiceOfferProps {
  serviceProvider: ServiceProvider;
  heroServices?: HeroService[];
}

export default function ServiceOffer({
  serviceProvider,
  heroServices,
}: ServiceOfferProps) {
  return (
    <section
      className="bg-white flex md:flex-row flex-col h-auto py-4 sm:px-16 px-2 align-center shadow-md rounded-lg mb-6 justify-center"
      style={{ alignItems: "center" }}
    >
      <div className="flex relative flex-col px-6 xl:px-0 text-start w-full my-6 max-w-6xl 2xl:max-w-[1488px]">
        <div className="relative flex justify-between lg:flex-row flex-col-reverse w-full lg:items-start items-center">
          <div className="flex-1 mr-4">
            <Typography variant="h3" className="font-bold text-gray-900 mb-4">
              {serviceProvider.title}{" "}
              <span className="text-[#61CE70]">{serviceProvider.highlight}</span>
            </Typography>
            <p className="text-lg text-justify text-gray-600 leading-relaxed mb-0">
              {serviceProvider.subtitle}
            </p>
          </div>
          <div className="flex-1 lg:ml-4 max-h-[400px] overflow-hidden rounded-lg">
            <Image
              width={720}
              height={600}
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80"
              alt="Ensuring Reliable Email Operations: Common Challenges We Expertly Handle"
              title="Ensuring Reliable Email Operations: Common Challenges We Expertly Handle"
              className="w-full h-full max-h-[600px] object-contain"
              loading="lazy"
            />
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed mt-6 text-left">
          {serviceProvider.description}
        </p>


        {Boolean(heroServices?.length) && (
          <div>
            <div className="flex justify-center mt-6">
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-2xl">
                {heroServices?.map((service, index) => (
                  <div
                    key={`hero-services-${service.title}`}
                    className="rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group border border-green-500/50 hover:border-green-500"
                  >
                    <span className="cursor-pointer">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#61CE70] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-700 text-sm">{service.desc}</p>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
