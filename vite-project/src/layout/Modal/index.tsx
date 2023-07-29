import Form from "./Form";
import "./styles.scss";

const Modal = ({ active, setActive }: any) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <Form
          closeModal={() => {
            setActive(false);
          }}
        />
      </div>
    </div>
  );
};

export default Modal;
