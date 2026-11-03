import styles from "./styles.module.scss";

function Header(): React.JSX.Element {
  return (
    <header>
      <div>
        <h2 className={styles.title}>All Employees</h2>
        <p>View and manage all employees</p>
      </div>
    </header>
  );
}

export default Header;
