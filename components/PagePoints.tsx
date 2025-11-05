import { PageBoxSlot } from "./PageBoxSlot"

type CookiePointsProps = {
  title?: string,
  subTitle?: string,
  points ?: {heading?: string, text: string}[],
  children?: React.ReactNode
  footerText?: string
}

export function PagePoint({children}: {children?: React.ReactNode}) {
  return (<>
    <li className="relative flex flex-col p-1 m-1 ml-4 items-start">
      {children}
      <span className="absolute -left-1 w-0 h-0 top-[1em] border-2"></span>
    </li>
  </>)
}

export function PagePointWithHeading({heading, text}: {heading?: string, text: string}) {
  return (<>
    <PagePoint>
      {heading && <span className="bg-[#0000000a] rounded-lg px-1 font-bold mr-2">{heading}</span>}
      <span className={`{${!heading && 'px-1 my-1 leading-3'} p-1`}>{text}</span>
    </PagePoint>
  </>)
}

export default function PagePoints({title, subTitle, points, footerText, children}: CookiePointsProps) {
  return (<>
    <PageBoxSlot title={title} subTitle={subTitle}>
      <ul className="relative w-full">
        {
          points?.length && points.map((point, i) => <PagePointWithHeading heading={point.heading} text={point.text} />)
        }
        {children}

      </ul>
      {footerText && <span>
        {footerText}
      </span>}
    </PageBoxSlot>
  </>)
}