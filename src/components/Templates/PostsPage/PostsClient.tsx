"use client";

import { useInfinitePosts } from "@/hooks/useInfinitePosts";
import { Post } from "@/gql/graphql";
import { PostCardHorizontal } from "@molecules/PostCardHorizontal/PostCardHorizontal";
import { Text } from "@atoms/Text";
import { PostCardHorizontalSkeleton } from "@molecules/PostCardHorizontal/PostCardHorizontalSkeleton";

type PostsClientProps = {
  initialPosts?: Post[];
  initialPageInfo?: {
    endCursor?: string | null;
    hasNextPage?: boolean;
  } | null;
};

export default function PostsClient({
  initialPosts = [],
  initialPageInfo = null,
}: PostsClientProps) {
  const { posts, loading, hasMore, loaderRef, error } = useInfinitePosts({
    posts: initialPosts,
    pageInfo: initialPageInfo,
  });

  return (
    <>
      <section className="mb-8 grid grid-cols-1">
        {posts.map((post) => (
          <PostCardHorizontal
            key={`post-card-${post.id}`}
            id={post.id}
            className="border-b-1"
            title={post?.title || ""}
            url={post?.uri || ""}
            excerpt={post?.excerpt || ""}
            date={post?.date || ""}
          />
        ))}

        {loading &&
          Array.from({ length: 2 }).map((_, idx) => (
            <PostCardHorizontalSkeleton key={`post-card-skeleton-${idx}`} />
          ))}
      </section>

      <div ref={loaderRef} className="flex justify-center items-center mt-12">
        {!hasMore && <Text as="span">End of posts</Text>}
      </div>

      {error && (
        <Text as="span" className="text-red-500 mt-6 text-center">
          Sorry, an error occurred when loading the posts. Try again!
        </Text>
      )}
    </>
  );
}
