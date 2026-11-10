import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";
import logo from "../../assets/elproyecto.svg";

import { House, FolderOpen, Users } from "lucide-react";

export default function Sidebar(): React.JSX.Element {
  return (
    <div className={styles.sidebar}>
      <div>
        <h1 className={styles.sidebarHeading}>Project Management</h1>
        <ul>
          <li className={styles.sidebarListItem}>
            <NavLink className={styles.sidebarListItemLink} to={"/"}>
              <House size={16} />
              Home
            </NavLink>
          </li>
          <li className={styles.sidebarListItem}>
            <NavLink className={styles.sidebarListItemLink} to={"projects"}>
              <FolderOpen size={16} />
              Projects
            </NavLink>
          </li>
          <li className={styles.sidebarListItem}>
            <NavLink className={styles.sidebarListItemLink} to={"employees"}>
              <Users size={16} />
              Team
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={styles.sidebarMetadata}>
        <img src={logo} alt="el-proyecto-logo" className={styles.sidebarLogo} />
        <p>
          Development in progress by <span>Afker</span>
        </p>
      </div>
    </div>
  );
}
