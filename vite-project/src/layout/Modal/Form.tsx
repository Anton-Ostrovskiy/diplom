import { Field, Formik, Form as FormikForm } from "formik";
import { DefaultTextField } from "../../components/DefaultTextField";
import { Button } from "@mui/material";
import { useDispatch} from "react-redux";
import { addTransaction } from "../../store/reducers/transactions";
import * as Yup from "yup";

interface IProps {
  closeModal: () => void;
}

const FormSchema = Yup.object().shape({
  description: Yup.string(),
  category: Yup.string().required("Required"),
  money_spent: Yup.number().required("Required"),
  type: Yup.string().required("Required"),
});

const Form = ({ closeModal }: IProps) => {

  const dispatch = useDispatch();

  const handleAddTransaction = (values: {
    description: string;
    category: string;
    money_spent: string;
    type: string;
  }) => {
    console.log(values);
    const newTransaction = {
      id: Date.now(),
      date: new Date(),
      amount: +values.money_spent,
      type: values.type,
      description: values.description,
      category: values.category,
      money_spent: values.money_spent,
    };
    dispatch(addTransaction(newTransaction));

    closeModal();
  };

  return (
    <>
      <Formik
        initialValues={{
          description: "",
          category: "",
          money_spent: "",
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
          <DefaultTextField label="money spent" name="money_spent" />
          <Button variant={"contained"} type="submit">Add</Button>
        </FormikForm>
      </Formik>
    </>
  );
};

export default Form;
