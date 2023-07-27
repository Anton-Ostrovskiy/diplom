import { useSelector } from "react-redux";
import { RootState } from "../../store";


const Transactions: React.FC = () => {
    const transactions = useSelector((state: RootState) => state.transaction);

    return (
        <div>
            <h2>Transactions</h2>
            <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>{transaction.amount}</li>
        ))}
      </ul>
        </div>
    );
};

export default Transactions;