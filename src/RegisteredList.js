import React, { useEffect } from "react";
import { Row, Col } from "reactstrap";
import { DataStore } from "aws-amplify";
import { Form } from "./models";

const RegisteredList = ({ forms, setForms, deletePlayerHandler }) => {
  useEffect(() => {
    const func = async () => {
      const models = await DataStore.query(Form);
      setForms(models);
    };
    func();
  }, []);

  return (
    <React.Fragment>
      {forms.map((form, index) => (
        <Row key={index}>
          <Col md="4">{form.firstName}</Col>
          <Col md="4">{form.lastName}</Col>
          <Col md="4">{form.email}</Col>
          <button onClick={() => deletePlayerHandler(form)}>Delete</button>
        </Row>
      ))}
    </React.Fragment>
  );
};

export default RegisteredList;
