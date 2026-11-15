import styles from "./styles.module.scss";
import Button from "../../components/Button/Button";

interface EmptyStateProps {
  title: string;
  buttonText: string;
  onClick: () => void;
  folderIcon: string;
}

function EmptyState({title, buttonText, onClick, folderIcon}: EmptyStateProps) {

  return (
    <div className={styles.emptyProjects}>
      <div>
        <img src={folderIcon} />
        <h3>{title}</h3>
        <Button variant="Primary" onClick={onClick}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
}

export default EmptyState;

// Add a new project to get started!
// Add project