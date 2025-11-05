type MDProps = {
  params: Promise<any>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}