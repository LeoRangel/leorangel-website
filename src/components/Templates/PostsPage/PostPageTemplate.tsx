import PostsClient from "@templates/PostsPage/PostsClient";
import { Container } from "@atoms/Container";
import { Heading } from "@atoms/Heading";
import { PostsResponse } from "@services/posts/fetchInitialPosts";

type Props = {
  initialData: PostsResponse;
};

export default function PostsPageTemplate({ initialData }: Props) {
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
