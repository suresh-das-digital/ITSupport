import { PageBoxSlot } from "./PageBoxSlot"

type PageCardProps = {
  title?: string,
  subTitle?: string,
  serial: number,
  noImage?: boolean,
  imageSrc?: string,
  children: React.ReactNode,
  imageRatio?: number,
}

export function PageSubSection({title, children}: {title?: string, children: React.ReactNode}) {
  return (<>
    <div className="my-2">
      <span className="font-bold size-2">{title}</span>
      {children}
    </div>
  </>)
}

export default function PageCard({title, subTitle, serial, children, noImage, imageSrc, imageRatio=0.2}: PageCardProps) {
  return (<>
    <section className={`flex w-full ${serial%2===0 ? 'bg-[#00000003] flex-row-reverse' : 'bg-white'} ${serial===1 && 'my-3'} overflow-hidden rounded-lg mb-3`}>
      <div className="flex-1 p-4">
        {
          (title||subTitle) 
          ?
          (<PageBoxSlot title={title} subTitle={subTitle}>
            {children}
          </PageBoxSlot>)
          :
          children
        }
      </div>
      {!noImage && <div style={{width: `${imageRatio*100}%`}}>
        <div 
          style={{
            backgroundImage: `url(${imageSrc || "/assets/cookie.svg"})`
          }}
          className={`h-full w-full bg-no-repeat bg-center`}></div>
      </div>}
    </section>
  </>)
}