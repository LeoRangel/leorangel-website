import { Container } from "@atoms/Container";
import { Heading } from "@atoms/Heading";
import PostsClient from "./PostsClient";

async function fetchInitialPosts() {
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

export default async function PostsPage() {
  const initialData = await fetchInitialPosts();

  return (
    <Container variant="narrowConstrainedPadded">
      <section className="mt-12">
        <Heading as="h1" unstyled>
          Posts
        </Heading>
      </section>
      <PostsClient
        initialPosts={initialData.posts}
        initialPageInfo={initialData.pageInfo}
      />
    </Container>
  );
}
