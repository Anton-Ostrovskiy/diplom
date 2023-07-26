import { Link } from "react-router-dom";
import { Routes } from "../../constants/Routes";
import Button from "@mui/material/Button";
import WidgetsIcon from "@mui/icons-material/Widgets";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import { useState } from "react";
import "./NavPanel.scss";

const NavPanel = () => {
    const [isActive, setIsActive] = useState(false)

    const onChangeIsActive = () => {
        setIsActive(!isActive);
    }
  return (
    <>
      <h2>Name bank</h2>
      <div className="wrapper-menu">
        <Link to={Routes.Home}>
          <Button variant={ isActive ? "text" : "contained"} startIcon={<WidgetsIcon />} onClick={() => onChangeIsActive()}>
            Home
          </Button>
        </Link>
        <Link to={Routes.Transactions}>
          <Button variant={ isActive ? "text" : "contained"} startIcon={<SyncAltIcon />} onClick={() => onChangeIsActive()}>
            Transactions
          </Button>
        </Link>
      </div>
    </>
  );
};

export default NavPanel;
