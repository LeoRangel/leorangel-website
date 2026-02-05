import { PageInfo, Post } from "@/gql/graphql";

export type PostsResponse = {
  posts: Post[];
  pageInfo: PageInfo | null;
};

export async function fetchInitialPosts(): Promise<PostsResponse> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch initial posts");
    }

    const data = await res.json();

    return {
      posts: data?.posts || [],
      pageInfo: data?.pageInfo || null,
    };
  } catch (error) {
    console.error("Error fetching initial posts:", error);
    return {
      posts: [],
      pageInfo: null,
    };
  }
}
