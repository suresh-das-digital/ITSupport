import Typography from "@/components/ui/Typography";
import { PageBoxSlot } from "./PageBoxSlot";
import parse from "html-react-parser";


type CookieParaProps = {
  title?: string,
  subTitle?: string,
  desc?: string,
  children?: React.ReactNode
}

export function PageParaPara({children, className}: {children: React.ReactNode, className?: string}) {
  return (<>
    <div className={`${className || ''}`}>
      <span>
        {children}
      </span>
    </div>
  </>)
}

export function PagePara({title, desc, children, subTitle}: CookieParaProps) {
  return (<>
    <PageBoxSlot title={title} subTitle={subTitle}>
      <div className="grid grid-cols-1 gap-3">
        {desc && <p className="w-full">
          {parse(desc)}
        </p>}
        {children}
      </div>
    </PageBoxSlot>
  </>)
}