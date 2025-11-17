// app/components/DataBackupImportance.tsx
import Image from 'next/image';

export default function IndustriesAbout({description1, description2, imageTitle, imageAlt, image,}:{
    description1:string;
    description2:string;
  imageTitle:string;
  imageAlt:string;
  image:string;
}) {
  return (
    <section className="w-full py-12 px-4 lg:px-0 bg-white ">
      <div className="max-w-6xl 2xl:max-w-[1488px] mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between">
        {/* Text Column */}
        <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-extrabold text-cyan-600 mb-6">
            - About
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
            {description1}
            </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            {description2}
          </p>
        </div>
        {/* Image Column */}
        <div className="flex-1 w-full flex justify-center ">
          <Image
            src={image}
            alt={imageAlt}
            title={imageTitle}
            width={940}
            height={500}
            className="rounded-2xl object-contain max-h-[500px] w-full  "
            priority
            // sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </div>
      {/* <p className="text-base max-w-6xl mx-auto text-gray-700 leading-relaxed mt-5">
      {subTitle}
          </p> */}
    </section>
  );
}
