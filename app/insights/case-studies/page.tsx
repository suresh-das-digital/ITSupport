import { getMetaData, getStaticParams } from "@/lib/seo";

export const generateStaticParams = getStaticParams('insights', '/case-studies')
export const generateMetadata = getMetaData('insights', '/case-studies');


export default function Page() {
  return (<>
    <h1>Case study</h1>
  </>)
}