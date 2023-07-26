import { Outlet } from "react-router-dom";
import Header from "./Header";
import NavPanel from "./NavPanel";
import "./styles.scss";

const Root = () => {
  return (
    <div className="wrapper">
      <aside
        style={{
          background: "black",
          width: 250,
          height: "100vh",
          color: "white",
        }}
      >
        <NavPanel />
      </aside>
      <div style={{
          flex:  1,
        }}>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Root;
