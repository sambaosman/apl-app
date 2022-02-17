import React, { useEffect } from "react";
import AdminPage from "./AdminPage";
import PlayerPage from "./PlayerPage";
import ManagerPage from "./ManagerPage";
import { Auth } from "aws-amplify";

const HomePage = ({ teams, setTeams, setLoggedIn }) => {
  useEffect(() => {
    Auth.currentAuthenticatedUser().then((user) => {
      console.log(user);
    });
  }, []);

  return (
    <React.Fragment>
      <AdminPage teams={teams} setTeams={setTeams} setLoggedIn={setLoggedIn} />
    </React.Fragment>
  );
};

export default HomePage;
