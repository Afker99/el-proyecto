import Button from "../Button/Button";
import styles from "./styles.module.scss";

interface HeaderProps {
  title: string;
  desc: string;
  buttonChild: React.JSX.Element;
  buttonText: string;
  onClick?: () => void;
}

function Header({
  title,
  desc,
  buttonChild,
  buttonText,
  onClick
}: HeaderProps): React.JSX.Element {
  return (
    <header>
      <div>
        <h2 className={styles.title}>{title}</h2>
        <p>{desc}</p>
      </div>
      <Button variant="Primary" hasIcon={true} onClick={onClick}>
        {buttonChild}
        <span>{buttonText}</span>
      </Button>
    </header>
  );
}

export default Header;
