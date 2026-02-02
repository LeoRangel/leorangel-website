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
      <div className="mb-8 flex flex-col space-y-4">
        {posts.map((post) => (
          <PostCardHorizontal
            key={`post-card-${post.id}`}
            id={post.id}
            title={post?.title || ""}
            url={post?.uri || ""}
            excerpt={post?.excerpt || ""}
            date={post?.date || ""}
            tags={post?.tags?.nodes}
          />
        ))}

        {loading &&
          Array.from({ length: 2 }).map((_, idx) => (
            <PostCardHorizontalSkeleton key={`post-card-skeleton-${idx}`} />
          ))}
      </div>

      <div ref={loaderRef} className="flex justify-center items-center mt-12">
        {!hasMore && <Text as="span">Fim dos posts</Text>}
      </div>

      {error && (
        <Text as="span" className="text-red-500 block my-12 text-center">
          Desculpe, ocorreu um erro enquanto carregando os posts. Tente
          novamente!
        </Text>
      )}
    </>
  );
}
