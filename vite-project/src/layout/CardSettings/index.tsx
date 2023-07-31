import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { DefaultTextField } from "../../components/DefaultTextField";
import "./styles.scss";
import { Button } from "@mui/material";

interface ICardSettingsProps {
  onCardSettingsSubmit: (cardNumber: string, balance: number) => void;
}

const CardSchema = Yup.object().shape({
  balance: Yup.number().required("Required"),
  cardNumber: Yup.string().min(16).required("Required"),
});

const CardSettings: React.FC<ICardSettingsProps> = ({
  onCardSettingsSubmit,
}) => {


  const handleSubmit = (values: any) => {
    onCardSettingsSubmit(values.cardNumber, values.balance);
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      validationSchema={CardSchema}
      initialValues={{ cardNumber: "", balance: ""}}
    >
        <Form className="card__form" >
          <DefaultTextField label="Card number" name="cardNumber" inputProps={{maxLength:16}} />
          <DefaultTextField label="Balance" name="balance"/>
          <Button variant={"contained"} type="submit">Submit</Button>
        </Form>
    </Formik>
  );
};

export default CardSettings;
