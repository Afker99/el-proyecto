import styles from "./styles.module.scss";

import Button from "../Button/Button";
import { useEmployees } from "../../Contexts/EmployeeContext";
import type Employee from "../../model/EmployeeTypes/EmpInterface";
import { useState } from "react";

interface EmployeesProps {
  employees: Employee[];
  currentPage: number;
  employeesPerPage: number;
}

function EmployeesTable(): React.JSX.Element {
  const { employees, currentPage, employeesPerPage }: EmployeesProps =
    useEmployees();

  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  const theaders: string[] = [
    "No",
    "Employee",
    "Role",
    "Tasks Assigned",
    "Status",
    "More Action",
  ];

  const currentItems: Employee[] = employees.slice(
    (currentPage - 1) * employeesPerPage,
    currentPage * employeesPerPage,
  );

  function handleClick(id: string) {
    setOpenMenuId((currentId) => (currentId === id ? null : id));
  }

  return (
    <main className={styles.main}>
      <table className={styles.table}>
        <thead className={styles.tableHeaders}>
          <tr>
            {theaders.map((header) => (
              <th key={header} className={styles.tableHeadersCell}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentItems.map((emp) => (
            <tr key={emp.id} className={styles.tableRow}>
              <td className={styles.tableCell}>{emp.id}</td>
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
                <Button
                  variant="Secondary"
                  onClick={() => {
                    handleClick(emp.id);
                  }}
                >
                  <span className={styles.span}></span>
                  <span className={styles.span}></span>
                  <span className={styles.span}></span>
                </Button>

                <ul
                  className={`${styles.moreAction} ${
                    openMenuId === emp.id ? "" : styles.moreActionHidden
                  }`}
                >
                  <li className={styles.moreActionOption} onClick={() => console.log("Edit")} >Edit</li>
                  <li className={styles.moreActionOption} onClick={() => console.log("Delete")} >Delete</li>
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default EmployeesTable;
