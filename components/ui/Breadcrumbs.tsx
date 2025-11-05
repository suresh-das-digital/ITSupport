import parse from "html-react-parser";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

type Crumbs = {
  text: string,
  link?: string,
}
type Props = {
  bread: Crumbs[]
}

function BreadCrumbSep() {
  return (<>
    <ChevronRight className="mr-2" />
  </>)
}

export function Breadcrumbs({bread}: Props) {
  return (<>
    {
      bread.map((crumb, i) =>
        <div className="flex items-center" key={i}>
          {i !== 0 && <BreadCrumbSep />}
          <Link href={crumb.link||'#'}>
            <span className="capitalize">{crumb.text}</span>
          </Link>
        </div>)
    }
  </>)
}