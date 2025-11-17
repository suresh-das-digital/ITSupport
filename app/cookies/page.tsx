import HeroInformattionPage from "@/components/common/HeroInformattionPage";
import { getMetaData, getStaticParams } from "@/lib/seo";
import { useLocale, useTranslations } from "next-intl";
import WhatAreCookies from "./compopnents/WhatAreCookies";
import CookiesType from "./compopnents/CookiesType";
import Cookiesinfo from "./compopnents/Cookiesinfo";


export const generateStaticParams = getStaticParams('cookies')
export const generateMetadata = getMetaData('cookies');

export default function CookiesPage() {
  const t = useTranslations('CookiePage');
  const locale = useLocale();

  return (
    <>
      <HeroInformattionPage
        title="Cookie Policy – ITSupport.net.in"
        subtitle1="Effective date: August 27, 2025"
        subtitle2=""
        pageName="Cookie Policy"
      />
      <WhatAreCookies/>
      <CookiesType/>
      <Cookiesinfo/>
    </>
  );
}