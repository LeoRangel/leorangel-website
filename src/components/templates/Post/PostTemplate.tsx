import { print } from "graphql/language/printer";
import { ContentNode, Post } from "@/gql/graphql";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { Container } from "@atoms/Container";
import { PostHeader } from "./components/PostHeader";
import { PostQuery } from "@graphql/wordpress/queries/post/PostQuery";
import { Aside } from "@organisms/Aside/Aside";
import { JsonLd } from "@/components/seo/JsonLd";
import { blogPostingJsonLd } from "@/data/structured-data/blogPosting";

interface TemplateProps {
  node: ContentNode;
}

export default async function PostTemplate({ node }: TemplateProps) {
  const { post } = await fetchGraphQL<{ post: Post | null }>(print(PostQuery), {
    id: node?.databaseId,
  });

  if (!post) {
    return null;
  }

  return (
    <>
      <JsonLd
        data={blogPostingJsonLd({
          title: post?.seo?.title || post?.title || "",
          description: post?.seo?.metaDesc || post?.excerpt || "",
          slug: post?.slug || "",
          publishedAt: post?.date || undefined,
          modifiedAt: post?.modified || undefined,
          image: post?.seo?.opengraphImage?.sourceUrl || undefined,
          readingTime: post?.seo?.readingTime || undefined,
        })}
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Container variant="fullMobileConstrainedPadded">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[320px_1fr_auto]">
            <Aside className="mt-4 md:mt-6 lg:mt-12 lg:sticky lg:top-12 h-fit" />

            <main className="space-y-12 lg:space-y-24 pb-12 lg:py-12">
              <PostHeader
                title={post.title || ""}
                date={post.date || ""}
                readTime=""
              />

              <section>
                <div dangerouslySetInnerHTML={{ __html: post.content || "" }} />
              </section>
            </main>
          </div>
        </Container>
      </div>
    </>
  );
}
