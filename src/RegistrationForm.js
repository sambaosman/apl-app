import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";

const RegistrationForm = ({
  submitForm,
  setFirstName,
  setLastName,
  setEmail,
  firstName,
  lastName,
  email,
  setForms,
}) => {
  const splitLink = window.location.pathname.split("/"); //separate link by /
  const teamsID =
    splitLink[splitLink.length - 1] === "guest" //checking if link includes /guest. if it does,
      ? splitLink[splitLink.length - 2] //get the previous part of the link to grab the id
      : splitLink[splitLink.length - 1];
  const guest = window.location.pathname.includes("guest"); //check if player is a guest
  return (
    <React.Fragment>
      <Form>
        <FormGroup>
          <Label for="firstName">First Name</Label>
          <Input
            required
            name="firstName"
            id="firstName"
            placeholder="Enter First Name"
            onChange={(event) => setFirstName(event.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last Name</Label>
          <Input
            required
            name="lastName"
            id="lastName"
            placeholder="Enter Last Name"
            onChange={(event) => setLastName(event.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            required
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Enter Email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </FormGroup>
        <Link
          to={`${window.location.pathname}/registered-players`}
          onClick={() =>
            submitForm(firstName, lastName, email, setForms, teamsID, guest)
          }
        >
          <div>Submit</div>
        </Link>
      </Form>
    </React.Fragment>
  );
};

export default RegistrationForm;
