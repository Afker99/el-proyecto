import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';

export default function Sidebar() :React.JSX.Element {
  return (
    <div className={styles.sidebar}>
        <h1 className={styles.sidebarHeading}>Project Management</h1>
        <ul>
            <li className={styles.sidebarListItem}><NavLink to={"/"}>General</NavLink></li>
            <li className={styles.sidebarListItem}><NavLink to={"employees"}>Employees</NavLink></li>
        </ul>
    </div>
  )
}
