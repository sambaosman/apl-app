import React, { useState } from "react";
import { Auth } from "aws-amplify";
import {
  NumberInput,
  PrimaryButton,
} from "../../StyledComponents/StyledComponents";
import { Row, Col } from "reactstrap";
import { loadStripe } from "@stripe/stripe-js";

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

const OTP = ({ formFields, setFormFields, setError, history }) => {
  const [authCode, setAuthCode] = useState(new Array(6).fill(""));

  const confirmRegistration = async (formFields, setFormFields, setError) => {
    const { email, teamMemberType } = formFields;
    try {
      await Auth.confirmSignUp(email, authCode.join(""));
      setFormFields(() => ({ ...formFields }));
      history("/login");
      teamMemberType === "guestPlayer" && handlePayment();
    } catch (error) {
      setError(error);
    }
  };

  const handleChange = (element, index) => {
    setAuthCode([
      ...authCode.map((d, idx) => (idx === index ? element.value : d)),
    ]);

    //focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  return (
    <div>
      {/* <Row style={{ display: "flex", justifyContent: "center" }}>
        <div className="icon-circle">
          <i class="fa-solid fa-mobile-screen"></i>{" "}
        </div>
      </Row>
      <hr /> */}
      <Row style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ fontWeight: "bold", fontSize: "17px" }}>Verification</div>
        <div style={{ fontSize: "13px" }}>
          Please enter your OTP code sent to your email
        </div>
      </Row>
      <Row style={{ display: "flex", justifyContent: "center" }}>
        {authCode.map((data, index) => {
          return (
            <NumberInput
              name="code"
              type="code"
              onChange={(e) => handleChange(e.target, index)}
              maxLength="1"
              value={data}
              onFocus={(e) => e.target.select()}
            />
          );
        })}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <PrimaryButton
            disabled={authCode.length > 4}
            onClick={(e) =>
              confirmRegistration(formFields, setFormFields, setError)
            }
          >
            Verify
          </PrimaryButton>
        </div>
      </Row>
    </div>
  );
};

export default OTP;
