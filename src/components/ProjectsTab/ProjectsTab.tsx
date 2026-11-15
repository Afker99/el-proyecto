import styles from "./styles.module.scss"

import { useNavigate } from "react-router-dom";
import EmptyState from "../EmptyState/EmptyState";
import FolderIcon from "../../assets/folder.svg";
import { useProjects } from "../../Contexts/ProjectContext";
import Header from "../TabHeader/Header";
import { FolderPlus } from "lucide-react";
import ProjectsGrid from "../ProjectsGrid/ProjectsGrid";

function ProjectsTab(): React.JSX.Element {
  const navigate = useNavigate();
  function handleClick() {
    navigate("new-project");
  }

  const { projects } = useProjects();

  {
    if (projects.length === 0)
      return (
        <EmptyState
          title="Add a new project to get started!"
          buttonText="Create New Project"
          onClick={handleClick}
          folderIcon={FolderIcon}
        />
      );
  }
  return (
    <div className={styles.container}>
      <Header
        title="All Projects"
        desc="View and manage your all projects"
        buttonChild={<FolderPlus size={16} />}
        buttonText="Create New Project"
        onClick={handleClick}
      />
      <ProjectsGrid />
    </div>
  );
}

export default ProjectsTab;
