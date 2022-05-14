import React from "react";
import AddToTeam from "../../LoginRegistration/AddToTeam";
import { useSelector } from "react-redux";
import MultipleTeams from "./MultipleTeams";

const MyTeam = ({
  googleData,
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
          userTeamArray={userTeamArray}
          setUserTeamArray={setUserTeamArray}
        />
      )}
    </React.Fragment>
  );
};

export default MyTeam;
