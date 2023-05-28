import { gql, useQuery } from "@apollo/client";

type Props = {
  query: string;
}

const GET_USER_REPOSITORIES = gql`
  query {
    viewer {
      login
      repositories(privacy: PUBLIC, first: 100) {
        edges {
          node {
            ... on Repository {
              id
              name
              url
              pushedAt
              stargazerCount
            }
          }
        }
        totalCount
      }
    }
  }
`;

const SEARCH_REPOSITORIES_BY_QUERY = gql`
  query ($query: String!) {
    search(query: $query, type: REPOSITORY, first: 100) {
      edges {
        node {
          ... on Repository {
            id
            name
            url
            pushedAt
            stargazerCount
          }
        }
      }
      repositoryCount
    }
  }
`;

export const useRepositoriesToShow = ({ query }: Props) => {
  const { data: searchData, loading: isSearchDataLoading } = useQuery(SEARCH_REPOSITORIES_BY_QUERY, {
    variables: {
      query,
    },
  });

  const { data: userData, loading: isUserDataLoading } = useQuery(
    GET_USER_REPOSITORIES
  );
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const foundRepositories = searchData?.search.edges.map(({ node }) => node)
   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const userRepositories = userData?.viewer.repositories.edges.map(({ node }) => node)
  const countOfFoundRepositories = searchData?.search.repositoryCount;
  const countOfUserRepositories = userData?.viewer.repositories.totalCount;

  if (!query) {
    return {
      isLoading: isUserDataLoading,
      data: {
        repositories: userRepositories,
        countOfRepositories: countOfUserRepositories,
      }
    }
  }

  return {
    isLoading: isSearchDataLoading,
    data: {
      repositories: foundRepositories,
      countOfRepositories: countOfFoundRepositories,
    }
  }
};
