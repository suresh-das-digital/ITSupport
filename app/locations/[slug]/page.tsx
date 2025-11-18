import { JsonLd } from "@/components/JsonLd";
import { getLocationBySlug } from "@/lib/locationsdata";
import { metas } from "@/lib/metas";
import { getMetaData, getStaticParams, JSONLD } from "@/lib/seo";
import { useLocale } from "next-intl";
import { use } from "react";
import LocationHero from "./components/LocationHero";
import LocationAbout from "./components/LocationAbout";
import LocationInfoSection from "./components/LocationInfoSec";
import LocationWhyChoose from "./components/LocationWhyChoose";

interface LocationDetailProps {
  params: { slug: string };
}

export const generateStaticParams = getStaticParams('locations')
export const generateMetadata = getMetaData('locations');

export default function LocationDetail(props: PageProps<'/locations/[slug]'>) {

  const params = use(props.params);
  const locationDetails = getLocationBySlug(params.slug);
  return (
    <>
      <JsonLd type="locations" slug={params.slug} />
      <section
        className=""
        style={{ alignItems: "center" }}
      >
        <LocationHero 
          title={locationDetails?.heroSection.heroTitle || ""}
          subtitle={locationDetails?.heroSection.heroSubTitle || ""}
          pageName={locationDetails?.loaction || ""}
        />
        {
          locationDetails?.aboutSection
          &&
          <LocationAbout
            title={locationDetails.aboutSection.title}
            descriptions={locationDetails.aboutSection.deatsils}
            image={locationDetails.aboutSection.image}
          />
        }

        {
          locationDetails?.whysection
          &&
          <LocationInfoSection
            title={locationDetails.whysection.title}
            desc = {locationDetails.whysection.desc}
            list={locationDetails.whysection.list}
          />
        }

        {
          locationDetails?.coreSection
          &&
          <LocationInfoSection
            title={locationDetails.coreSection.title}
            desc = {locationDetails.coreSection.desc}
            list={locationDetails.coreSection.cards}
          />
        }

        {
          locationDetails?.whyChooseSection
          &&
          <LocationWhyChoose
            title={locationDetails.whyChooseSection.title}
            desc={locationDetails.whyChooseSection.desc || ""}
            list={locationDetails.whyChooseSection.cards}
          />
        }
      </section>
    </>
  );
}