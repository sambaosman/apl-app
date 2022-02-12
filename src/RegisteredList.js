import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import { DataStore } from "aws-amplify";
import { Form } from "./models";
import { Form as ReactForm, FormGroup, Label, Input, Modal } from "reactstrap";
import { Link } from "react-router-dom";

const RegisteredList = ({
  handleSubmit,
  forms,
  setForms,
  deletePlayerHandler,
  setFirstName,
  setLastName,
  setEmail,
  firstName,
  lastName,
  email,
  getForms,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [editedPlayer, setEditedPlayer] = useState(null);

  useEffect(() => {
    getForms();
  }, []);

  const updateFormHandler = async () => {
    try {
      const original = await DataStore.query(Form, editedPlayer);
      const update = await DataStore.save(
        Form.copyOf(original, (updated) => {
          updated.firstName = firstName;
          updated.lastName = lastName;
          updated.email = email;
        })
      );
      getForms();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      {forms.map((form, index) => (
        <Row key={index}>
          <React.Fragment>
            <Col md="4">{form.firstName}</Col>
            <Col md="4">{form.lastName}</Col>
            <Col md="4">{form.email}</Col>
          </React.Fragment>
          <button
            onClick={() => {
              setIsOpen(true);
              setEditedPlayer(form.id);
            }}
          >
            Edit
          </button>
          <button onClick={() => deletePlayerHandler(form)}>Delete</button>
        </Row>
      ))}
      <Modal isOpen={isOpen} toggle={() => setIsOpen(false)}>
        <ReactForm>
          <FormGroup>
            <Label for="firstName">First Name</Label>
            <Input
              name="firstName"
              id="firstName"
              placeholder="Enter First Name"
              onChange={(event) => setFirstName(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="lastName">Last Name</Label>
            <Input
              name="lastName"
              id="lastName"
              placeholder="Enter Last Name"
              onChange={(event) => setLastName(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Enter Email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </FormGroup>
          <div onClick={() => updateFormHandler}>Update</div>
        </ReactForm>
      </Modal>
    </React.Fragment>
  );
};

export default RegisteredList;
