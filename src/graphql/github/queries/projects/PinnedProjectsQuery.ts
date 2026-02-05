import { GITHUB_USERNAME } from "@/data/sociaLinks";
import gql from "graphql-tag";

export const PinnedProjectsQuery = gql`
  query {
    user(login: "${GITHUB_USERNAME}") {
      pinnedItems(first: 2, types: [REPOSITORY]) {
        totalCount
        edges {
          node {
            ... on Repository {
              name
              id
              url
              isTemplate
              homepageUrl
              openGraphImageUrl
              shortDescriptionHTML
              stargazers {
                totalCount
              }
              repositoryTopics(first: 15) {
                totalCount
                edges {
                  node {
                    ... on RepositoryTopic {
                      topic {
                        id
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
