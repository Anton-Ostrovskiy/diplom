import "./Header.scss";

const Header = () => {
  let date = new Intl.DateTimeFormat("ru", {day: "numeric", month: "long", year: "numeric"}).format(new Date()).replace(/(\s?\г\.?)/, "");
  return (
    <header className="header">
      <div style={{display: "flex", alignItems: "center", justifyContent: "center", gap: 20}}>
        <h2>Hello</h2>
        <p>{date}</p>
      </div>
      <form>
        <input className="header__search" type="text" placeholder="Serch..." />
      </form>
    </header>
  );
};

export default Header;
