import { MetadataRoute } from "next";

export const revalidate = 0;

export default async function robots(): Promise<MetadataRoute.Robots> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/robots.txt`,
      { cache: "no-store" }
    );

    if (!res.ok) throw new Error("Failed to fetch robots.txt");

    const text = await res.text();
    const lines = text.split("\n");

    const userAgent =
      lines
        .find((line) => line.startsWith("User-agent: "))
        ?.replace("User-agent: ", "") || "*";
    const allow =
      lines
        .find((line) => line.startsWith("Allow: "))
        ?.replace("Allow: ", "") || "/";
    const disallow =
      lines
        .find((line) => line.startsWith("Disallow: "))
        ?.replace("Disallow: ", "") || "";
    const sitemap =
      lines
        .find((line) => line.startsWith("Sitemap: "))
        ?.replace("Sitemap: ", "") ||
      `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`;

    return {
      rules: {
        userAgent,
        allow,
        disallow,
      },
      sitemap,
    };
  } catch (error) {
    console.error("Error fetching robots.txt:", error);

    return {
      rules: {
        userAgent: "*",
        allow: "/",
      },
      sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
    };
  }
}
