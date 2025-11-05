export type MetaType = {
  slug ?: string;
  applicationName?: string,
  title?: string;
  authors?: {
    name?: string,
    url?: string,
  }[],
  metadataBase?: string,
  other?: {
    [key in string]?: string
  },
  icons?: {
    [type in string]?: {
      url?: string,
      type?: string,
      sizes?: string,
    }[]
  },
  description?: string;
  keywords?: string[];
  url?: string;
  canonical?: string;
  alternates?: {
    canonical?: string;
    languages?: {
      [language in string]: string
    }
  };
  author?: string;
  robots?: string;
  copyright?: string;
  hreflangs?: { href: string; hreflang: string }[];
  openGraph?: {
    type?: string;
    title?: string;
    description?: string;
    url?: string;
    images?: any[];
    siteName?: string;
    locale?: string;
    localeAlt?: string[];
    locales?: string[];
    image?: any;
  };
  twitter?: {
    card?: string;
    title?: string;
    description?: string;
    image?: string;
    images?: string | string[] | {
      url?: string,
      alt?: string
    }[],
    creator?: string;
  };
  jsonLd?: Array<object>; // array of JSON-LD objects (Product, FAQ, Review, etc.)
};

export type PageMeta = {
  [slug in string]: MetaType
}