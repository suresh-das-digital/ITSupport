import { getMetaData, getStaticParams } from "@/lib/seo";
import { useLocale } from "next-intl";
import { use } from "react";



interface InsightBlogProps {
  params: { slug: string };
}

export const generateStaticParams = getStaticParams('insights', null)
export const generateMetadata = getMetaData('insights');


export default function Page({params} : any) {
  const s = use(params)
  // const decodedString = decodeURIComponent(useparams.slug);
  const locale = useLocale();
   return (
    <>
      <section
        className="flex md:flex-row flex-col h-auto py-5 px-4 align-center bg-gradient-to-r from-slate-200 via-sky-100 to-indigo-300 shadow-md rounded-lg mb-6"
        style={{ alignItems: "center" }}
      >
        Insight Blog {JSON.stringify(s)}
      </section>
    </>
  );
}