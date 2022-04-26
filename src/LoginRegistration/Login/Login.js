import React from "react";
import GoogleLogin from "react-google-login";
import graphic from "../../Images/bicyclekick.png";
import logo from "../../Images/apllogo.png";
import { Row, Col } from "reactstrap";
import { CardButtonWithText } from "../../StyledComponents/StyledComponents";
import "../Login.scss";

const Login = ({ handleLogin, handleFailure }) => {
  return (
    <div className="login-container">
      <Row className="center" style={{ marginBottom: "10px", width: "100%" }}>
        <Col md="1">
          {" "}
          <img src={logo} height={40} width={40} className="grayscale" />
        </Col>
        <Col md="10">
          {" "}
          <div className="logo-title">American Premier League</div>
        </Col>
      </Row>
      <div className="bicycle-kick-graphic">
        <img src={graphic} className="image-container" />
      </div>
      <div className="login-title">Log In</div>
      <GoogleLogin
        clientId={
          "281501315717-3q4u5jr1fnil0eamk218j0bshq9tp8j6.apps.googleusercontent.com"
        }
        render={(renderProps) => (
          <CardButtonWithText
            style={{ backgroundColor: "#F8F8F8" }}
            onClick={renderProps.onClick}
          >
            <span className="center google-button">
              <i
                className="fa-brands fa-google"
                style={{ fontSize: "15px", color: "white" }}
              />
            </span>
            <span className="button-title" style={{ color: "#4A4A4A" }}>
              Sign in with Google
            </span>
          </CardButtonWithText>
        )}
        buttonText="Log in with Google"
        onSuccess={handleLogin}
        onFailure={handleFailure}
        cookiePolicy={"single_host_origin"}
        style={{ alignItems: "center" }}
      />
    </div>
  );
};

export default Login;
