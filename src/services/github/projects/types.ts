export type GitHubPinnedProjectsResponse = {
  user: {
    pinnedItems: {
      totalCount?: number;
      edges?: Array<{
        node?: {
          __typename?: "Repository";
          id?: string;
          name?: string;
          url?: string;
          isTemplate?: boolean;
          homepageUrl?: string | null;
          openGraphImageUrl?: string;
          shortDescriptionHTML?: string | null;
          stargazers?: {
            totalCount?: number;
          };
          repositoryTopics?: {
            edges?: Array<{
              node?: {
                topic?: {
                  id?: string;
                  name?: string;
                };
              };
            }>;
          };
        };
      }>;
    };
  } | null;
};
