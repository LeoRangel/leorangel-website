import { print } from "graphql";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { Post, PostConnection } from "@/gql/graphql";
import { LatestPostsQuery } from "@queries/posts/LatestPostsQuery";
import { PostCardHorizontal } from "@molecules/PostCardHorizontal/PostCardHorizontal";

async function getData(): Promise<Post[]> {
  try {
    const { posts } = await fetchGraphQL<{ posts: PostConnection | null }>(
      print(LatestPostsQuery)
    );

    return posts?.nodes || [];
  } catch (error) {
    console.info("Error searching for latest posts.");
    console.info(error);
    return [];
  }
}

const LatestPostsHome = async () => {
  const posts = await getData();

  if (!posts || posts?.length < 1) <></>;

  const postsCards = () => (
    <>
      {posts?.map((post) => {
        return (
          <PostCardHorizontal
            className="border-b-1"
            key={`post-card-${post.id}`}
            title={post?.title || ""}
            url={post?.uri || ""}
            excerpt={post?.excerpt || ""}
            image={{
              url: post?.featuredImage?.node?.sourceUrl || "",
              alt: post?.featuredImage?.node?.altText || "",
            }}
            date={post?.date || ""}
          />
        );
      })}
    </>
  );

  return (
    <section className="py-20">
      <div className="container">
        <h2 className="not-prose mb-8 text-2xl font-bold text-pretty lg:text-3xl">
          Latest posts
        </h2>
        <section className="w-full mb-8 grid grid-cols-1">
          {postsCards()}
        </section>
      </div>
    </section>
  );
};

export { LatestPostsHome };
