import styles from "./styles.module.scss";

import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant: "Primary" | "Secondary";
  onClick?: () => void;
  disabled?: boolean;
  hasIcon?: boolean;
}

function Button({
  children,
  variant,
  onClick,
  disabled,
  hasIcon,
}: ButtonProps): React.JSX.Element {
  return (
    <button
      className={`${styles.btn} ${styles[`btn${variant}`]} ${hasIcon ? styles.btnIcon : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
