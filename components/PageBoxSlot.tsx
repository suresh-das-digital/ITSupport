import Typography from "@/components/ui/Typography";

export function PageBoxSlot({title, subTitle, children}: {title?: string, subTitle?: string, children: React.ReactNode}) {
  return (<>
    <section className="text-gray-700 w-full">
      {title && <Typography variant="h3" className="text-left mb-3">
        {title}
      </Typography>}
      {subTitle && <p className="text-left mb-1">
        {subTitle}
      </p>}
      <div className="flex flex-col w-full">
        {children}
      </div>
    </section>
  </>)
}