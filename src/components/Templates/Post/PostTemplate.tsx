import { print } from "graphql/language/printer";
import { ContentNode, Post } from "@/gql/graphql";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { Container } from "@atoms/Container";
import { PostHeader } from "./components/PostHeader";
import { PostQuery } from "@queries/post/PostQuery";
import { Aside } from "@organisms/Aside/Aside";

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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Container variant="fullMobileConstrainedPadded">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[320px_1fr_auto]">
          <Aside className="mt-4 md:mt-6 lg:mt-0 lg:sticky lg:pb-12 lg:top-12 h-fit" />

          <main className="space-y-12 lg:space-y-24 pb-12 lg:py-12">
            <PostHeader
              title={post.title || ""}
              author={{
                name: post.author?.node.name || "",
                avatarUrl: post.author?.node.avatar?.url || "",
              }}
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
  );
}
