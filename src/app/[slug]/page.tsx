import React from "react";
import { notFound } from "next/navigation";
import PostContent, {
  PostContentType,
} from "../../components/SanityComponents/Post";
import "./../../components/style.css";
import ServiceContent, {
  ServiceContentType,
} from "../../components/SanityComponents/ServiceContent";
import { client } from "../../sanity/client";
import BlogSidebar from "../../components/BlogPage/BlogSidebar/BlogSidebar";

// =========================
// GROQ QUERIES
// =========================

const POST_QUERY = `{
  "post": *[_type == "post" && slug.current == $slug][0]{
    _id, title, slug, body,
    metaTitle,metaDescription,
    mainImage{ asset->{url} },
    publishedAt,
    youtubeVideoUrl,
    
    faq[]{ question, answer }
  },
  "carouselBlock": *[_type == "carouselBlock"][0]{
    title,
    images[]{ alt, caption, link, asset->{ url } }
  }
}`;

const SERVICE_QUERY = `{
  "service": *[_type == "ServiceCategory" && slug.current == $slug][0]{
    _id, title, slug, body1, body2,
    metaTitle,metaDescription,
    mainImage{ asset->{url} },
    youtubeVideoUrl,
    faq[]{ question, answer },
   tableOfContent[]{
      title
    },
    customTable{ title, headers, rows[]{ cells } }
  },
  "carouselBlock": *[_type == "carouselBlock"][0]{
    title,
    images[]{ alt, caption, link, asset->{ url } }
  },

}`;

export const revalidate = 0;

// =========================
// TYPES
// =========================

type SlugParams = { slug: string };

type CarouselImage = {
  alt?: string;
  caption?: string;
  link?: string;
  asset?: { url?: string };
};

type CarouselBlock = {
  title?: string;
  images?: CarouselImage[];
};

// =========================
// PAGE LOGIC
// =========================

import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  // 1️⃣ Try POST
  const postData = await client.fetch<{
    post: {
      title?: string;
      metaTitle?: string;
      metaDescription?: string;
    } | null;
  }>(POST_QUERY, { slug });

  if (postData?.post) {
    return {
      title:
        postData.post.metaTitle ||
        postData.post.title ||
        "Prime Clean Blog",
      description:
        postData.post.metaDescription ||
        "Read expert articles from Prime Clean.",
    };
  }

  // 2️⃣ Try SERVICE
  const serviceData = await client.fetch<{
    service: {
      title?: string;
      metaTitle?: string;
      metaDescription?: string;
    } | null;
  }>(SERVICE_QUERY, { slug });

  if (serviceData?.service) {
    return {
      title:
        serviceData.service.metaTitle ||
        serviceData.service.title ||
        "Prime Clean Services",
      description:
        serviceData.service.metaDescription ||
        "Professional services by Prime Clean.",
    };
  }

  // 3️⃣ Not found
  return {
    title: "Not Found | Prime Clean",
    description: "The page you are looking for does not exist.",
  };
}

export default async function SlugPage({
  params: paramsPromise,
}: {
  params: Promise<SlugParams>;
}) {
  const { slug } = await paramsPromise;

  // 1️⃣ POST
  const postData = await client.fetch<{
    post: PostContentType | null;
    carouselBlock: CarouselBlock | null;
  }>(POST_QUERY, { slug });

  if (postData.post) {
    return (
      <div className="blog-container">
        <PostContent
          content={{
            ...postData.post,
            carouselBlock: postData.carouselBlock ?? undefined,
          }}
        />
        <div className="blog-wrapper2">
          <BlogSidebar />
        </div>
      </div>
    );
  }

  // 2️⃣ SERVICE
  const serviceData = await client.fetch<{
    service: ServiceContentType | null;
    carouselBlock: CarouselBlock | null;
  }>(SERVICE_QUERY, { slug });

  if (serviceData.service) {
    return (
      <ServiceContent
        content={{
          ...serviceData.service,
          carouselBlock: serviceData.carouselBlock ?? undefined,
        }}
      />
    );
  }
  return notFound();
}
