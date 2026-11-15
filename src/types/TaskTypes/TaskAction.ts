import type Task from "./TaskInterface";

type TaskAction =
  | {
      type: "tasks/addTask";
      payload: Task;
    }
  | {
      type: "tasks/deleteTask";
      payload: string;
    };

export type { TaskAction as default };
