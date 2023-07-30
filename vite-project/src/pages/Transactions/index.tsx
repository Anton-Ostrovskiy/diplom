import { useSelector } from "react-redux";
import { RootState } from "../../store";
import "./transactions.scss";
import { useState } from "react";
import clsx from "clsx";
import { Button } from "@mui/material";

interface IProps {
  withFullWidth: boolean;
}

const Transactions = ({ withFullWidth }: IProps) => {
  const transactions = useSelector((state: RootState) => state.transaction);

  const [type, setType] = useState("all");

  const data =
    type === "all"
      ? transactions
      : transactions.filter((transaction) =>
          type === "revenue"
            ? transaction.type === "revenue"
            : transaction.type === "expenses"
        );

  return (
    <div className="transactiots">
      <h2>Recent Transactions</h2>
      <div
        className={clsx({
          transactiots__wrap__notfullwidth: withFullWidth === false,
        })}
      >
        <div style={{ display: "flex", gap: 20, marginBottom: 20 }}>
          <Button
            sx={{ width: 20, display: "flex", justifyContent: "center" }}
            variant={type === "all" ? "contained" : "text"}
            onClick={() => setType("all")}
          >
            All
          </Button>
          <Button
            sx={{ width: 100, display: "flex", justifyContent: "center" }}
            variant={type === "revenue" ? "contained" : "text"}
            onClick={() => setType("revenue")}
          >
            Revenue
          </Button>
          <Button
            sx={{ width: 100, display: "flex", justifyContent: "center" }}
            variant={type === "expenses" ? "contained" : "text"}
            onClick={() => setType("expenses")}
          >
            Expenses
          </Button>
        </div>
        <div
          className={clsx({
            transactiots__wrap__withfullwidth: withFullWidth !== false,
          })}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              borderBottom: "solid 1px red",
            }}
          >
            <p>Category</p>
            <p>Description</p>
            <p>Date</p>
            <p>Amount</p>
          </div>
          <div>
            <ul style={{ padding: 0 }}>
              {data.map((transaction) => (
                <li
                  key={transaction.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    borderBottom: "solid 1px red",
                  }}
                >
                  <p>{transaction.category}</p>
                  <p>{transaction.description}</p>
                  <p>{transaction.date}</p>
                  <p>${transaction.amount.toFixed(2)}</p>
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
