import { createClient } from '@sanity/client';
import type { PortableTextBlock } from '@portabletext/types';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || 's7ek0e64',
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'artigos',
  useCdn: false, // para SSG no build
  apiVersion: '2023-05-03',
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  shortDescription: string;
  mainImage: any;
  content: PortableTextBlock[];
  author: { name: string; image: any };
  category: { title: string, slug?: { current: string } };
  tags: string[];
  publishedAt: string;
}

export async function getPosts(): Promise<Post[]> {
  return await sanityClient.fetch(`*[_type == "post" && status == "published"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    shortDescription,
    mainImage,
    "author": author->{name, image},
    "category": category->{title, slug},
    tags,
    publishedAt,
    content
  }`);
}

export async function getPost(slug: string): Promise<Post> {
  return await sanityClient.fetch(`*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    shortDescription,
    mainImage,
    "author": author->{name, image},
    "category": category->{title, slug},
    tags,
    publishedAt,
    content
  }`, { slug });
}

export async function getPostsByCategory(categorySlug: string): Promise<Post[]> {
  return await sanityClient.fetch(`*[_type == "post" && status == "published" && category->slug.current == $categorySlug] | order(publishedAt desc) {
    _id,
    title,
    slug,
    shortDescription,
    mainImage,
    "author": author->{name, image},
    "category": category->{title, slug},
    tags,
    publishedAt,
    content
  }`, { categorySlug });
}

export async function getCategories(): Promise<{title: string, slug: {current: string}, description: string}[]> {
  return await sanityClient.fetch(`*[_type == "category"] {
    title,
    slug,
    description
  }`);
}

