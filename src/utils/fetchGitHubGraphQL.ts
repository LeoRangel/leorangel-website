export async function fetchGitHubGraphQL<T = any>(
  query: string,
  variables?: Record<string, any>,
): Promise<T> {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    throw new Error("Missing GITHUB_TOKEN environment variable");
  }

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "User-Agent": "github-graphql-client",
    },
    body: JSON.stringify({ query, variables }),
    next: {
      revalidate: 3600,
      tags: ["github"],
    },
  });

  if (!response.ok) {
    const text = await response.text();
    console.error("GitHub HTTP Error:", response.status, text);
    throw new Error("GitHub request failed");
  }

  const json = await response.json();

  if (json.errors) {
    console.error("GitHub GraphQL Errors:", json.errors);
    throw new Error("GitHub GraphQL query failed");
  }

  return json.data;
}
