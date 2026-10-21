import styles from "./styles.module.scss";

import Button from "../Button/Button";
import { useEmployees } from "../../Contexts/EmployeeContext";
import type Employee from "../../model/EmployeeTypes/EmpInterface";

interface EmployeesProps {
  employees: Employee[];
}

function EmployeesTable(): React.JSX.Element {
  const { employees }: EmployeesProps = useEmployees();
  const theaders: string[] = [
    "Employee",
    "Role",
    "Tasks Assigned",
    "Status",
    "More Action",
  ];
  return (
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
                <Button variant="Secondary">
                  <span className={styles.moreAction}></span>
                  <span className={styles.moreAction}></span>
                  <span className={styles.moreAction}></span>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default EmployeesTable;
