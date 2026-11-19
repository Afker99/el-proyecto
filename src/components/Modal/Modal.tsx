import styles from "./styles.module.scss";

interface ModalProps {
  children: React.JSX.Element | undefined;
  onClick: () => void;
}

function Modal({ children, onClick }: ModalProps): React.JSX.Element {
  return (
    <>
      <div className={styles.overlay} onClick={onClick}></div>
      <div className={styles.modal}>{children}</div>
    </>
  );
}

export default Modal;
