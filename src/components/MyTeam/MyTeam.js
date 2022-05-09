import React from "react";
import NavBar from "../NavBar/NavBar";
import { Row, Col } from "reactstrap";
import AddToTeam from "../../LoginRegistration/AddToTeam";
import { useSelector } from "react-redux";
import MultipleTeams from "./MultipleTeams";
const MyTeam = ({
  googleData,
  setLoggedIn,
  userTeamArray,
  setUserTeamArray,
  teamID,
  setTeamID,
}) => {
  const user = useSelector((state) => state.user.user);
  return (
    <React.Fragment>
      {user.teams && user.teams.length ? (
        <React.Fragment>
          {user.teams && user.teams.length > 1 ? (
            <div>single</div>
          ) : (
            <MultipleTeams
              googleData={googleData}
              setLoggedIn={setLoggedIn}
              userTeamArray={userTeamArray}
              setUserTeamArray={setUserTeamArray}
              teamID={teamID}
              setTeamID={setTeamID}
            />
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
    </React.Fragment>
  );
};

export default MyTeam;
