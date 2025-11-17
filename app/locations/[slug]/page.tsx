import { JsonLd } from "@/components/JsonLd";
import { getLocationBySlug } from "@/lib/locationsdata";
import { metas } from "@/lib/metas";
import { getMetaData, getStaticParams, JSONLD } from "@/lib/seo";
import { useLocale } from "next-intl";
import { use } from "react";
import LocationHero from "./components/LocationHero";
import LocationAbout from "./components/LocationAbout";

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
  const loactionDetails = getLocationBySlug(params.slug);
  return (
    <>
      <JsonLd type="locations" slug={params.slug} />
      <section
        className=""
        style={{ alignItems: "center" }}
      >
        <LocationHero 
          title={loactionDetails?.heroSection.heroTitle || ""}
          subtitle={loactionDetails?.heroSection.heroSubTitle || ""}
          pageName={loactionDetails?.loaction || ""}
        />
        {
          loactionDetails?.aboutSection
          &&
          <LocationAbout
            title={loactionDetails.aboutSection.title}
            descriptions={loactionDetails.aboutSection.deatsils}
            image={loactionDetails.aboutSection.image}
          />
        }
      </section>
    </>
  );
}