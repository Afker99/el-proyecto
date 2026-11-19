import global from "../../global.module.scss";
import styles from "./styles.module.scss";

import { useState } from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

interface HeaderProps {
  title: string;
  desc: string;
  buttonChild: React.JSX.Element;
  buttonText: string;
  onClick?: () => void;
  modal?: React.JSX.Element;
}

function Header({
  title,
  desc,
  buttonChild,
  buttonText,
  onClick,
  modal,
}: HeaderProps): React.JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  function handleClick() {
    if (onClick) onClick();
    if (modal !== undefined) setIsModalOpen(true);
  }
  return (
    <header>
      <div>
        <h2 className={global.title}>{title}</h2>
        <p>{desc}</p>
      </div>
      <Button variant="Primary" hasIcon={true} onClick={handleClick}>
        {buttonChild}
        <span>{buttonText}</span>
      </Button>

      {isModalOpen && (
        <Modal onClick={() => setIsModalOpen(false)}>{modal}</Modal>
      )}
    </header>
  );
}

export default Header;
