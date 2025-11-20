import FaqSection from '@/components/common/FaqSection'
import HeroInformattionPage from '@/components/common/HeroInformattionPage'
import React from 'react'
import BlogMattersSection from './components/BlogMattersSection';
import BlogYouWillFind from './components/BlogYouWillFind';
import WhoOurBlogsIsFor from './components/WhoOurBlogsIsFor';
import BlogInfos from './components/BlogInfos';

const faqs = [
  {
    label: "What topics does the ITSupport.net.in Blog cover?",
    desc: "We cover IT support, network solutions, cybersecurity, cloud computing, troubleshooting guides, and industry trends—all tailored for both businesses and individual users.",
  },
  {
    label: "How often is the blog updated?",
    desc: "Our blog is updated weekly to ensure you have access to the latest insights, tips, and news in the IT services sector.",
  },
  {
    label: "Can I contribute to the blog as a guest author?",
    desc: "Yes. We welcome guest contributions from IT professionals with original, valuable content relevant to our audience.",
  },
  {
    label: "How do you ensure your blog content is accurate?",
    desc: "All posts are researched, written, and reviewed by certified IT experts, ensuring accuracy, relevance, and practical usability.",
  },
  {
    label: "How can I subscribe or share blog posts?",
    desc: "You can subscribe via our email newsletter or follow us on social media for updates. Sharing is easy—use the social share buttons on each post to send articles to your network.",
  }
];

const page = () => {
  return (
    <div>
      <HeroInformattionPage
        title='ITSupport.net.in Blog – Your Go-To Resource for IT Support & Network Solutions'
        subtitle1=''
        subtitle2=''
        pageName='Insights  →  Blogs'
      />
      <BlogMattersSection/>
      <BlogYouWillFind/>
      <WhoOurBlogsIsFor/>
      <BlogInfos/>
      <FaqSection
        faqs={faqs}
      />
    </div>
  )
}

export default page