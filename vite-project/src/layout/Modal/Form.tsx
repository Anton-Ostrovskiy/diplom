import { Field, Formik, Form as FormikForm } from "formik";
import { DefaultTextField } from "../../components/DefaultTextField";
import { Button } from "@mui/material";
import { useDispatch, useSelector} from "react-redux";
import { addTransaction } from "../../store/reducers/transactions";
import * as Yup from "yup";
import { useEffect } from "react";
import { RootState } from "../../store";

interface IProps {
  closeModal: () => void;
}

const FormSchema = Yup.object().shape({
  description: Yup.string(),
  category: Yup.string().required("Required"),
  amount: Yup.number().required("Required"),
  type: Yup.string().required("Required"),
});

const Form = ({ closeModal }: IProps) => {

  // const transactions = useSelector((state: RootState) => state.transaction);

  const dispatch = useDispatch();

  const handleAddTransaction = (values: {
    description: string;
    category: string;
    amount: string;
    type: string;
  }) => {
    console.log(values);
    const newTransaction = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      amount: +values.amount,
      type: values.type,
      description: values.description,
      category: values.category,
    };
    dispatch(addTransaction(newTransaction));

    closeModal();
  };

  // useEffect(() => {
  //   const storedTransactions = localStorage.getItem('transactions');
  //   if (storedTransactions) {
  //     dispatch(addTransaction(JSON.parse(storedTransactions)));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('transactions', JSON.stringify(transactions));
  // }, [transactions]);

  return (
    <>
      <Formik
        initialValues={{
          description: "",
          category: "",
          amount: "",
          type: "",
        }}
        validationSchema={FormSchema}
        onSubmit={handleAddTransaction}
      >
        <FormikForm style={{display: "flex", flexDirection: "column", gap: 15}}>
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
              <option value="revenue">Revenue</option>
              <option value="expenses">Expenses</option>
            </Field>
          </div>

          <DefaultTextField label="Description" name="description" />
          <DefaultTextField label="Amount" name="amount" />
          <Button variant={"contained"} type="submit">Add</Button>
        </FormikForm>
      </Formik>
    </>
  );
};

export default Form;
