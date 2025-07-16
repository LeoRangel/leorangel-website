import { MetadataRoute } from "next";

export const revalidate = 0;

async function getTotalCounts() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp-json/sitemap/v1/totalpages`,
      { cache: "no-store" }
    );

    if (!response.ok) throw new Error("Failed to fetch total counts");

    const data = await response.json();
    if (!data) return [];

    const propertyNames = Object.keys(data);
    const excludeItems = ["page", "user", "category", "tag"];

    return propertyNames
      .filter((name) => !excludeItems.includes(name))
      .map((name) => ({ name, total: data[name] }));
  } catch (error) {
    console.error("Sitemap total count fetch failed:", error);
    return [];
  }
}

async function getPostsUrls({
  page,
  type,
  perPage,
}: {
  page: number;
  type: string;
  perPage: number;
}) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp-json/sitemap/v1/posts?pageNo=${page}&postType=${type}&perPage=${perPage}`,
      { cache: "no-store" }
    );

    if (!response.ok) throw new Error("Failed to fetch post URLs");

    const data = await response.json();
    if (!data) return [];

    return data.map((post: any) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}${post.url}`,
      lastModified: new Date(post.post_modified_date)
        .toISOString()
        .split("T")[0],
    }));
  } catch (error) {
    console.error("Sitemap post URL fetch failed:", error);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemap: MetadataRoute.Sitemap = [];

  const details = await getTotalCounts();

  if (!details.length) {
    throw new Error("Sitemap temporarily unavailable");
  }

  const postsUrls = await Promise.all(
    details.map(async ({ name, total }) => {
      const perPage = 50;
      const totalPages = Math.ceil(total / perPage);

      const urls = await Promise.all(
        Array.from({ length: totalPages }, (_, i) =>
          getPostsUrls({ page: i + 1, type: name, perPage })
        )
      );

      return urls.flat();
    })
  );

  sitemap.push(...postsUrls.flat());

  return sitemap;
}
