import { Link } from "react-router-dom";
import Button from "../Button/Button";

import styles from "./styles.module.scss";

function Header(): React.JSX.Element {
  function handleClikck() {
    console.log(location.pathname);
  }

  return (
    <header>
      <div>
        <h2 className={styles.title}>All Employees</h2>
        <p>View and manage all employees</p>
      </div>
      <div>
        <Link to="add-new-employee">
          <Button variant="Primary">Add new Employee</Button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
