import { ReactNode } from "react";
import cls from "classnames";

import styles from "./Spacer.module.css";

type Props = {
  children: ReactNode;
  direction?: "row" | "column";
};

export const Spacer = ({ children, direction = 'column' }: Props) => {
  return (
    <div
      className={cls(styles.spacer, {
        [styles.spacerRow]: direction === "row",
        [styles.spacerColumn]: direction === "column",
      })}
    >
      {children}
    </div>
  );
};
