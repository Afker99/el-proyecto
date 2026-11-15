import { createContext, useContext, useReducer, type ReactNode } from "react";

import type TeamMemberAction from "../types/TeamMemberTypes/TeamMemberAction";
import type InitialStateTeam from "../types/TeamMemberTypes/InitialStateTeamMembers";

import { samlpeTeam } from "../data/sampleTeam";

const state: InitialStateTeam = {
  teamMembers: samlpeTeam,
  teamMembersPerPage: 10,
  currentPage: 1,
};

interface TeamContextValue extends InitialStateTeam {
  dispatch: React.Dispatch<TeamMemberAction>;
}

const TeamContext = createContext<TeamContextValue | undefined>(undefined);

function reducer(state: InitialStateTeam, action: TeamMemberAction) {
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

function TeamProvider({ children }: employeeProviderProps) {
  const [{ teamMembers, teamMembersPerPage, currentPage }, dispatch] = useReducer(
    reducer,
    state,
  );
  return (
    <TeamContext.Provider
      value={{
        teamMembers,
        teamMembersPerPage,
        currentPage,
        dispatch,
      }}
    >
      {children}
    </TeamContext.Provider>
  );
}

function useTeam() {
  const context = useContext(TeamContext);
  if (context === undefined)
    throw new Error("EmployeeContext was used outside of the Provider");
  return context;
}

export { TeamProvider, useTeam };

// Emp_Per_Page, currentPage, totalPages
