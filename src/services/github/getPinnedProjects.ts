import { print } from "graphql";
import { fetchGitHubGraphQL } from "@/utils/fetchGitHubGraphQL";
import { PinnedProjectsQuery } from "@/graphql/github/queries/PinnedProjectsQuery";
import { Project } from "@/types/Project";
import { GitHubPinnedProjectsResponse } from "./types";

export async function getPinnedProjects(): Promise<Project[]> {
  try {
    const data = await fetchGitHubGraphQL<GitHubPinnedProjectsResponse>(
      print(PinnedProjectsQuery),
      {
        login: process.env.GITHUB_USERNAME,
      },
    );

    const edges = data?.user?.pinnedItems?.edges ?? [];

    return edges.map(({ node }) => ({
      id: node?.id || "",
      name: node?.name || "",
      url: node?.url || "",
      homepageUrl: node?.homepageUrl,
      openGraphImageUrl: node?.openGraphImageUrl,
      shortDescriptionHTML: node?.shortDescriptionHTML,
      isTemplate: node?.isTemplate,
      stars: node?.stargazers?.totalCount,
      topics:
        node?.repositoryTopics?.edges?.map(
          (edge) => edge?.node?.topic?.name ?? "",
        ) ?? [],
    }));
  } catch (error) {
    console.error("Error fetching GitHub pinned projects", error);
    return [];
  }
}
