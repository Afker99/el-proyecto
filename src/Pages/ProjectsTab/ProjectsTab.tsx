import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

function ProjectsTab(): React.JSX.Element {
  const navigate = useNavigate();

  function handleClick() {
    navigate("new-project");
  }

  return (
    <div>
      <Button variant="Primary" onClick={handleClick}>
        Create a Project
      </Button>
      <h1>All Projects</h1>
    </div>
  );
}

export default ProjectsTab;
