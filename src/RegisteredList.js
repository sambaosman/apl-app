import React from "react";
import { Row, Col } from "reactstrap";

const RegisteredList = ({ forms }) => {
  return (
    <React.Fragment>
      {forms.map((form, index) => (
        <Row key={index}>
          <Col md="4">{form.firstName}</Col>
          <Col md="4">{form.lastName}</Col>
          <Col md="4">{form.email}</Col>
        </Row>
      ))}
    </React.Fragment>
  );
};

export default RegisteredList;
