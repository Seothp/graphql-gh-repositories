
import { Link } from "src/shared/ui/Link";
import { Spacer } from "src/shared/ui/Spacer";

import { StarsCount } from "./StarsCount";
import { LastChangeDate } from "./LastChangeDate";

import styles from "./RepositoryList.module.css";

type Props = {
  repositoryList: {
    name: string;
    stargazerCount: number;
    pushedAt: string;
    id: string;
    url: string;
  }[];
};

export const RepositoryList = ({ repositoryList }: Props) => {
  return (
    <ul className={styles.list}>
      {repositoryList.map(({ name, stargazerCount, pushedAt, id, url }) => (
        <li className={styles.item} key={id}>
          <Spacer>
            <Link to={`repository/${id}`} className={styles.title}>
              {name}
            </Link>
            <StarsCount count={stargazerCount} />
            <div>
              Last change: <LastChangeDate date={pushedAt} />
            </div>
            <div>
              <a href={url} target="_blank" rel="noreferrer">
                {url}
              </a>
            </div>
          </Spacer>
        </li>
      ))}
    </ul>
  );
};
