import axios from "axios";

export const getTeams = async (setTeams) => {
  axios.get(`/teams`).then((res) => {
    setTeams(res.data.Items);
  });
};

export const getTeamById = async (id) => {
  axios.get(`/teams/${id}`).then((res) => {
    console.log(res);
  });
};

export const addTeam = (teamName, division, setTeams, id, imageName) => {
  axios
    .post("/teams", {
      id: id,
      teamName: teamName,
      division: division,
      imageURL: `https://apl-logos.s3.amazonaws.com/${imageName}`,
    })
    .then((res) => {
      getTeams(setTeams);
    })
    .catch((err) => {
      console.error(err);
    });
};

export const updateTeam = (editedTeam, teamName, division, image, setTeams) => {
  axios
    .put(`teams/${editedTeam.id}`, {
      teamName: teamName,
      division: division,
      imageURL: image,
    })
    .then((res) => {
      getTeams(setTeams);
    });
};

export const deleteTeam = (id, setTeams) => {
  axios
    .delete(`teams/${id}`)
    .then((res) => {
      getTeams(setTeams);
    })
    .catch((err) => {
      console.error(err);
    });
};

export const addUser = (
  userTeamArray,
  googleData,
  setUserTeamArray,
  teamId,
  userTeam,
  id
) => {
  axios
    .post("/users", {
      id: id,
      firstName: googleData.profileObj.givenName,
      lastName: googleData.profileObj.familyName,
      email: googleData.profileObj.familyName,
      imageUrl: googleData.profileObj.imageUrl,
      googleId: googleData.profileObj.googleId,
      teams: userTeamArray,
    })
    .then((res) => {
      console.log("response", res);
      setUserTeamArray([...userTeamArray, { teamId: teamId, user: userTeam }]);
    })
    .catch((err) => {
      console.error(err);
    });
};

export const getUserById = async (id) => {
  axios.get(`/users/${id}`).then((res) => {
    console.log(res);
  });
};

export const getUsers = async (googleData) => {
  axios.get(`/users`).then((res) => {
    let currentUser = res.data.Items.find(
      (user) => user.googleId === googleData.profileObj.googleId
    );
  });
};
