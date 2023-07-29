import { useSelector } from "react-redux";
import { RootState } from "../../store";
import "./transactions.scss";

const Transactions: React.FC = () => {
  const transactions = useSelector((state: RootState) => state.transaction);

  return (
    <div className="transactiots">
      <h2>Recent Transactions</h2>
      <div>
        <div style={{ display: "flex", gap: 20, marginBottom: 20 }}>
          <button>All</button>
          <button>Revenue</button>
          <button>Expenses</button>
        </div>
        <div className="transactiots__wrap">
          <div style={{ display: "flex", justifyContent: "space-around", borderBottom: "solid 1px red"}}>
            <p>Category</p>
            <p>Description</p>
            <p>Date</p>
            <p>Amount</p>
          </div>
          <div>
            <ul style={{ padding: 0}}>
              {transactions.map((transaction) => (
                <li key={transaction.id} style={{display: "flex", justifyContent: "space-around", borderBottom: "solid 1px red"}}>
                  <p>{transaction.category}</p>
                  <p>{transaction.description}</p>
                  <p>{transaction.date.toLocaleDateString()}</p>
                  <p>${transaction.amount}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
