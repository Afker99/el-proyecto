import styles from "./styles.module.scss"

import ProjectCard from "../ProjectCard/ProjectCard";

import { useProjects } from "../../Contexts/ProjectContext";

export default function ProjectsGrid() {
  const { projects } = useProjects();
  return (
    <div className={styles.grid}>
      {projects.map((project) => (
        <ProjectCard project={project} key={project.id} />
      ))}
    </div>
  );
}
