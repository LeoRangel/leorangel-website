import { print } from "graphql/language/printer";

import { ContentNode, LoginPayload } from "@/gql/graphql";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { draftMode } from "next/headers";
import { NextResponse } from "next/server";
import { ContentNodeQuery } from "@queries/general/ContentNodeQuery";
import { LoginUserMutation } from "@mutations/login/LoginUserMutation";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const id = searchParams.get("id");

  if (secret !== process.env.HEADLESS_SECRET || !id) {
    return new Response("Invalid token", { status: 401 });
  }

  const { login } = await fetchGraphQL<{ login: LoginPayload | null }>(
    print(LoginUserMutation)
  );

  const authToken = login?.authToken;

  if (!authToken) {
    return new Response("Invalid authToken", { status: 401 });
  }

  (await draftMode())?.enable();

  const { contentNode } = await fetchGraphQL<{
    contentNode: ContentNode | null;
  }>(
    print(ContentNodeQuery),
    {
      id,
    },
    { Authorization: `Bearer ${authToken}` }
  );

  if (!contentNode) {
    return new Response("Invalid id", { status: 401 });
  }

  const response = NextResponse.redirect(
    `${process.env.NEXT_PUBLIC_BASE_URL}${
      contentNode?.status === "draft"
        ? `/preview/${contentNode?.databaseId}`
        : contentNode?.uri
    }`
  );

  response?.headers.set("Set-Cookie", `wp_jwt=${authToken}; path=/;`);

  return response;
}
