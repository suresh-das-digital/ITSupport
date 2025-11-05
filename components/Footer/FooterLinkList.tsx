import Link from "next/link";
import React from "react";

export interface FooterLink {
  label: string;
  href: string;
  theme?: any,
  icon?: React.ReactNode;
}

interface FooterLinkListProps {
  title: string;
  links?: FooterLink[];
  titleHref: string;
}

const FooterLinkList: React.FC<FooterLinkListProps> = ({
  title,
  links,
  titleHref,
}) => (
  <div className="md:col-span-1">
    <h3 className="text-lg font-semibold text-sky-400 mb-4 text-left">
      {titleHref ? (
        <Link
          href={titleHref}
          className="cursor-pointer hover:text-sky-300 transition-colors"
        >
          {title}
        </Link>
      ) : (
        title
      )}
    </h3>
    <ul className="space-y-2">
      {links?.map((link) => (
        <li key={`FooterLinkList-link.href-${link.href}`}>
          <Link
            href={link.href}
            style={link.theme}
            className="cursor-pointer flex items-center px-5 md:px-0 text-gray-300 hover:text-[var(--color)] transition-colors text-sm"
          >
            {link.icon && link.icon}
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default FooterLinkList;
