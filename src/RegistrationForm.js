import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

const RegistrationForm = ({
  submitTeamMember,
  setFirstName,
  setLastName,
  setEmail,
  firstName,
  lastName,
  email,
  setTeamMembers,
}) => {
  const splitLink = window.location.pathname.split("/"); //separate link by /
  const teamsID =
    splitLink[splitLink.length - 1] === "guest" //checking if link includes /guest. if it does,
      ? splitLink[splitLink.length - 2] //get the previous part of the link to grab the id
      : splitLink[splitLink.length - 1];
  const guest = window.location.pathname.includes("guest"); //check if player is a guest

  const handlePayment = async (e) => {
    const stripe = await loadStripe(
      "pk_test_51KTR3VHserWDsTQfAezh70ZTvCbXO3oFk312GrHoTICxpgGv1gUPvKvNztBOxKSF2u4II4Enw4nJ7OnoBntpjiB400m7NH4pUi"
    );
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: "price_1KTR7hHserWDsTQfYeCokzt8",
          quantity: 1,
        },
      ],
      mode: "payment",
      successUrl:
        "http://localhost:3000/a36a9aeb-a4e4-4506-aab6-4029b793d294/guest/registered-players",
      cancelUrl: "http://localhost:3000",
    });
  };
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
          onClick={() => {
            guest && handlePayment();
            submitTeamMember(
              firstName,
              lastName,
              email,
              setTeamMembers,
              teamsID,
              guest
            );
          }}
        >
          <div>Submit</div>
        </Link>
      </Form>
    </React.Fragment>
  );
};

export default RegistrationForm;
