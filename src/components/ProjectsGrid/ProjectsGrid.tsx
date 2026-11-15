import styles from "./styles.module.scss"

import Project from "../Project/Project";

import { useProjects } from "../../Contexts/ProjectContext";

export default function ProjectsGrid() {
  const { projects } = useProjects();
  return (
    <div className={styles.grid}>
      {projects.map((project) => (
        <Project project={project} key={project.id} />
      ))}
    </div>
  );
}
