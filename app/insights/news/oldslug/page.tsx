import { JsonLd } from "@/components/JsonLd";
import { getMetaData, getStaticParams } from "@/lib/seo";
import { useLocale } from "next-intl";


interface InsightBlogProps {
  params: { slug: string };
}

export const generateStaticParams = getStaticParams('insights', '/news/')
export const generateMetadata = getMetaData('insights', '/news');

export default function InsightBlog({params} : InsightBlogProps) {
  const decodedString = decodeURIComponent(params.slug);
  const locale = useLocale();
   return (
    <>
      <JsonLd type="insights" slug={decodedString} />
      <section
        className="flex md:flex-row flex-col h-auto py-5 px-4 align-center bg-gradient-to-r from-slate-200 via-sky-100 to-indigo-300 shadow-md rounded-lg mb-6"
        style={{ alignItems: "center" }}
      >
        Insight Blog {decodedString}
      </section>
    </>
  );
}