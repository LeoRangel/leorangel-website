"use client";

import { Post } from "@/gql/graphql";
import { useState, useEffect, useCallback, useRef } from "react";

type PageInfoType = {
  endCursor?: string | null;
  hasNextPage?: boolean;
};

type InitialData = {
  posts: Post[];
  pageInfo: PageInfoType | null;
};

export function useInfinitePosts(initialData?: InitialData) {
  const [posts, setPosts] = useState<Post[]>(initialData?.posts || []);
  const [pageInfo, setPageInfo] = useState<PageInfoType | null>(
    initialData?.pageInfo || null
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loaderRef = useRef<HTMLDivElement | null>(null);

  const loadMore = useCallback(async () => {
    if (loading || !pageInfo?.hasNextPage || error) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`/api/posts?after=${pageInfo.endCursor ?? ""}`);
      if (!res.ok) throw new Error("Erro ao carregar posts");

      const data = await res.json();
      setPosts((prev) => [...prev, ...data.posts]);
      setPageInfo(data.pageInfo);
    } catch (err: any) {
      setError(err.message || "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  }, [loading, pageInfo]);

  useEffect(() => {
    if (!loaderRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && pageInfo?.hasNextPage) {
          loadMore();
        }
      },
      {
        rootMargin: "200px",
      }
    );

    const current = loaderRef.current;
    observer.observe(current);

    return () => {
      observer.unobserve(current);
    };
  }, [loadMore, pageInfo]);

  return {
    posts,
    loading,
    error,
    hasMore: pageInfo?.hasNextPage ?? false,
    loaderRef,
  };
}
