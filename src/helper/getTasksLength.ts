import { useProjects } from "../Contexts/ProjectContext";
import { useTasks } from "../Contexts/TaskContext";

export function getTasksLength(id: number): number {
  let tasksCount: number = 0;
  const { projects } = useProjects();
  const { tasks } = useTasks();

  projects.forEach((project) =>
    project.assignTo === id ? tasksCount++ : tasksCount,
  );

  tasks.forEach((task) => (task.assignto === id ? tasksCount++ : tasksCount));

  return tasksCount;
}
