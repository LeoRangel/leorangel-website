import { draftMode, cookies } from "next/headers";

export async function fetchGraphQL<T = any>(
  query: string,
  variables?: { [key: string]: any },
  headers?: { [key: string]: string },
): Promise<T> {
  const { isEnabled: preview } = await draftMode();

  try {
    let authHeader = "";
    if (preview) {
      const auth = (await cookies())?.get("wp_jwt")?.value;
      if (auth) {
        authHeader = `Bearer ${auth}`;
      }
    }

    const body = JSON.stringify({
      query,
      variables: {
        preview,
        ...variables,
      },
    });

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/graphql`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(authHeader && { Authorization: authHeader }),
          ...headers,
        },
        body,
        cache: preview ? "no-cache" : "default",
        next: {
          tags: ["wordpress"],
        },
      },
    );

    if (!response.ok) {
      console.error("GraphQL fetch error – Status:", response.status);
      return {} as T;
    }

    const data = await response.json();

    if (data?.errors) {
      console.error("GraphQL Errors:", data.errors);
      return (data.data ?? {}) as T;
    }

    return (data.data ?? {}) as T;
  } catch (error) {
    console.error("GraphQL fetch exception:", error);
    return {} as T;
  }
}
