import { createContext, useContext, useReducer, type ReactNode } from "react";
import type InitialStateProjects from "../types/ProjectTypes/InitialStateProjects";
import type ProjectAction from "../types/ProjectTypes/ProjectAction";
import {sampleProjects} from "../data/sampleProjects"

const state: InitialStateProjects = {
  projects: sampleProjects,
};

interface ProjectContextValue extends InitialStateProjects {
  dispatch: React.Dispatch<ProjectAction>;
}

const ProjectContext = createContext<ProjectContextValue | undefined>(
  undefined,
);

function reducer(state: InitialStateProjects, action: ProjectAction) {
  switch (action.type) {
    case "projects/addProject":
      return {
        ...state,
        projects: [...state.projects, action.payload],
      };
    case "projects/deleteProject":
      return {
        ...state,
        projects: [
          ...state.projects.filter((project) => project.id !== action.payload),
        ],
      };

    default:
      return state;
  }
}

interface ProjectProviderProps {
  children: ReactNode;
}

function ProjectProvider({ children }: ProjectProviderProps) {
  const [{ projects }, dispatch] = useReducer(reducer, state);

  return (
    <ProjectContext.Provider value={{ projects, dispatch }}>
      {children}
    </ProjectContext.Provider>
  );
}

function useProjects() {
  const context = useContext(ProjectContext);
  if (context === undefined)
    throw new Error("ProjectContext was used outside of the Provider");
  return context;
}

export { ProjectProvider, useProjects };
