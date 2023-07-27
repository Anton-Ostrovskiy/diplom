import { Field, Formik } from "formik";
import { DefaultTextField } from "../../components/DefaultTextField";
import { Button } from "@mui/material";
// import { addUsers, removeUsers } from "../../store/reducers/transactions";
import { useDispatch, useSelector } from "react-redux";
import { addTransaction } from "../../store/reducers/transactions";

const Form = () => {

  const dispatch = useDispatch();

  const handleAddTransaction = () => {
    const newTransaction = { id: '1', date: '2021-01-01', amount: 100 };
    dispatch(addTransaction(newTransaction));
  };

  // const addUser = (user: string) => {
  //   dispatch(addUsers(user));
  // };

  // const removeUser = (user: string) => {
  //   dispatch(removeUsers(user));
  // };

  return (
    <>
      <Formik
        initialValues={{
          description: "",
          category: "taxi",
          money_spent: "",
          type: "",
        }}
        onSubmit={() => {}}
      >
        <form style={{display: "flex", flexDirection: "column", gap: 15}}>
          <div style={{display: "flex", gap: 15, marginBottom: 20}}>
            <label >Category</label>
            <Field as="select" name="category">
              <option value="food">Food</option>
              <option value="movie">Movie</option>
              <option value="taxi">Taxi</option>
              <option value="game">Game</option>
              <option value="health">Health</option>
              <option value="sport">Sport</option>
            </Field>
            <label >Type</label>
            <Field as="select" name="type">
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </Field>
          </div>

          <DefaultTextField label="Description" name="description" />
          <DefaultTextField label="money spent" name="money_spent" />
          <Button variant={"contained"} onClick={handleAddTransaction}>Add</Button>
        </form>
      </Formik>
    </>
  );
};

export default Form;
