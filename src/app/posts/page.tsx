import { Metadata } from "next";
import { POSTS_DEFAULT_SEO } from "@/data/seo";
import PostsTemplate from "@templates/Posts/PostsTemplate";
import { fetchInitialPosts } from "@services/wordpress/posts/fetchInitialPosts";

export const metadata: Metadata = POSTS_DEFAULT_SEO;

export default async function Posts() {
  const initialData = await fetchInitialPosts();
  return <PostsTemplate initialData={initialData} />;
}
