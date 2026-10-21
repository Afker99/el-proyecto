import styles from "./styles.module.scss"

import Button from "../Button/Button";

import EMPLOYEES_PER_PAGE from "../../model/Global";

function Footer(): React.JSX.Element {
    return <footer>
        <div>
          <p className={styles.employeesCount}>
            Showing {EMPLOYEES_PER_PAGE} of {15} Employees
          </p>
        </div>
        <div>
          <Button variant="Secondary">&larr;</Button>
          <Button variant="Secondary">&rarr;</Button>
        </div>
      </footer>
}

export default Footer;