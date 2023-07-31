import { Link } from "react-router-dom";
import { Routes } from "../../constants/Routes";
import Button from "@mui/material/Button";
import WidgetsIcon from "@mui/icons-material/Widgets";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import { useState } from "react";
import "./NavPanel.scss";

const NavPanel = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const onChangeIsActive = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <div className="wrapper-menu">
        <h2>Name bank</h2>
        <Link style={{textDecoration: "none"}} to={Routes.Home}>
          <Button
            sx={{ width: 200, display: "flex", justifyContent: "flex-start" }}
            variant={location.pathname === Routes.Home ? "contained" : "text"}
            startIcon={<WidgetsIcon />}
            onClick={() => onChangeIsActive()}
          >
            Home
          </Button>
        </Link>
        <Link style={{textDecoration: "none"}} to={Routes.Transactions}>
          <Button
            sx={{ width: 200, display: "flex", justifyContent: "flex-start" }}
            variant={
              location.pathname === Routes.Transactions ? "contained" : "text"
            }
            startIcon={<SyncAltIcon />}
            onClick={() => onChangeIsActive()}
          >
            Transactions
          </Button>
        </Link>
      </div>
    </>
  );
};

export default NavPanel;
