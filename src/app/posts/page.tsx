import PostsPageTemplate from "@templates/PostsPage/PostPageTemplate";
import { fetchInitialPosts } from "../../services/posts/fetchInitialPosts";

export default async function PostsPage() {
  const initialData = await fetchInitialPosts();

  return <PostsPageTemplate initialData={initialData} />;
}
