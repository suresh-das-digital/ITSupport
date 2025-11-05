import PageCard, { PageSubSection } from "@/components/PageCard";
import { PagePara } from "@/components/PagePara";
import PagePoints, { PagePoint } from "@/components/PagePoints";
import { ContactData, ContactDataSection } from "@/components/ui/ContactData";
import Typography from "@/components/ui/Typography";
import { getBasicMarkup } from "@/lib/markup";
import { getMetaData, getStaticParams } from "@/lib/seo";
import { useLocale, useTranslations } from "next-intl";

export const generateStaticParams = getStaticParams('terms')
export const generateMetadata = getMetaData('terms');

export default function TermsPage() {
  // const decodedString = decodeURIComponent(params.slug);
  const locale = useLocale();
  let boxIndex = 0;
  const t = useTranslations('TermsPage');
  const basicMarkup = getBasicMarkup(t);

  return (
    <>
      <Typography variant="h2" className="text-left mt-5 mb-2">{t("pageHeading")}</Typography>
      
      <PageCard noImage serial={boxIndex+=1}>
        <div className="italic flex w-full">{t("effectiveDateTitle")} <span className="font-bold">{t("effectiveDate")}</span></div>
      </PageCard>
      
      <PageCard noImage serial={boxIndex+=1} title={t("acceptanceTerm.title")}>
        <PagePara desc={
          t.markup("acceptanceTerm.para", basicMarkup)
        } />
      </PageCard>

      <PageCard noImage serial={boxIndex+=1} title={t("scope.title")}>
        <PagePara desc={
          t.markup("scope.para", basicMarkup)
        } />
      </PageCard>

      
      <PageCard noImage serial={boxIndex+=1} title={t("conduct.title")} subTitle={t("conduct.subTitle")}>
        <PagePoints>
          <PagePoint>{t("conduct.points.0")}</PagePoint>
          <PagePoint>{t("conduct.points.1")}</PagePoint>
          <PagePoint>{t("conduct.points.2")}</PagePoint>
        </PagePoints>
      </PageCard>

      <PageCard noImage serial={boxIndex+=1} title={t("ip.title")}>
        <PagePara desc={
          t.markup("ip.para", basicMarkup)
        } />
      </PageCard>
      
      <PageCard noImage serial={boxIndex+=1} title={t("warranty.title")}>
        <PagePara desc={
          t.markup("warranty.para", basicMarkup)
        } />
      </PageCard>
      
      <PageCard noImage serial={boxIndex+=1} title={t("limit.title")}>
        <PagePara desc={
          t.markup("limit.para", basicMarkup)
        } />
      </PageCard>
      
      <PageCard noImage serial={boxIndex+=1} title={t("fee.title")}>
        <PagePara desc={
          t.markup("fee.para", basicMarkup)
        } />
      </PageCard>
      
      <PageCard noImage serial={boxIndex+=1} title={t("modification.title")}>
        <PagePara desc={
          t.markup("modification.para", basicMarkup)
        } />
      </PageCard>
      
      <PageCard noImage serial={boxIndex+=1} title={t("privacy.title")}>
        <PagePara desc={
          t.markup("privacy.para", basicMarkup)
        } />
      </PageCard>

      <PageCard noImage serial={boxIndex+=1} title={t("law.title")}>
        <PagePara desc={
          t.markup("law.para", basicMarkup)
        } />
      </PageCard>

      <PageCard noImage serial={boxIndex+=1} title={t("termination.title")}>
        <PagePara desc={
          t.markup("termination.para", basicMarkup)
        } />
      </PageCard>

      <PageCard noImage serial={boxIndex+=1} title={t("agreement.title")}>
        <PagePara desc={
          t.markup("agreement.para", basicMarkup)
        } />
      </PageCard>

      <PageCard noImage serial={boxIndex+=1} title={t("contact.title")} subTitle={t("contact.subTitle")}>
        <ContactData name={t("contact.contact.name")}>
          <ContactDataSection>
            <b>{t("contact.contact.name")}</b>
          </ContactDataSection>
          <ContactDataSection keyData={t("contact.contact.email.title")} value={t("contact.contact.email.value")} />
          <ContactDataSection keyData={t("contact.contact.address.title")} value={t("contact.contact.address.value")} />
          <ContactDataSection keyData={t("contact.contact.phone.title")} value={t("contact.contact.phone.value")} />
        </ContactData>

        <PageSubSection title={t("contact.compliance.title")}>
          <PagePoints>
            <PagePoint>{t("contact.compliance.points.0")}</PagePoint>
            <PagePoint>{t("contact.compliance.points.1")}</PagePoint>
            <PagePoint>{t("contact.compliance.points.2")}</PagePoint>
            <PagePoint>{t("contact.compliance.points.3")}</PagePoint>
          </PagePoints>
        </PageSubSection>
      </PageCard>

    </>
  );
}