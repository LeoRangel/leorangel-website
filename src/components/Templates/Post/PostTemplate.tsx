import { print } from "graphql/language/printer";
import { ContentNode, Post } from "@/gql/graphql";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { Container } from "@atoms/Container";
import { PostHeader } from "./components/PostHeader";
import { PostQuery } from "@queries/post/PostQuery";

interface TemplateProps {
  node: ContentNode;
}

export default async function PostTemplate({ node }: TemplateProps) {
  const { post } = await fetchGraphQL<{ post: Post | null }>(print(PostQuery), {
    id: node.databaseId,
  });

  if (!post) {
    return <></>;
  }

  return (
    <Container variant="narrowConstrainedPadded">
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
    </Container>
  );
}
