// components/BlogAudienceSection.tsx

export default function WhoOurBlogsIsFor() {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl 2xl:max-w-[1488px] mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
            Who Our Blog is For
          </h2>
  
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 - Businesses */}
            <div className="rounded-2xl p-8 bg-gradient-to-br from-blue-50 to-purple-50 shadow-sm">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                For Businesses (B2B)
              </h3>
  
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our blog serves as a <strong>knowledge partner</strong> for business leaders, 
                IT managers, and technical teams who need 
                <strong> scalable, secure, and cost-efficient solutions.</strong>
                By following our content, businesses can:
              </p>
  
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-blue-600 text-xl">•</span>
                  Minimize downtime with <strong>proactive IT strategies.</strong>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 text-xl">•</span>
                  Ensure <strong>compliance and data security.</strong>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 text-xl">•</span>
                  Reduce IT costs through <strong>efficient resource allocation.</strong>
                </li>
              </ul>
            </div>
  
            {/* Card 2 - Individuals */}
            <div className="rounded-2xl p-8 bg-gradient-to-br from-blue-50 to-purple-50 shadow-sm">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                For Individuals (B2C)
              </h3>
  
              <p className="text-gray-700 leading-relaxed">
                We help home users, freelancers, and small business owners 
                <strong> troubleshoot common tech issues</strong>, secure personal devices, 
                and <strong>get the most out of their technology investments</strong> — 
                without requiring advanced technical expertise.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  