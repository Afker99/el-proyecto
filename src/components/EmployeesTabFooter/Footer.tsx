import styles from "./styles.module.scss";

import Button from "../Button/Button";

import { useEmployees } from "../../Contexts/EmployeeContext";
import type Employee from "../../model/EmployeeTypes/EmpInterface";

function Footer(): React.JSX.Element {
  const { employees, employeesPerPage, currentPage, dispatch} = useEmployees();

  const totalPages = Math.ceil(employees.length / employeesPerPage);

  const currentItems: Employee[] = employees.slice(
    (currentPage - 1) * employeesPerPage,
    currentPage * employeesPerPage,
  );
  
  return (
    <footer>
      <div>
        <p className={styles.employeesCount}>
          Showing {currentItems.length} of {employees.length} Employees
        </p>
      </div>
      <div>
        <Button
          variant="Secondary"
          disabled={currentPage === 1}
          // onClick={() => setCurrentPage((prev) => prev - 1)}
          onClick={() => dispatch({type: "prevPage"})}
        >
          &larr;
        </Button>
        <Button
          variant="Secondary"
          disabled={currentPage === totalPages}
          onClick={() => dispatch({type: "nextPage"})}
        >
          &rarr;
        </Button>
      </div>
    </footer>
  );
}

export default Footer;
