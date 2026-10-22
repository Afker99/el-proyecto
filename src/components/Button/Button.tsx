import styles from "./styles.module.scss";

import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant: "Primary" | "Secondary";
  onClick?: () => void;
  disabled?: true | false
}

function Button({ children, variant, onClick, disabled }: ButtonProps): React.JSX.Element {
  return (
    <button className={`${styles.btn} ${styles[`btn${variant}`]}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
