import styles from "./styles.module.scss"

import type { ReactNode } from "react";

function Content({ children }: { children: ReactNode }): React.JSX.Element {
  return <div className={styles.content}>{children}</div>;
}

export default Content;
