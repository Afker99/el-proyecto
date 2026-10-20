import { useEmployees } from "../../Contexts/EmployeeContext";
import type Employee from "../../model/EmpInterface";
import styles from "./styles.module.scss";
import global from "../../global.module.scss";
// import icon from "../../assets/sprite.svg"

import { EMPLOYEES_PER_PAGE } from "../../model/Global";

interface EmployeesProps {
  employees: Employee[];
}

function Employees(): React.JSX.Element {
  const { employees }: EmployeesProps = useEmployees();
  const theaders: string[] = [
    "Employee",
    "Role",
    "Tasks Assigned",
    "Status",
    "More Action",
  ];
  return (
    <div className={styles.employees}>
      <header>
        <div>
          <h2 className={styles.employeesHeading}>All Employees</h2>
          <p className={styles.employeesCount}>View and manage all employees</p>
        </div>
        <div>
          <button className={`${global.btn} ${global.btnMain}`}>
            Add new employee
          </button>
        </div>
      </header>

      <main>
        <table className={styles.table}>
          <thead className={styles.tableHeaders}>
            <tr>
              {theaders.map((header) => (
                <th className={styles.tableHeadersCell}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id} className={styles.tableRow}>
                <td className={`${styles.tableEmployee} ${styles.tableCell}`}>
                  <img
                    className={styles.tableEmpPic}
                    src={emp.imageUrl}
                    alt={emp.name}
                  />
                  <span className={styles.tableEmpName}>{emp.name}</span>
                </td>
                <td className={styles.tableCell}>{emp.role}</td>
                <td className={styles.tableCell}>{emp.tasks.length}</td>
                <td className={styles.tableCell}>
                  {emp.tasks.length < 3 ? (
                    <span
                      className={`${styles.tableStatus} ${styles.tableStatusAvailable}`}
                    >
                      Available
                    </span>
                  ) : (
                    <span
                      className={`${styles.tableStatus} ${styles.tableStatusUnavailable}`}
                    >
                      Unavailable
                    </span>
                  )}
                </td>
                <td className={styles.tableCell}>
                  <button className={`${global.btn} ${global.btnSecondary}`}>
                    <span className={styles.moreAction}></span>
                    <span className={styles.moreAction}></span>
                    <span className={styles.moreAction}></span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      <footer>
        <div>
          <p className={styles.employeesCount}>
            Showing {EMPLOYEES_PER_PAGE} of {employees.length} Employees
          </p>
        </div>
        <div>
          <button className={`${global.btn} ${global.btnSecondary}`}>
            &larr;
          </button>
          <button className={`${global.btn} ${global.btnSecondary}`}>
            &rarr;
          </button>
        </div>
      </footer>
    </div>
  );
}

export default Employees;
