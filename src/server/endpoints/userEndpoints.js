import axios from "axios";

export const getUsers = async (googleData, addUsers) => {
  axios
    .get(`/users`)
    .then((res) => {
      let currentUser = res.data.Items.find(
        (user) => user.googleId === googleData.profileObj.googleId
      );
      if (!currentUser) {
        currentUser = {
          id: googleData.profileObj.googleId,
          firstName: googleData.profileObj.givenName,
          lastName: googleData.profileObj.familyName,
          email: googleData.profileObj.familyName,
          imageUrl: googleData.profileObj.imageUrl,
          googleId: googleData.profileObj.googleId,
          teams: [],
        };
        axios.post("/users", currentUser);
      }
      addUsers(currentUser);
    })
    .catch((err) => console.log(err));
};

export const getUserById = async (id) => {
  axios.get(`/users/${id}`).then((res) => {
    console.log(res);
  });
};

export const addUser = (
  userTeamArray,
  setUserTeamArray,
  teamId,
  userTeam,
  googleData,
  id,
  setShowTeamIdInput
) => {
  axios
    .post("/users", {
      id: id,
      firstName: googleData.profileObj.givenName,
      lastName: googleData.profileObj.familyName,
      email: googleData.profileObj.email,
      imageUrl: googleData.profileObj.imageUrl,
      googleId: googleData.profileObj.googleId,
      teams: userTeamArray,
    })
    .then((res) => {
      console.log("response", res);
      setUserTeamArray([...userTeamArray, { teamId: teamId, user: userTeam }]);
      setShowTeamIdInput(false);
    })
    .catch((err) => {
      console.error(err);
    });
};

export const updateUser = (user, teams, updateUserStore) => {
  console.log("teams", teams);
  axios
    .put(`users/${user.id}`, {
      ...user,
      teams: teams,
    })
    .then((res) => {
      getUserById(user.id)
        .then((res) => {
          console.log("res", res);
          updateUserStore(res.Items[0]);
        })
        .catch((err) => console.log("err", err));
    });
};
