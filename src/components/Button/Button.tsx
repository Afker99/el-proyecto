import styles from "./styles.module.scss";

import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant: "Primary" | "Secondary";
}

function Button({ children, variant }: ButtonProps): React.JSX.Element {
  return (
    <button className={`${styles.btn} ${styles[`btn${variant}`]}`}>
      {children}
    </button>
  );
}

export default Button;
