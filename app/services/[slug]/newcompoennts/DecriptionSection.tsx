// app/components/DataBackupImportance.tsx
import Image from 'next/image';

export default function DecriptionSection({title, description, imageTitle, imageAlt, image, subTitle}:{
  title:string;
  description:string;
  imageTitle:string;
  imageAlt:string;
  subTitle:string;
  image:string;
}) {
  return (
    <section className="w-full py-12 px-4 lg:px-16 bg-white ">
      <div className="max-w-6xl 2xl:max-w-[1488px] mx-auto flex flex-col lg:flex-row  gap-10">
        {/* Text Column */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            {title}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {description}
          </p>
        </div>
        {/* Image Column */}
        <div className="flex-1 w-full flex justify-center">
          <Image
            src={image}
            alt={imageAlt}
            title={imageTitle}
            width={640}
            height={430}
            className="rounded-2xl object-cover max-h-[300px] w-full max-w-xl shadow-md"
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </div>
      <p className="text-base max-w-6xl mx-auto text-gray-700 leading-relaxed mt-5">
      {subTitle}
          </p>
    </section>
  );
}
