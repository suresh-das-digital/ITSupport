import React from "react";
import { useTranslations } from "next-intl";
import { LuCheck } from "react-icons/lu";

export default function BlogInfos() {
  const t = useTranslations("achievement");
  return (
    <section className="py-16 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-6xl 2xl:max-w-[1488px] mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
            Why Readers Keep Coming Back
        </h2>

        <div className="flex items-center justify-center">
          
          <ul className="mt-3 space-y-3">
            {[
                "<p><strong>Trustworthy Content:</strong> Written and reviewed by our <strong>certified IT professionals</strong></p>",
                "<p><strong>Easy-to-Understand Language:</strong> We avoid jargon unless necessary and explain complex terms.</p>",
                "<p><strong>Actionable Advice:</strong> Every article provides <strong>clear steps</strong> you can implement immediately</p>",
                "<p><strong>Regular Updates:</strong> Our blog stays current with <strong>weekly posts</strong> covering hot topics and long-term strategies.</p>"
            ].map((text, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <LuCheck size={30} className=" text-green-600 mt-1 " aria-hidden="true" />
                <div className="text-gray-800 text-lg" dangerouslySetInnerHTML={{__html:text}} />
              </li>
            ))}
          </ul>
        </div>
        
          
        <div className="p-3 flex flex-col items-center border-4 shadow-xl shadow-cyan-50 border-cyan-400 rounded-3xl  lg:mx-0 mt-10 mb-6">
          <h2 className="text-3xl  font-bold text-center mt-3 text-cyan-600">
          Join the Conversation
          </h2>
          <p className="text-gray-800 mb-6 text-xl mt-4 text-center">
            We encourage readers to <strong>comment on posts, ask questions, and share feedback</strong>. Whether you&rsquo;re looking for a specific troubleshooting guide, want us to review a tool, or need advice on a business IT challenge, our blog is here to support you.
          </p>
          <p className="text-gray-800 mb-6 text-xl mt-4 text-center">
            You can also <strong>subscribe</strong> to get the latest posts directly in your inbox, or follow us on social media for <strong>real-time updates</strong>.
          </p>
        </div>

        <div className="p-3 flex flex-col items-center border-4 shadow-xl shadow-blue-50 border-blue-400 rounded-3xl  lg:mx-0 mt-10 mb-6">
          <h2 className="text-3xl  font-bold text-center mt-3 text-blue-600">
          Our Commitment to Content Accuracy
          </h2>
          <p className="text-gray-800 mb-6 text-xl mt-4 text-center">
          Every blog post is created with <strong>research-backed insights</strong>, <strong>practical field experience</strong>, and <strong>input from certified IT experts</strong>. Before publishing, we verify information against <strong>industry standards and best practices</strong> to ensure you can rely on our guidance.
          </p>
          
        </div>


        <div className="p-3 flex flex-col items-center border-4 shadow-xl shadow-purple-50 border-purple-400 rounded-3xl  lg:mx-0 mt-10 mb-6">
          <h2 className="text-3xl  font-bold text-center mt-3 text-purple-600">
          Final Word
          </h2>
          <p className="text-gray-800 mb-6 text-xl mt-4 text-center">
          The <strong>ITSupport.net.in Blog</strong> isn&rsquo;t just another tech blog&mdash;it&rsquo;s a <strong>living library of IT expertise</strong> designed to <strong>empower you, protect your systems, and help you grow</strong> in the digital age. Whether you visit us for <strong>quick tips</strong> or <strong>in-depth technical insights</strong>, you&rsquo;ll leave with <strong>knowledge you can use right away</strong>
          </p>
          
        </div>

      </div>
    </section>
  );
}
