import React from "react";
import NavBar from "../NavBar/NavBar";
import { Row, Col } from "reactstrap";

const MyTeam = ({ setLoggedIn }) => {
  return (
    <Row>
      <NavBar setLoggedIn={setLoggedIn} />
      <Col className="right-column">
        <div className="page-container">test</div>
      </Col>
    </Row>
  );
};

export default MyTeam;
