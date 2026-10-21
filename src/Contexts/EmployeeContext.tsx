import { createContext, useContext, useReducer, type ReactNode } from "react";
import type EmpAction from "../model/EmployeeTypes/EmpAction";
import type Employee from "../model/EmployeeTypes/EmpInterface";
import type  InitialStateEmployees  from "../model/EmployeeTypes/InitialStateEmployees";

import { initialState } from "../assets/sampleEmployees";

type EmployeesContextValue = {
  employees: Employee[];
};

const EmployeeContext = createContext<EmployeesContextValue | undefined>(
  undefined,
);

function reducer(state: InitialStateEmployees, action: EmpAction) {
  switch (action.type) {
    case "setEmployees":
      return { ...state, employees: action.payload };
    default:
      return state;
  }
}

function EmployeeProvider({
  children,
}: {
  children: ReactNode;
}): React.JSX.Element {
  const [{ employees }] = useReducer(reducer, initialState);
  return (
    <EmployeeContext.Provider value={{ employees }}>
      {children}
    </EmployeeContext.Provider>
  );
}

function useEmployees() {
  const context = useContext(EmployeeContext);
  if (context === undefined)
    throw new Error("EmployeeContext was used outside of the Provider");
  return context;
}

export { EmployeeProvider, useEmployees };
