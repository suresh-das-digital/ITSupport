import { getJSONLDObject, getSlug } from "@/lib/seo";
import Script from "next/script";

interface JsonLdProps {
  data: object[];
}

export function JsonLd({type, slug, basePath}: {type: string, slug: string, basePath ?: string}) {
  const sl = getSlug({slug}, basePath || '');
  const data = getJSONLDObject(type, sl)
  return (
    <>
      {/* <head> */}
        {data.map((item, i) => (
          <Script
            key={i}
            id={`json-ld-${i}`}
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(item).replace(/</g, '\\u003c') }}
          />
        ))}
      {/* </head> */}
    </>
  );
}
