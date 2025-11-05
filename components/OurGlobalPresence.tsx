import { useTranslations } from "next-intl";
import Link from "next/link";
import InfoCardSection from "./cards/InfoCardSection";

export default function OurGlobalPresence() {
   const t = useTranslations("GlobalPresence");

  const cards = [
    { title: t("us.title"), desc: t("us.desc"), flag: '🇺🇸' },
    { title: t("uk.title"), desc: t("uk.desc"), flag: '🇬🇧' },
    { title: t("in.title"), desc: t("in.desc"), flag: '🇮🇳' },
    { title: t("au.title"), desc: t("au.desc"), flag: '🇦🇺' },
    { title: t("de.title"), desc: t("de.desc"), flag: '🇩🇪' },
    { title: t("fr.title"), desc: t("fr.desc"), flag: '🇫🇷' },
    { title: t("ca.title"), desc: t("ca.desc"), flag: '🇨🇦' },
  ];

  return (
    <InfoCardSection
      title={t("title")}
      intro={t("intro")}
      cards={cards}
    />
  );
}
