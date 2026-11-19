import global from "../../global.module.scss";
import styles from "./styles.module.scss";

import { NavLink } from "react-router-dom";
import logo from "../../assets/elproyecto.svg";

import { House, FolderOpen, Users } from "lucide-react";
import { useProjects } from "../../Contexts/ProjectContext";

export default function Sidebar(): React.JSX.Element {
  const { projects } = useProjects();
  return (
    <div className={styles.sidebar}>
      <div>
        <h2 className={global.title}>Project Management</h2>
        <ul className={styles.sidebarList}>
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
            <ul className={styles.sidebarProjectList}>
              {projects.map((project) => (
                <li className={styles.sidebarProjectListItem}>
                  {project.title}
                </li>
              ))}
            </ul>
          </li>
          <li className={styles.sidebarListItem}>
            <NavLink className={styles.sidebarListItemLink} to={"team"}>
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
