import { ReactNode } from "react";

import styles from './ErrorMessageContainer.module.css';

type Props = {
  children: ReactNode;
};

export const ErrorMessageContainer = ({ children }: Props) => {
  return <div className={styles.container}>{children}</div>;
};
