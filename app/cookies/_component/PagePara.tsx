import Typography from "@/components/ui/Typography";
import { CookieBoxSlot } from "./CookieBoxSlot";
import parse from "html-react-parser";


type CookieParaProps = {
  title: string,
  desc?: string,
  children?: React.ReactNode
}

export function PagePara({title, desc, children}: CookieParaProps) {
  return (<>
    <CookieBoxSlot title={title}>
      {desc && <p className="w-full">
        {parse(desc)}
      </p>}
      {children}
    </CookieBoxSlot>
  </>)
}