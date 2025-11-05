import {  getAllInsightNews, getinsightNewsBySlug,  } from '@/lib/insightBlogData';
import { Metadata } from 'next';
import React from 'react'


interface InsightBlogProps {
    params: { slug: string };
  }
  
  export async function generateStaticParams() {
    const blog = await getAllInsightNews(); // Use the function to fetch all blog posts
  
    // Map the blog posts to the required format: { slug: 'value' }
    return blog.map((props) => ({
      slug: props.slug,
    }));
  }
  
  export async function generateMetadata({ params }: InsightBlogProps): Promise<Metadata> {
    const blog = await getinsightNewsBySlug(params.slug);
    if (!blog) {
      return {
        title: "Blog post not found",
        description: "The blog post you are looking for does not exist.",
      };
    }
    // Return full metadata object from blog.metadata
    return {
      ...blog.metaData,
    };
  }

const page = ({params}:InsightBlogProps) => {
  return (
    <div>{params.slug}</div>
  )
}

export default page