import { getMetaData, getStaticParams } from "@/lib/seo";

export const generateStaticParams = getStaticParams('cities')
export const generateMetadata = getMetaData('cities');

export default function Page(props: PageProps<'/cities/[slug]'>) {
  return (<>
    <h1>cities</h1>
  </>)
}