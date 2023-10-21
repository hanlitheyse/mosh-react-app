import { ReactNode } from "react";
import styles from "./Button.module.css";

interface Props {
  children: ReactNode;
  onClick: () => void;
  color: string;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
