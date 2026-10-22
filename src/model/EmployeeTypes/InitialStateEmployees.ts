import type Employee from "./EmpInterface";

export default interface InitialStateEmployees {
  employees: Employee[];
  employeesPerPage: number;
  currentPage: number;
}
