import FolderIcon from "../../assets/folder.svg";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

function ProjectsTab(): React.JSX.Element {
  const navigate = useNavigate();

  function handleClick() {
    navigate("new-project");
  }

  return (
    <div className={styles.emptyProjects}>
      <div>
        <img src={FolderIcon} alt="folder-icon" />
        <h3>Add a new project to get started!</h3>
        <Button variant="Primary" onClick={handleClick}>
          Add project
        </Button>
      </div>
    </div>
  );
}

export default ProjectsTab;
