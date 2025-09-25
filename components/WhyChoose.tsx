import IconCardSection, { Card } from "./cards/IconCardSection";

export type WhyChooseProps = {
  cards: Card[];
  title: string;
};

export default function WhyChoose({ cards, title }: WhyChooseProps) {
  return (
    <IconCardSection
      title={title}
      titleLinkHref="https://it-support-landing.vercel.app"
      titleLinkText="ITSupport.net.in"
      cards={cards}
    />
  );
}
