import Typography from "@/components/ui/Typography";

export function Info({text, title}: {text: string, title?: string}) {
  return (<>
    <div className="flex flex-col p-5 xl:py-10 border-0 text-gray-700">
      {title && <Typography variant="h2">{title}</Typography>}
      <div className="flex items-center justify-center mt-5">
        <span className="text-center align-middle text-xl 2xl:mx-70 md:mx-0">{text}</span>
      </div>
    </div>
  </>)
}