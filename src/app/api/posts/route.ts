import { NextResponse } from "next/server";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { print } from "graphql";
import { PostArchiveQuery } from "@queries/posts/PostArchiveQuery";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const after = searchParams.get("after");

  const base64Regex =
    /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
  const isValidCursor =
    !after || (base64Regex.test(after) && after.startsWith("YXJ"));

  if (!isValidCursor) {
    return NextResponse.json(
      { error: "Invalid 'after' cursor format." },
      { status: 400 }
    );
  }

  try {
    const { posts } = await fetchGraphQL(print(PostArchiveQuery), {
      first: 2,
      after: after || undefined,
    });

    if (!posts || posts?.nodes?.length < 1) {
      return NextResponse.json({ error: "No posts found." }, { status: 404 });
    }

    return NextResponse.json(
      {
        posts: posts.nodes,
        pageInfo: posts.pageInfo,
      },
      {
        status: 200,
        headers: {
          "Cache-Control": "public, s-maxage=60, stale-while-revalidate=30",
        },
      }
    );
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
