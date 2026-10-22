import { createContext, useContext, useReducer, type ReactNode } from "react";

import type EmpAction from "../model/EmployeeTypes/EmpAction";
import type InitialStateEmployees from "../model/EmployeeTypes/InitialStateEmployees";

import { samlpeEmployees } from "../assets/sampleEmployees";

const state: InitialStateEmployees = {
  employees: samlpeEmployees,
  employeesPerPage: 10,
  currentPage: 1,
};

interface EmployeeContextValue extends InitialStateEmployees {
  dispatch: React.Dispatch<EmpAction>;
}

const EmployeeContext = createContext<EmployeeContextValue | undefined>(
  undefined,
);

function reducer(state: InitialStateEmployees, action: EmpAction) {
  switch (action.type) {
    case "prevPage":
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };
    case "nextPage":
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    default:
      return state;
  }
}

interface employeeProviderProps {
  children: ReactNode;
}

function EmployeeProvider({ children }: employeeProviderProps) {
  const [
    { employees, employeesPerPage, currentPage },
    dispatch,
  ] = useReducer(reducer, state);
  return (
    <EmployeeContext.Provider
      value={{
        employees,
        employeesPerPage,
        currentPage,
        dispatch,
      }}
    >
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

// Emp_Per_Page, currentPage, totalPages
