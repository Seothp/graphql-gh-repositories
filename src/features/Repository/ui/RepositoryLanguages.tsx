import { Spacer } from "src/shared/ui/Spacer";

import styles from "./RepositoryLanguages.module.css";

type Props = {
  totalSize: number;
  languages: {
    name: string;
    size: number;
    color: string;
  }[];
};

export const RepositoryLanguages = ({ totalSize, languages }: Props) => {
  const languagesWithPercentage = languages.map(({ name, size, color }) => {
    return {
      name,
      color,
      percentage: (size / totalSize) * 100,
    };
  });

  const stringifyedLanguages = languages.map(({ name }) => name).join(", ");

  return (
    <div>
      <Spacer>
        <div className={styles.languageBar}>
          {languagesWithPercentage.map(({ percentage, name, color }) => (
            <div
              key={name}
              className={styles.languageBarPart}
              style={{
                backgroundColor: color,
                width: `${percentage}%`,
              }}
            ></div>
          ))}
        </div>
        <div className={styles.languagesList}>{stringifyedLanguages}</div>
      </Spacer>
    </div>
  );
};
