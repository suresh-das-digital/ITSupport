import { Metadata, ResolvingMetadata } from "next";
import { use } from "react";
import { metas } from "./metas";
import { MetaType } from "./types";


type GenMetaDataProps = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export function buildMetadata(meta: MetaType): Metadata {
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords?.join(", "),
    alternates: {
      canonical: meta.canonical,
      languages:
        meta.hreflangs?.reduce<Record<string, string>>((acc, h) => {
          acc[h.hreflang] = h.href;
          return acc;
        }, {}) ?? undefined,
    },
    openGraph: {
      title: meta.openGraph?.title,
      description: meta.openGraph?.description,
      url: meta.openGraph?.url,
      images: meta.openGraph?.images?.map((u) => ({ url: u })) ?? undefined,
      siteName: meta.openGraph?.siteName,
      locale: meta.openGraph?.locale,
    },
    twitter: {
      card: (["summary", "summary_large_image", "player", "app"].includes(meta.twitter?.card ?? "")
        ? (meta.twitter?.card as "summary" | "summary_large_image" | "player" | "app")
        : undefined),
      title: meta.twitter?.title,
      description: meta.twitter?.description,
      images: meta.twitter?.image ? [meta.twitter.image] : undefined,
      creator: meta.twitter?.creator,
    },
  };
}

export function getSlug(params: any, basePath: string = '') {
  let {slug} = params;
  if (Array.isArray(slug)) {
    slug = slug.join('/')
  } else {
    slug = slug || ''
  }
  const sl = basePath + '/' + slug;
  return sl
}

export function getMDObject(type: string, slug: string) {
  const meta = metas?.[type]?.[slug];
  return meta;
}

export function getJSONLDObject(type: string, slug: string) {
  const data = getMDObject(type, slug);
  // console.log('GETTING JSON OBJ', type, slug, data['jsonLd'])
  if (!data) {return []}
  return data?.['jsonLd'] || []
}

export function getMetaData(type: string, basePath: string = '') {
  return async function genMetaData({ params, searchParams }: GenMetaDataProps,
    parent: ResolvingMetadata) {
      // const slug = getSlug(await params);
      const sl = getSlug(await params);
      const meta = metas?.[type]?.[sl];
      // console.log(params, sl, type, meta)
      if (!meta) return {};
      return buildMetadata(meta);
    }
}

export function JSONLD({type, slug}: any) {
  // return (<></>)
}

export function renderJsonLd(jsonLdArray: object[]) {
  // returns an array of <script> strings to inject on the page
  return jsonLdArray.map((obj, i) => ({
    key: `ldjson-${i}`,
    json: JSON.stringify(obj),
  }));
}


function getStaticSlug(this: {basePath: string | string[] | null}, s: string) {
  // console.log(s, s.slice(1).indexOf('/'));
  if (this.basePath === null && s.slice(1).indexOf('/') > 0) {
    // console.log('Array')
    return s.slice(1).split('/')
  }
  if (this.basePath && typeof(this.basePath) == 'string') {
    return s.replace(this.basePath, '') || ''
  }
  if (Array.isArray(this.basePath)) {
    return s;
  }
  return s.slice(1) || ''
}

export function getStaticParams(type: string, basePath: string | string[] | null = '') {
  // console.log('GENSP', type, basePath)
  return async function genStaticParams({ params }: any) {
    // console.log('TYPE', type, basePath)
    if (metas[type]) {
      let pages : any;
      if (typeof(basePath) == 'string') {
        pages = Object.keys(metas[type]).filter(el=>el.indexOf(basePath) === 0).map(getStaticSlug.bind({basePath})).map(el=>({slug: el}));
      }
      if (Array.isArray(basePath)) {
        pages = Object.keys(metas[type]).filter(el=>basePath.indexOf(el) != -1).map(getStaticSlug.bind({basePath})).map(el=>({slug: el}));
      }
      else {
        pages = Object.keys(metas[type]).filter(el=>el.slice(1)).map(getStaticSlug.bind({basePath})).map(el=>({slug: el}));
      }
      if (basePath === null) {
        pages = pages.map((el: any) => {
          if (!Array.isArray(el.slug)) {
            return {slug: [el.slug]}
          }
          return el
        })
      }
      // console.log('->', type, basePath, pages)
      return pages;
    }
    return [];
  }
}