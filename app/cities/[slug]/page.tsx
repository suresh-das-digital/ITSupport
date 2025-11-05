import { getAllCities, getCityBySlug } from "@/lib/citysData";
import { getMetaData, getStaticParams } from "@/lib/seo";
import { Metadata } from "next";
import { use } from "react"

// function Head({slug}: {slug: any}) {
//   return (<>
//     {JSON.stringify(slug)}
//   </>)
// }

// export const generateStaticParams = getStaticParams('cities')
// export const generateMetadata = getMetaData('cities');

interface CitiesPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const cities = await getAllCities(); // Use the function to fetch all blog posts

  // Map the blog posts to the required format: { slug: 'value' }
  return cities.map((props) => ({
    slug: props.citySlug,
  }));
}

export async function generateMetadata({ params }: CitiesPageProps): Promise<Metadata> {
  const blog = await getCityBySlug(params.slug);
  if (!blog) {
    return {
      title: "Blog post not found",
      description: "The blog post you are looking for does not exist.",
    };
  }
  // Return full metadata object from blog.metadata
  return {
    ...blog.metaData,
  };
}

export default function Cities({params}: CitiesPageProps) {
  const { slug } = params;

  const cityDetails = getCityBySlug(slug)
  return (<>
    {/* <Head  slug={params.slug} /> */}
    <h1>{cityDetails?.cityName}</h1>
  </>)
}