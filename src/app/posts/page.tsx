import PostsTemplate from "@templates/Posts/PostsTemplate";
import { fetchInitialPosts } from "../../services/posts/fetchInitialPosts";

export default async function Posts() {
  const initialData = await fetchInitialPosts();

  return <PostsTemplate initialData={initialData} />;
}
