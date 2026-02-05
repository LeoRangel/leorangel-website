export async function fetchGitHubGraphQL<T = any>(
  query: string,
  variables?: Record<string, any>,
): Promise<T> {
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "User-Agent": "nextjs-github-graphql",
    },
    body: JSON.stringify({ query, variables }),
    next: {
      tags: ["github"],
      revalidate: 60 * 60,
    },
  });

  const json = await response.json();

  if (json.errors) {
    console.error("GitHub GraphQL Errors:", json.errors);
    throw new Error("GitHub GraphQL query failed");
  }

  return json.data;
}
