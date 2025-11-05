"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderNavItem from "./HeaderNavItem";
import { useLocale, useTranslations } from "next-intl";
import defaultNavLinksEs from "@/utils/constant/defaultNavLinksES";
import defaultNavLinks from "@/utils/constant/defaultNavLinks";

export default function Header() {
  const [isTop, setIsTop] = useState(true);
  const t = useTranslations("Header");
  const locale = useLocale();

  const handleScroll = () => {
    setIsTop(window.scrollY < 20); // transparent when near top
  };
  
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <header
      className={`fixed flex justify-center top-0 left-0 w-full z-50 transition duration-300 ${
        isTop ? "bg-transparent" : "bg-white shadow-md"
      }`}
      >
      <div className="w-full max-w-[1920px] px-4 sm:px-6 md:px-6 lg:px-6 xl:px-40">
        <div className="flex h-16 md:h-20 justify-between items-center">
          <div className="flex items-center w-60 px-0">
            <Link href="/">
              <Image
                alt={t("logoAlt")}
                width="250"
                height="55"
                decoding="async"
                data-nimg="1"
                className="w-full h-full"
                src="/it-support-logo.webp"
                priority
              />
            </Link>
          </div>
          <div className="hidden lg:flex flex-1 justify-center h-full">
            <nav className="w-full h-full">
              <div className="h-full hidden lg:flex items-center justify-center w-full">
                <HeaderNavItem
                  navItems={locale === "es" ? defaultNavLinksEs : defaultNavLinks}
                />
              </div>
            </nav>
          </div>
          <div className="hidden lg:flex">
            <Link
              className="inline-flex items-center justify-center gap-2 md:gap-3 px-5 py-2 md md:py-2 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-500 text-white font-bold rounded-full shadow-xl transition-all duration-300 ease-in-out transform hover:from-indigo-500 hover:to-teal-400 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 group text-sm md:text-base"
              href="/contact"
            >
              <span className="btn-title whitespace-nowrap tracking-wide uppercase drop-shadow-sm">
                {t("contact")}
              </span>
              <svg
                className="w-4 h-4 md:w-6 md:h-6 text-white group-hover:animate-bounce"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </Link>
          </div>
          <button
            className="text-[#61CE70] text-2xl md:text-3xl focus:outline-none lg:hidden"
            aria-label={t("openMenu")}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
