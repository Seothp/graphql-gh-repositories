import { StarIcon } from "src/shared/ui/Icons";

import styles from './StarsCount.module.css'

type Props = {
  count: number;
};

export const StarsCount = ({ count }: Props) => {
  return (
    <div className={styles.stars}>
      <StarIcon className={styles.starIcon} />
      <span>{count}</span>
    </div>
  );
};
