import { useState } from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
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
  onClick,
}: HeaderProps): React.JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  function handleClick() {
    if (onClick) onClick();
    setIsModalOpen(true);
  }
  return (
    <header>
      <div>
        <h2 className={styles.title}>{title}</h2>
        <p>{desc}</p>
      </div>
      <Button variant="Primary" hasIcon={true} onClick={handleClick}>
        {buttonChild}
        <span>{buttonText}</span>
      </Button>

      {isModalOpen && (
        <Modal onClick={() => setIsModalOpen(false)}>
          <div>Hola, soy un modal!</div>
        </Modal>
      )}
    </header>
  );
}

export default Header;
