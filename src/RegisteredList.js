import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import { Form as ReactForm, FormGroup, Label, Input, Modal } from "reactstrap";
import { updateForm } from "./RegistrationServices";

const RegisteredList = ({
  forms,
  setForms,
  deleteForm,
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
    getForms(setForms, window.location.pathname.split("/")[1]);
  }, []);

  return (
    <React.Fragment>
      {forms &&
        forms.length &&
        forms.map((form, index) => (
          <Row key={index}>
            <React.Fragment>
              <Col md="2">{form.firstName}</Col>
              <Col md="2">{form.lastName}</Col>
              <Col md="4">{form.email}</Col>
              <Col md="2">
                <button
                  onClick={() => {
                    setIsOpen(true);
                    setEditedPlayer(form.id);
                  }}
                >
                  Edit
                </button>
              </Col>
              <Col md="2">
                {" "}
                <button onClick={() => deleteForm(form, setForms)}>
                  Delete
                </button>
              </Col>
            </React.Fragment>
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
          <div
            onClick={() => {
              updateForm(
                editedPlayer,
                firstName,
                lastName,
                email,
                getForms,
                setForms
              );
              setIsOpen(false);
            }}
          >
            Update
          </div>
        </ReactForm>
      </Modal>
    </React.Fragment>
  );
};

export default RegisteredList;
