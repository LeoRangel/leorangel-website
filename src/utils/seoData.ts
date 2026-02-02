import { Page } from "@/gql/graphql";
import { profileInfo } from "@/data/profileInfo";
import { siteInfo } from "@/data/siteInfo";

type SetSeoDataProps = {
  seo: Page["seo"];
  contentTypeName?: string;
};

export const setSeoData = ({ seo, contentTypeName }: SetSeoDataProps) => {
  if (!seo) return {};

  const isPost = contentTypeName === "Post";
  const locale = siteInfo.language.replace("-", "_");

  return {
    title: seo?.title || undefined,
    description: seo?.metaDesc || seo?.opengraphDescription || undefined,

    alternates: seo?.canonical ? { canonical: seo?.canonical } : undefined,

    robots: {
      index: seo?.metaRobotsNoindex === "index",
      follow: seo?.metaRobotsNofollow === "follow",
    },

    keywords: seo?.metaKeywords
      ? seo.metaKeywords.split(",").map((k) => k.trim())
      : undefined,

    authors: [
      {
        name: profileInfo.name,
        url: siteInfo.url,
      },
    ],

    openGraph: {
      title: seo?.opengraphTitle || seo?.title || undefined,
      description: seo?.opengraphDescription || seo?.metaDesc || undefined,
      url: seo?.opengraphUrl || seo?.canonical || undefined,
      siteName: seo?.opengraphSiteName || siteInfo.title,
      locale,
      type: seo?.opengraphType || (isPost ? "article" : "website"),

      images: seo?.opengraphImage?.sourceUrl
        ? [
            {
              url: seo?.opengraphImage?.sourceUrl,
              width: seo?.opengraphImage?.mediaDetails?.width ?? 1200,
              height: seo?.opengraphImage?.mediaDetails?.height ?? 630,
              alt:
                seo?.opengraphImage?.altText ??
                seo?.opengraphTitle ??
                seo?.title ??
                "",
            },
          ]
        : undefined,

      ...(isPost && {
        publishedTime: seo?.opengraphPublishedTime || undefined,
        modifiedTime: seo?.opengraphModifiedTime || undefined,
        authors: [seo?.opengraphAuthor || profileInfo.name],
      }),
    },

    twitter: {
      card: "summary_large_image",
      title: seo?.twitterTitle || seo?.title || undefined,
      description: seo?.twitterDescription || seo?.metaDesc || undefined,
      images: seo?.twitterImage?.sourceUrl
        ? [seo?.twitterImage?.sourceUrl]
        : undefined,
    },
  };
};
