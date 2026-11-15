import { sampleTasks } from "../data/sampleTasks";
import { createContext, useContext, useReducer, type ReactNode } from "react";
import type InitialStateTasks from "../types/TaskTypes/InitialStateTasks";
import type TaskAction from "../types/TaskTypes/TaskAction";

const state: InitialStateTasks = {
  tasks: sampleTasks,
};

interface TaskContextValue extends InitialStateTasks {
  dispatch: React.Dispatch<TaskAction>;
}

const TasksContext = createContext<TaskContextValue | undefined>(undefined);

function reducer(state: InitialStateTasks, action: TaskAction) {
  switch (action.type) {
    case "tasks/addTask":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "tasks/deleteTask":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
}

interface TasksProviderProps {
  children: ReactNode;
}

function TasksProvider({ children }: TasksProviderProps) {
  const [{ tasks }, dispatch] = useReducer(reducer, state);

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
}

function useTasks() {
  const context = useContext(TasksContext);
  if (context === undefined)
    throw new Error("TasksContext used outside the provide");
  return context;
}

export { TasksProvider, useTasks };
