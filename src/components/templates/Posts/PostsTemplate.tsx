import PostsClient from "@templates/Posts/PostsClient";
import { Container } from "@atoms/Container";
import { Heading } from "@atoms/Heading";
import { PostsResponse } from "@services/posts/fetchInitialPosts";
import { Aside } from "@organisms/Aside/Aside";

type Props = {
  initialData: PostsResponse;
};

export default function PostsTemplate({ initialData }: Props) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Container variant="fullMobileConstrainedPadded">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[320px_1fr_auto]">
          <Aside className="mt-4 md:mt-6 lg:mt-12 lg:sticky lg:top-12 h-fit" />

          <main className="space-y-12 lg:space-y-24 pb-12 lg:py-12">
            <section>
              <Heading as="h1" unstyled>
                Todos os posts
              </Heading>

              <PostsClient
                initialPosts={initialData.posts}
                initialPageInfo={initialData.pageInfo}
              />
            </section>
          </main>
        </div>
      </Container>
    </div>
  );
}
