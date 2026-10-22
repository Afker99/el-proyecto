import type Employee from "./EmpInterface";

type EmpAction =
  | {
      type: string;
      payload: Employee[];
    }
  | { type: string };

export type { EmpAction as default };
