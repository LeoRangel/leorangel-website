import { print } from "graphql";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { Post, PostConnection } from "@/gql/graphql";
import { LatestPostsQuery } from "@queries/posts/LatestPostsQuery";
import { Container } from "@atoms/Container";
import { Heading } from "@atoms/Heading";
import { Text } from "@atoms/Text";
import { PostList } from "@organisms/PostList";

async function getData(): Promise<Post[]> {
  try {
    const { posts } = await fetchGraphQL<{ posts: PostConnection | null }>(
      print(LatestPostsQuery),
    );

    return posts?.nodes || [];
  } catch (error) {
    console.info("Error searching for latest posts.");
    console.info(error);
    return [];
  }
}

interface LatestPostsHomeProps {
  heading?: string;
  description?: string;
}

const LatestPostsHome = async ({
  heading = "Últimos posts",
  description = "Compartilhando alguns aprendizados e experiências reais do dia a dia",
}: LatestPostsHomeProps) => {
  const posts = await getData();

  if (!posts || posts?.length < 1) null;

  return (
    <section id="blog" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <Container variant="narrowConstrainedPadded">
        <Heading
          as="h2"
          weight="extrabold"
          className="text-3xl md:text-4xl mb-4"
        >
          {heading}
        </Heading>

        <Text as="p" variant="muted">
          {description}
        </Text>

        <div className="w-full grid gap-4 mt-12">
          <PostList posts={posts} />
        </div>
      </Container>
    </section>
  );
};

export { LatestPostsHome };
