import { Separator } from "@/components/ui/separator";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { Post, PostConnection } from "@/gql/graphql";
import { LatestPostsQuery } from "./LatestPostsQuery";
import { print } from "graphql";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PostCard } from "@/components/Globals/PostCard/PostCard";

async function getData(): Promise<Post[]> {
  try {
    const { posts } = await fetchGraphQL<{ posts: PostConnection }>(
      print(LatestPostsQuery)
    );

    return posts?.nodes || [];
  } catch (error) {
    console.info("Erro ao buscar posts na API.");
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
          <PostCard
            key={`post-card-${post.id}`}
            title={post?.title || ""}
            url={post?.uri || ""}
            excerpt={post?.excerpt || ""}
            imgUrl={post?.featuredImage?.node?.sourceUrl || ""}
            imgAlt={post?.featuredImage?.node?.altText || ""}
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
          Últimos posts
        </h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 overflow-visible">
          {postsCards()}
        </div>
      </div>
    </section>
  );
};

export { LatestPostsHome };
