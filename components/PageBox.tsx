import Typography from "./ui/Typography"

type Props = {
  title?: string,
  subTitle?: string,
  count?: number,
  children?: React.ReactNode
}

function BoxHeader({title, subTitle}: Props) {
  return (<>
    <Typography
      variant="h2"
      className="font-bold mb-8 text-center text-gray-800"
    >
      {title}
    </Typography>
    {subTitle && (
      <Typography
        variant="p"
        className="text-gray-600 mb-8 text-center max-w-5xl mx-auto"
        htmlString={subTitle || ""}
      />
    )}
  </>)
}

export function PageBox({title, subTitle, count, children}: Props) {
  return (<>
    <div className="py-8 w-full px-4">
      <BoxHeader title={title} subTitle={subTitle} />
      <div className={`grid ${count === 1 ? 'md:grid-cols-1' : 'md:grid-cols-2'} justify-center items-stretch gap-4`}>
        {children}
      </div>
    </div>
  </>)
}