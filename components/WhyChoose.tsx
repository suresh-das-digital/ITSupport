import IconCardSection, { Card } from "./cards/IconCardSection";

export type WhyChooseProps = {
  cards: Card[];
  title: string;
  linkText?: string
};

export default function WhyChoose({ cards, title, linkText }: WhyChooseProps) {
  return (
    <IconCardSection
      title={title}
      titleLinkHref="https://it-support-landing.vercel.app"
      titleLinkText={linkText === undefined ? "ITSupport.net.in": linkText}
      cards={cards}
    />
  );
}
