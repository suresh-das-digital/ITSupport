
export default function Cookiesinfo() {
  const sections = [
    {
      title: "Third-Party Cookies",
      content: (
        <>
          <p>
            We may use third-party services (e.g., Google Analytics, chat tools)
            that place their own cookies to analyze traffic or provide services.
            These cookies are governed by the respective third party’s privacy
            practices. The Washington Post · New York Post
          </p>
        </>
      ),
    },
    {
      title: "Consent & Choice",
      content: (
        <>
          <p>
            In the U.S., we operate under an opt-out framework. Except for
            essential cookies, optional cookies are set only after you provide
            consent via the cookie banner. You may withdraw this consent at any
            time. Womble Bond Dickinson · All About Cookies
          </p>

          <p className="mt-3">
            We do not employ deceptive or manipulative (“dark pattern”) consent
            designs, in accordance with FTC guidelines. Business Law Review
          </p>
        </>
      ),
    },
    {
      title: "How to Manage Cookies",
      content: (
        <>
          <ul className="list-disc pl-5 space-y-3">
            <li>Use our site’s Cookie Settings panel (if available).</li>
            <li>
              Adjust your browser settings to block or delete cookies (Chrome,
              Firefox, Safari). — The Washington Post
            </li>
            <li>
              Opt out of advertising cookies via NAI or DAA tools. — The
              Washington Post
            </li>
          </ul>

          <p className="mt-3">
            Disabling cookies may reduce functionality or usability of the site.
          </p>
        </>
      ),
    },
    {
      title: "Legal Context & Updates",
      content: (
        <>
          <p>
            The U.S. has no unified federal cookie law, but the FTC Act is used
            to regulate deceptive cookie practices. Womble Bond Dickinson · Medium
          </p>

          <p className="mt-3">
            In California, the CCPA/CPRA treats some cookies as personal
            information, requiring transparency and opt-out choices. All About
            Cookies · CookieYes
          </p>

          <p className="mt-3">
            We maintain a visible cookie policy as required by CalOPPA. Syrenis
          </p>

          <p className="mt-3">
            This policy is reviewed and updated as laws and technologies evolve.
            The updated effective date will always be displayed.
          </p>
        </>
      ),
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 flex flex-col gap-4 border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-sky-700">
              {section.title}
            </h2>

            <div className="text-gray-700 leading-relaxed text-base flex flex-col gap-3">
              {section.content}
            </div>
          </div>
        ))}

      </div>
      <div className="w-[90vw] lg:w-full mt-14 max-w-4xl md:max-w-7xl 2xl:max-w-[1488px] mx-auto p-6 md:p-7 bg-gradient-to-r from-gray-900 to-cyan-600 rounded-3xl shadow-lg flex flex-col items-center">
          <h2 className="text-white text-center text-2xl  font-bold leading-snug mb-5">
          Contact Us <br className="md:hidden"/> 
          </h2>
          <p className="text-white text-opacity-80 text-center text-lg  mb-6 max-w-4xl">
          For questions about our cookie practices, or to request cookie-related preferences or deletions, please contact:

          </p>
          <p className="text-white text-opacity-80 text-center text-lg  mb-6 max-w-4xl">
          <strong>Email : </strong><a href="mailto:assist@itsupport.net.in">assist@itsupport.net.in</a>
          </p>
          <p className="text-white text-opacity-80 text-center text-lg  mb-6 max-w-4xl">
          We are committed to maintaining transparency and respecting your privacy.

          </p>
          
        </div>
    </section>
  );
}
