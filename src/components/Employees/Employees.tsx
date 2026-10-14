import type Employee from "../../model/EmpInterface";
import styles from "./styles.module.scss";

interface EmployeesProps {
  employees: Employee[];
}

function Employees({ employees }: EmployeesProps): React.JSX.Element {
  const theaders: string[] = ["Id", "Employee", "Role", "Tasks Assigned"];
  return (
    <div className={styles.employees}>
      <div>
        <h2 className={styles.employeesHeading}>All Employees</h2>
        <p className={styles.employeesCount}>Total: {employees.length}</p>
      </div>
      <div>
        <table className={styles.table}>
          <thead>
            <tr>
              {theaders.map((header) => (
                <td className={styles.tableHeaders}>{header}</td>
              ))}
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td className={styles.em}>
                  <img className={styles.tableEmpPic} src={emp.imageUrl} alt={emp.name} />
                  {emp.name}
                </td>
                <td>{emp.role}</td>
                <td>{emp.tasks.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Employees;
