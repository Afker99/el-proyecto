import styles from "./styles.module.scss";

import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant: "Primary" | "Secondary";
  onClick?: () => void;
  disabled?: boolean;
  hasIcon?: boolean;
  size?: "Small" | "Normal";
  round?: "Normal" | "Full";
}

function Button({
  children,
  variant,
  onClick,
  disabled,
  hasIcon,
  size = "Normal",
  round = "Normal",
}: ButtonProps): React.JSX.Element {
  return (
    <button
      className={`
        ${styles.btn} 
        ${styles[`btn${variant}`]} 
        ${size === "Normal" ? "" : styles[`btn${size}`]} 
        ${round === "Normal" ? "" : styles[`btn${round}`]}
        ${hasIcon ? styles.btnIcon : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
