import React from "react";
import GoogleLogin from "react-google-login";
import graphic from "../../Images/bicyclekick.png";
import logo from "../../Images/apllogo.png";
import { Row, Col } from "reactstrap";
import "../Login.scss";

const Login = ({ handleLogin, handleFailure }) => {
  return (
    <React.Fragment>
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
        buttonText="Log in with Google"
        onSuccess={handleLogin}
        onFailure={handleFailure}
        cookiePolicy={"single_host_origin"}
        style={{ alignItems: "center" }}
      />
    </React.Fragment>
  );
};

export default Login;
