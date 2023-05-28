import { ButtonHTMLAttributes, MouseEvent, ReactNode } from "react";
import cls from "classnames";

import styles from "./Button.module.css";

type Props = {
  type: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  className?: string;
  isDisabled?: boolean;
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export const Button = ({
  type,
  children,
  className,
  isDisabled,
  onClick,
}: Props) => {
  return (
    <button
      type={type}
      className={cls(className, styles.button)}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};