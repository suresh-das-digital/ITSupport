import Header from "@/components/Header";
import Footer from "@/components/Footer/Footer";

import "./globals.css";

import { NextIntlClientProvider } from "next-intl";
import Script from "next/script";
import MainWrapper from "@/components/MainWrapper";
// import { getMetaData } from "@/lib/seo";
// import { ResolvingMetadata } from "next";
// import { useRouter } from "next/router";
// import { headers } from 'next/headers'
// import { metas } from "@/lib/metas";
// import { renderToStaticMarkup } from "react-dom/server";
// import { MyEventHandler } from "./my-event-handler";
// import { usePathname } from "next/navigation";



// export async function generateMetadata({ params, searchParams }: MDProps) {
//   const headersList = await headers()
//   const pathname = headersList.get('pathname');
//   if (!pathname) {
//     return {}
//   }
//   const name = pathname.split('/')[1].replace(/-/g, '')

//   const md = getMetaData(name);

//   const {slug} = await params;

//   console.log('->', slug)
//   // return await md(arg0, arg1);
// }

// export async function generateStaticParams(params: any) {
//   console.log('=>', await params)
//   return [];
//   // const headersList = await headers()
//   // const pathname = headersList.get('pathname');
//   // if (!pathname) { return [] }
//   // const name = pathname.split('/')[1].replace(/-/g, '')
//   // return Object.keys(metas[name]).map((m) => ({ slug: m || "" }));
// }


export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: any;
}>) {
  const paramsData = await params;

  const lang = paramsData?.locale ? "es" : 'en';
  
  // const markup = renderToStaticMarkup(children)
  // console.log(paramsData)

  return (
    <html lang={lang ?? "en"}>
      <head>
        <meta
          name="google-site-verification"
          content="qtFAe8aaDuGoFo6mrruPpnZXdrtPG3XDXjDXYtywIP0"
        />
        {/* {JSON.stringify(paramsData)} */}
        <Script
          async
          id="tawkto"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (async function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/68d0dc2979251e1928fac1ce/1j5nto18h';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `,
          }}
        />
      </head>
      <body>
        <NextIntlClientProvider>
          <MainWrapper>
              <Header />
                <main className="flex flex-col justify-center items-center mt-16 md:mt-20   w-full "> {/* xl:px-40 max-w-[1920px] md:px-4 */}
                  
                  <div className="m-auto flex min-w-full flex-col text-gray-900 font-[family-name:var(--font-geist-sans)]">
                      {children}
                      {/* {JSON.stringify(children)} */}
                  </div>
                </main>
            <Footer />
          </MainWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
