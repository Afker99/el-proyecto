import type Employee from "./EmpInterface";

type EmpAction = {
  type: string;
  payload: Employee[];
};

export type { EmpAction as default };
