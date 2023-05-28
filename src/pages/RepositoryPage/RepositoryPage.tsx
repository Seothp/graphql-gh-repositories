import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import { Spacer } from "src/shared/ui/Spacer";
import { Link } from "src/shared/ui/Link";
import {
  StarsCount,
  LastChangeDate,
  RepositoryLanguages,
} from "src/features/Repository";

import styles from "./RepositoryPage.module.css";

const GET_REPOSITORY = gql`
  query ($id: ID!) {
    node(id: $id) {
      ... on Repository {
        id
        name
        owner {
          avatarUrl
          login
          url
        }
        stargazerCount
        pushedAt
        shortDescriptionHTML
        languages(first: 5, orderBy: { field: SIZE, direction: DESC }) {
          edges {
            size
            node {
              color
              id
              name
            }
            cursor
          }
          totalSize
        }
      }
    }
  }
`;

export const RepositoryPage = () => {
  const { repositoryId } = useParams();

  const { data } = useQuery(GET_REPOSITORY, {
    variables: {
      id: repositoryId,
    },
  });

  if (!data) {
    return <div>loading...</div>;
  }

  const {
    name,
    languages: { totalSize, edges },
    owner: { avatarUrl, login, url: ownerUrl },
    pushedAt,
    stargazerCount,
    shortDescriptionHTML: description,
  } = data.node;

  const preparedLanguages = edges.map(({ size, node: { color, name } }) => {
    return {
      size,
      color,
      name,
    };
  });

  return (
    <div>
      {data && (
        <Spacer>
          <div className="mainInfo">
            <Spacer>
              <h1 className={styles.repositoryName}>{name}</h1>
              <StarsCount count={stargazerCount} />
              <div>
                Last update: <LastChangeDate date={pushedAt} />
              </div>
            </Spacer>
          </div>
          {Boolean(preparedLanguages.length) && (
            <div className="usedLanguages">
              <h3 className={styles.subtitle}>Languages</h3>
              <RepositoryLanguages
                totalSize={totalSize}
                languages={preparedLanguages}
              />
            </div>
          )}
          {description && (
            <div className="description">
              <h3 className={styles.subtitle}>Description</h3>
              <div>{description}</div>
            </div>
          )}
          <div className={styles.ownerInfo}>
            <h3 className={styles.subtitle}>Repository owner</h3>
            <Spacer direction="row">
              <img src={avatarUrl} alt="" className={styles.ownerAvatar} />
              <div>
                <Link className={styles.ownerTitle} href={ownerUrl}>
                  {login}
                </Link>
              </div>
            </Spacer>
          </div>
        </Spacer>
      )}
    </div>
  );
};
