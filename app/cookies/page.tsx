import { getMetaData, getStaticParams } from "@/lib/seo";
import { useLocale, useTranslations } from "next-intl";
import { PagePara } from "./_component/PagePara";
import PageCard from "@/components/PageCard";
import CookiePoints, { CookiePoint } from "./_component/CookiePoints";
import { howToManageCookies, whyWeUseCookies } from "./_component/constant";
import Link from "next/link";
import Typography from "@/components/ui/Typography";

export const generateStaticParams = getStaticParams('cookies')
export const generateMetadata = getMetaData('cookies');

export default function CookiesPage() {
  let boxIndex = 0;
  const t = useTranslations('CookiePage');
  // const decodedString = decodeURIComponent(params.slug);
  const locale = useLocale();
  //  bg-gradient-to-r from-slate-200 via-sky-100 to-indigo-300
  return (
    <>
      {/* <div
        className="flex flex-col h-auto py-5 px-4 align-cente shadow-md rounded-lg"
        style={{ alignItems: "center" }}
      >
      </div> */}
      <Typography variant="h2" className="text-left mt-5 mb-2">Cookie Policy - ITSupport.net.in</Typography>
      <PageCard noImage serial={boxIndex+=1}>
        <div className="italic flex w-full">Effective date: <span className="font-bold">August 27, 2025</span></div>
      </PageCard>
      <PageCard serial={boxIndex+=1}>
        <PagePara title={t("whatAreCookies")} desc={
          t.markup("whatAreCookiesDesc", {
            link: (chunks) => `<a className="underline" href=${t("whatAreCookiesDescWikipediaRef")}>${chunks}</a>`
          })
        } />
      </PageCard>
      <PageCard serial={boxIndex+=1}>
        <CookiePoints title="Why We Use Cookies" subTitle="We use cookies to:" points={whyWeUseCookies} />
      </PageCard>
      <PageCard serial={boxIndex+=1}>
        <CookiePoints title="Why We Use Cookies" subTitle="We use cookies to:" points={whyWeUseCookies} />
      </PageCard>
      <PageCard serial={boxIndex+=1}>
        <PagePara title="Third-Party Cookies">
          <span>
            We may use third-party services (e.g., Google Analytics, chat tools) that place their own cookies to analyze traffic or provide services.
            These cookies are governed by the respective 
            third-party's privacy practices. <a className="underline" href="https://www.washingtonpost.com/discussions/2021/09/13/cookie-policy/?utm_source=chatgpt.com">The Washington Post</a> <a className="underline" href="https://nypost.com/cookie-notice/?utm_source=chatgpt.com">New York Post</a>
          </span>
        </PagePara>
      </PageCard>
      <PageCard serial={boxIndex+=1}>
        <PagePara title="Consent & Choice">
          <div className="mb-2">
            <span>
              In the U.S., we operate under an opt-out framework.
              Except for essential cookies, optional cookies are set only after you consent via the cookie banner.
              You have the right to withdraw this consent at any time. <a className="underline" href="https://www.womblebonddickinson.com/us/insights/alerts/cookies-may-bite-back?utm_source=chatgpt.com">Womble Bond Dickinson</a> <a className="underline" href="https://allaboutcookies.org/do-i-need-cookie-policy-website?utm_source=chatgpt.com">All About Cookies</a>
              </span>
          </div>
          <div>
            <span>
              We do not employ any deceptive or manipulative (“dark pattern”) consent methods,
              in line with FTC guidelines against unfair practices. <a className="underline" href="https://businesslawreview.uchicago.edu/print-archive/ftc-and-cpras-regulation-dark-patterns-cookie-consent-notices?utm_source=chatgpt.com">Business Law Review</a>
            </span>
          </div>
        </PagePara>
      </PageCard>
      <PageCard serial={boxIndex+=1}>
        <CookiePoints footerText="Disabling cookies may reduce functionality or usability of the site." title="How to Manage Cookies" subTitle="You can manage your cookie preferences:" points={howToManageCookies} />
      </PageCard>
      <PageCard serial={boxIndex+=1}>
        <CookiePoints title="Legal Context">
          <CookiePoint>
            <span>The U.S. has <b>no unified federal law</b> specifically governing cookies, but regulators use the <b>FTC Act</b> to penalize deceptive cookie practices and enforce consumer privacy. <a className="underline" href="https://www.womblebonddickinson.com/us/insights/alerts/cookies-may-bite-back?utm_source=chatgpt.com">Womble Bond Dickinson</a> <a className="underline" href="https://medium.com/%40ishanjainoffical/website-cookies-data-privacy-regulations-7f2874284333?utm_source=chatgpt.com">Medium</a></span>
          </CookiePoint>
          <CookiePoint>
            <span>
              In California, the <b>CCPA/CPRA</b> views certain cookies as personal information, requiring transparency and opt-out choices for marketing-related data usage. <a href="https://allaboutcookies.org/do-i-need-cookie-policy-website?utm_source=chatgpt.com">All About Cookies</a> <a href="https://www.cookieyes.com/knowledge-base/cookie-consent/are-there-cookie-laws-in-the-us/?utm_source=chatgpt.com">CookieYes</a>
            </span>
          </CookiePoint>
          <CookiePoint>
            <span>
              Per <b>CalOPPA</b>, we maintain a visible cookie policy disclosing data uses and responsible parties. <a href="https://syrenis.com/resources/blog/us-cookie-laws/?utm_source=chatgpt.com">Syrenis</a>
            </span>
          </CookiePoint>
        </CookiePoints>
      </PageCard>
      <PageCard serial={boxIndex+=1}>
        <PagePara title="Updates to This Cookie Policy">
          <span>
            This policy will be reviewed and may be updated as laws evolve or our services change. We'll indicate the new effective date whenever updates are published.
          </span>
        </PagePara>
      </PageCard>
      <PageCard serial={boxIndex+=1}>
        <PagePara title="Contact Us">
          <div>
            <span>
              For questions about our cookie practices, or to request cookie-related preferences or deletions, please contact:
            </span>
          </div>
          <div>
            <b>Email:</b> assist@itsupport.net.in
          </div>
          <div>
            <span>We are committed to maintaining transparency and respecting your privacy</span>
          </div>
        </PagePara>
      </PageCard>
    </>
  );
}