import React from "react";

type Card = {
  title: string;
  desc: string;
  flag?: string;
};

type InfoCardSectionProps = {
  title: string;
  intro?: string;
  cards: Card[];
}

export default function InfoCardSection({ title, intro, cards } : InfoCardSectionProps) {
  return (
    <section className="py-16 px-4 sm:px-6 bg-[#f4f7fa]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          {title}
        </h2>
        {intro && (
          <p className="text-lg text-center text-gray-700 mb-12 max-w-4xl mx-auto">
            {intro}
          </p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative overflow-hidden md:hover:scale-105 rounded-lg shadow-md hover:shadow-lg transition-all duration-75 cursor-pointer group"
            >
              <div className="h-full w-full cursor-pointer p-6 bg-[#ffffff] group-hover:bg-[#ffffffba] duration-75">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#61CE70] duration-0">
                  {card.title}
                </h3>
                <p className="text-gray-700 text-sm">{card.desc}</p>
              </div>
              <div className="absolute blur-md top-0 left-[35%] md:left-[50%] lg:left-[43%] w-full h-full text-[24em] leading-0 translate-y-1/2 -translate-x-1/2 opacity-0 duration-75 group-hover:opacity-50 -z-1">
                <span>{card?.flag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}