import React from "react";
import NavBar from "../NavBar/NavBar";
import { Row, Col } from "reactstrap";
import AddToTeam from "../../LoginRegistration/AddToTeam";

const MyTeam = ({
  googleData,
  setLoggedIn,
  userTeamArray,
  setUserTeamArray,
}) => {
  return (
    <Row>
      <NavBar setLoggedIn={setLoggedIn} />
      {userTeamArray && userTeamArray.length ? (
        <React.Fragment>
          {userTeamArray.length > 1 ? (
            <div>multiple teams</div>
          ) : (
            <div>single team</div>
          )}
        </React.Fragment>
      ) : (
        <AddToTeam
          googleData={googleData}
          setLoggedIn={setLoggedIn}
          userTeamArray={userTeamArray}
          setUserTeamArray={setUserTeamArray}
        />
      )}
    </Row>
  );
};

export default MyTeam;
