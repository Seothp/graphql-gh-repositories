import styles from "./LastChangeDate.module.css";

type Props = {
  // should be valid date
  date: string;
};

export const LastChangeDate = ({ date }: Props) => {
  const dateInstance = new Date(date);
  const dateStringToRender  = dateInstance.toDateString();
  return <span className={styles.lastChangeDate}>{dateStringToRender}</span>;
};
