import Transactions from "../Transactions";
import "./styles.scss";

const Home = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card__balance">
          <p>Balance</p>
        </div>
        <div className="card__wraper">
          <div>
            <p>Credit card</p>
            <p>1234 1234 1234 1234</p>
          </div>
          <div>
            <p>MasterCard</p>
            <p>$1,023.45</p>
          </div>
        </div>
      </div>
      <div >
        <Transactions />
      </div>
    </div>
  );
};

export default Home;
