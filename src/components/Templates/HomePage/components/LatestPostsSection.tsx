import { print } from "graphql";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { Post, PostConnection } from "@/gql/graphql";
import { LatestPostsQuery } from "@queries/posts/LatestPostsQuery";
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

interface LatestPostsSectionProps {
  id?: string;
  className?: string;
  heading?: string;
  description?: string;
}

const LatestPostsSection = async ({
  id,
  className,
  heading = "Últimos posts",
  description = "Compartilhando alguns aprendizados e experiências reais do dia a dia",
}: LatestPostsSectionProps) => {
  const posts = await getData();

  if (!posts || posts?.length < 1) null;

  return (
    <section id={id} className={className}>
      <div className="mb-8">
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
      </div>

      <div className="w-full grid gap-4">
        <PostList posts={posts} />
      </div>
    </section>
  );
};

export { LatestPostsSection };
