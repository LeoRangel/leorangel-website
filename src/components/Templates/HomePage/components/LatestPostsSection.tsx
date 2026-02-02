import { print } from "graphql";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { Post, PostConnection } from "@/gql/graphql";
import { LatestPostsQuery } from "@queries/posts/LatestPostsQuery";
import { Heading } from "@atoms/Heading";
import { Text } from "@atoms/Text";
import { PostList } from "@organisms/PostList";
import { homeContent } from "@/data/pages-content/home";

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
}

const LatestPostsSection = async ({
  id,
  className,
}: LatestPostsSectionProps) => {
  const posts = await getData();

  const hasPosts = posts && posts?.length > 0;

  return (
    <section id={id} className={className}>
      <div className="mb-8">
        <Heading
          as="h2"
          weight="extrabold"
          className="text-3xl md:text-4xl mb-4"
        >
          {homeContent.sections.latestPosts.title}
        </Heading>

        <Text as="p" variant="muted">
          {homeContent.sections.latestPosts.description}
        </Text>
      </div>

      <div className="w-full grid gap-4">
        {hasPosts && <PostList posts={posts} />}
        {!hasPosts && <Text variant="muted">Em breve...</Text>}
      </div>
    </section>
  );
};

export { LatestPostsSection };
