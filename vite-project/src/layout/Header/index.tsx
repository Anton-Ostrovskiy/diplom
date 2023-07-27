import "./Header.scss";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Modal from "../Modal";
import { useState } from "react";


const Header = () => {
  let date = new Intl.DateTimeFormat("ru", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
    .format(new Date())
    .replace(/(\s?\г\.?)/, "");

    const [modalActive, setModalActive] = useState(true)





  return (
    <>
      <header className="header">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
          }}
        >
          <h2>Hello</h2>
          <p>{date}</p>
        </div>
        <form>
          <IconButton onClick={() => setModalActive(true)} color="primary" aria-label="add to shopping cart">
            <AddIcon />
          </IconButton>
          <input
            className="header__search"
            type="text"
            placeholder="Serch..."
          />
        </form>
      </header>
      <Modal active={modalActive} setActive={setModalActive} />
    </>
  );
};

export default Header;
