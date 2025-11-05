import { JsonLd } from "@/components/JsonLd";
import { metas } from "@/lib/metas";
import { getMetaData, getStaticParams, JSONLD } from "@/lib/seo";
import { useLocale } from "next-intl";
import { use } from "react";

interface LocationDetailProps {
  params: { slug: string };
}

export const generateStaticParams = getStaticParams('locations')
export const generateMetadata = getMetaData('locations');

export default function LocationDetail(props: PageProps<'/locations/[slug]'>) {
  // const {params} = use(props);
  // const decodedString = decodeURIComponent(params.slug);
  // const locale = useLocale();
  const params = use(props.params);
  return (
    <>
      <JsonLd type="locations" slug={params.slug} />
      <section
        className="flex md:flex-row flex-col h-auto py-5 px-4 align-center bg-gradient-to-r from-slate-200 via-sky-100 to-indigo-300 shadow-md rounded-lg mb-6"
        style={{ alignItems: "center" }}
      >
        Location Detail Page {params.slug}
      </section>
    </>
  );
}