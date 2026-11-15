import styles from "./styles.module.scss";

import type Project from "../../types/ProjectTypes/ProjectInterface";
import { useTeam } from "../../Contexts/TeamContext";
import { calculateDays } from "../../helper/calculateDays";
import { useTasks } from "../../Contexts/TaskContext";

interface ProjectProps {
  project: Project;
}

export default function Project({ project }: ProjectProps) {
  const { id, title, priority, assignTo, startDate, endDate, status } = project;
  const { teamMembers } = useTeam();

  // fetch project assignee
  const { name, imageUrl } = teamMembers.find(
    (member) => member.id === assignTo,
  )!;
  const projectDuration = calculateDays(startDate, endDate);

  // calculate percentage
  const { tasks } = useTasks();
  const totalTasks = tasks.filter((task) => task.projectId === id).length;
  const completedTasks = tasks
    .filter((task) => task.projectId === id)
    .filter((task) => task.status === "Completed").length;

  const percentageProject = status === "Completed" ? 100 : 0;
  const percentageTasks = Math.round((completedTasks / totalTasks) * 100);
  const percentage = (percentageProject + percentageTasks) / 2;

  return (
    <div className={styles.project}>
      <div>
        <h3 className={styles.projectTitle}>{title}</h3>
        <span>Due in {projectDuration} days</span>{" "}
        <span className={styles.projectStatus}>{status}</span>
        <span
          className={`${styles.projectStatus} ${styles[`projectStatus${priority}`]}`}
        >
          {priority}
        </span>
      </div>
      <div className={styles.projectProgress}>
        <p>
          Progress: <span>{percentage}%</span>
        </p>
        <div className={styles.projectProgressBar}>
          <div
            className={styles.projectProgressBarState}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
      <div className={styles.projectAssignee}>
        <p>Assign to:</p>
        <div>
          <img src={imageUrl} />
          <span>{name}</span>
        </div>
      </div>
    </div>
  );
}
