import { getMetaData } from "@/lib/seo";

export const generateMetadata = getMetaData('contact')

export default function Contact() {
  return (
    <>
      {/* <Head /> */}
      <div className="min-h-screen flex flex-col bg-white text-gray-900 font-[family-name:var(--font-geist-sans)]">
        Contact
      </div>
    </>
  );
}
