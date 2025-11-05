export const basicMarkup = {
  b: (chunks: any) => `<b>${chunks}</b>`,
  br: (chunks: any) => `<br/>${chunks}`,
  at: (chunk: any) => `<a className="underline" href="${chunk}">${chunk}</a>`,
  siteTitle: (chunk: any) => `<span className="text-[#61CE70] hover:text-[#4CAF50] transition-colors duration-300">${chunk}</span>`
}

export function getBasicMarkup(t: any) {
  const tDepentMarkup = {
    a: (chunk: any) => `<a className='underline' href="${t("links."+chunk.join("_"))}">${chunk}</a>`
  }

  return {...basicMarkup, ...tDepentMarkup}
}