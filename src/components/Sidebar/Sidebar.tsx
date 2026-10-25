import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";
import logo from "../../assets/elproyecto.svg";

export default function Sidebar(): React.JSX.Element {
  return (
    <div className={styles.sidebar}>
      <div>
        <h1 className={styles.sidebarHeading}>Project Management</h1>
        <ul>
          <li className={styles.sidebarListItem}>
            <NavLink className={styles.sidebarListItemLink} to={"/"}>
              General
            </NavLink>
          </li>
          <li className={styles.sidebarListItem}>
            <NavLink className={styles.sidebarListItemLink} to={"employees"}>
              Employees
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={styles.sidebarMetadata}>
        <img src={logo} alt="el-proyecto-logo" className={styles.sidebarLogo} />
        <p>Development in progress by <span>Afker</span></p>
      </div>
    </div>
  );
}
