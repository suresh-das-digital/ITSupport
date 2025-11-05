import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
// import { RightArrow } from "../svgs";
// import { ArrowRight } from "lucide-react";
// import { ChevronRight } from "@mui/icons-material";

interface CoreServiceCardProps {
  label?: string;
  desc?: string;
  icon?: string | React.ReactNode;
  href?: string;
  theme?: any;
  children?: React.ReactNode;
}

function CardTitle({icon, label}: CoreServiceCardProps) {
  return (
    <>
      <div className="flex items-center mb-4">
        {icon && icon}
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[var(--color)] transition-colors duration-100">
          {label}
        </h3>
      </div>
    </>
  );
}

function CardText({desc}: CoreServiceCardProps) {
  return (
    <p className="text-gray-700">{desc}</p>
  )
}

function CardMore(props: CoreServiceCardProps) {
  return (<>
    <div className="bottom-2 right-2 text-xs absolute group-hover:flex hidden items-center">
      Read More <ChevronRight />
    </div>
  </>)
}

function CardContent(props: CoreServiceCardProps) {
  return (<>
    <Link href={props.href || "/"} className="cursor-pointer">
      <CardTitle {...props} />
      <CardText {...props} />
      <CardMore {...props} />
    </Link>
  </>)
}

export default function CoreServiceCard(props: CoreServiceCardProps) {
  return (
    <div
      className="relative group bg-white rounded-lg shadow-lg p-6 hover:shadow-xl border-2 border-transparent hover:border-[var(--color)]  hover:bg-[oklch(from_var(--color)_l_c_h/0.1)] transition-all duration-50 hover:scale-101 cursor-pointer"
      style={{ opacity: 1, transform: "none", ...props?.theme }}
    >
      {
        props.children || <CardContent {...props} />
      }
    </div>
  );
}
