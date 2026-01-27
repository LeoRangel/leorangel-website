import { Post } from "@/gql/graphql";
import { PostCardHorizontal } from "@molecules/PostCardHorizontal/PostCardHorizontal";

const PostList = ({ posts }: { posts: Post[] }) => {
  if (!posts?.length) return null;

  return (
    <>
      {posts.map((post) => (
        <PostCardHorizontal
          key={`post-card-${post.id}`}
          title={post?.title || ""}
          url={post?.uri || ""}
          excerpt={post?.excerpt || ""}
          image={{
            url: post?.featuredImage?.node?.sourceUrl || "",
            alt: post?.featuredImage?.node?.altText || "",
          }}
          date={post?.date || ""}
          tags={post?.tags?.nodes}
        />
      ))}
    </>
  );
};

export { PostList };
