import PageCard, { PageSubSection } from "@/components/PageCard";
import { PagePara, PageParaPara } from "@/components/PagePara";
import PagePoints, { PagePoint, PagePointWithHeading } from "@/components/PagePoints";
import Typography from "@/components/ui/Typography";
import { basicMarkup } from "@/lib/markup";
import { getMetaData, getStaticParams } from "@/lib/seo";
import { useLocale, useTranslations } from "next-intl";
import parse from "html-react-parser";


export const generateStaticParams = getStaticParams('privacy')
export const generateMetadata = getMetaData('privacy');

export default function PrivacyPage() {
  // const decodedString = decodeURIComponent(params.slug);
  const locale = useLocale();
  let boxIndex = 0;
  const t = useTranslations('PrivacyPage');
  
  return (
    <>
      <Typography variant="h2" className="text-left mt-5 mb-2">Privacy Policy - ITSupport.net.in</Typography>
      
      <PageCard noImage serial={boxIndex+=1}>
        <div className="italic flex w-full">Effective date: <span className="font-bold">August 27, 2025</span></div>
      </PageCard>
      
      <PageCard noImage serial={boxIndex+=1}>
        <PagePara desc={
          t("para")
        } />
      </PageCard>
      
      <PageCard noImage serial={boxIndex+=1} imageSrc="/assets/padlock-icon.svg">
        <PagePara title={t("scopeTitle")} desc={t("scopePara")} />
      </PageCard>
      
      <PageCard noImage serial={boxIndex+=1} imageSrc="/assets/padlock-icon.svg">
        <PagePoints title={t("infoCollectTitle")} subTitle={t("infoCollectSubTitle")}>
          <PagePointWithHeading heading={t("infoCollectPara.0.heading")} text={t("infoCollectPara.0.text")} />
          <PagePointWithHeading heading={t("infoCollectPara.1.heading")} text={t("infoCollectPara.1.text")} />
        </PagePoints>
      </PageCard>

      <PageCard noImage serial={boxIndex+=1}>
        <PagePoints title={t("howWeUseInfoTitle")} subTitle={t("howWeUseInfoSubTitle")} footerText={t("howWeUseInfoFooterText")}>
          <PagePoint><span>{t("howWeUseInfoPoints.0")}</span></PagePoint>
          <PagePoint><span>{t("howWeUseInfoPoints.1")}</span></PagePoint>
          <PagePoint><span>{t("howWeUseInfoPoints.2")}</span></PagePoint>
          <PagePoint><span>{t("howWeUseInfoPoints.3")}</span></PagePoint>
          <PagePoint><span>{t("howWeUseInfoPoints.4")}</span></PagePoint>
          <PagePoint><span>{t("howWeUseInfoPoints.5")}</span></PagePoint>
        </PagePoints>
      </PageCard>

      <PageCard noImage serial={boxIndex+=1}>
        <PagePara title={t("legalBasicTitle")} >
          <p>{parse(t.markup("legalBasicPara", basicMarkup ))}</p>
        </PagePara>
      </PageCard>

      <PageCard noImage serial={boxIndex+=1}>
        <PagePoints title={t("sharingTitle")} subTitle={t("sharingSubTitle")}>
          <PagePoint><span>{parse(t.markup("sharingPoints.0", basicMarkup))}</span></PagePoint>
          <PagePoint><span>{parse(t.markup("sharingPoints.1", basicMarkup))}</span></PagePoint>
          <PagePoint><span>{parse(t.markup("sharingPoints.2", basicMarkup))}</span></PagePoint>
          <PagePoint><span>{parse(t.markup("sharingPoints.3", basicMarkup))}</span></PagePoint>
        </PagePoints>
      </PageCard>

      <PageCard noImage serial={boxIndex+=1}>
        <PagePara title={t("dataSecurityTitle")}>
          <span>{parse(t('dataSecurityDesc'))}</span>
        </PagePara>
      </PageCard>

      <PageCard noImage serial={boxIndex+=1}>
        <PagePoints title={t("cookieTrackingTitle")} subTitle={t("cookieTrackingSubTitle")}>
          <PagePointWithHeading heading={t("cookieTrackingPoints.0.heading")} text={t("cookieTrackingPoints.0.text")} />
          <PagePointWithHeading heading={t("cookieTrackingPoints.1.heading")} text={t("cookieTrackingPoints.0.text")} />
          <PagePointWithHeading heading={t("cookieTrackingPoints.2.heading")} text={t("cookieTrackingPoints.0.text")} />
        </PagePoints>
      </PageCard>

      <PageCard noImage serial={boxIndex+=1}>
        <PagePara title={t("dataRetentionTitle")}>
          <span>{parse(t('dataRetentionDesc'))}</span>
        </PagePara>
      </PageCard>

      <PageCard noImage serial={boxIndex+=1} title={t("yourChoice.title")}>
        <PageSubSection title={t("yourChoice.general.title")}>
          <PagePoints>
            <PagePointWithHeading heading={t("yourChoice.general.points.0.heading")} text={t("yourChoice.general.points.0.text")} />
            <PagePointWithHeading heading={t("yourChoice.general.points.1.heading")} text={t("yourChoice.general.points.1.text")} />
            <PagePointWithHeading heading={t("yourChoice.general.points.2.heading")} text={t("yourChoice.general.points.2.text")} />
          </PagePoints>
        </PageSubSection>
        
        <PageSubSection title={t("yourChoice.ccap.title")}>
          <PagePara>
            <span>{parse(t.markup("yourChoice.ccap.desc", basicMarkup))}</span>
          </PagePara>
        </PageSubSection>
        
        <PageSubSection title={t("yourChoice.coppa.title")}>
          <PagePara>
            <span>{parse(t.markup("yourChoice.coppa.desc", basicMarkup))}</span>
          </PagePara>
        </PageSubSection>

        <PageSubSection title={t("yourChoice.hipaa.title")}>
          <PagePara>
            <span>{parse(t.markup("yourChoice.hipaa.desc", basicMarkup))}</span>
          </PagePara>
        </PageSubSection>
      </PageCard>

      <PageCard noImage serial={boxIndex+=1}>
        <PagePara title={t("intlTransferTitle")}>
          <span>{parse(t('intlTransferDesc'))}</span>
        </PagePara>
      </PageCard>

      <PageCard noImage serial={boxIndex+=1}>
        <PagePara title={t("tpLinksTitle")}>
          <span>{parse(t('tpLinksDesc'))}</span>
        </PagePara>
      </PageCard>

      <PageCard noImage serial={boxIndex+=1}>
        <PagePara title={t("lawEnforceTitle")}>
          <span>{parse(t('lawEnforceDesc'))}</span>
        </PagePara>
      </PageCard>

      <PageCard noImage serial={boxIndex+=1}>
        <PagePara title={t("changesTitle")}>
          <span>{parse(t('changesDesc'))}</span>
        </PagePara>
      </PageCard>
    </>
  );
}