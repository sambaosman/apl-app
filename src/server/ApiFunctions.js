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

export const updateTeam = (id, teamName, division, setTeams) => {
  axios
    .put(`teams/${id}`, {
      teamName: teamName,
      division: division,
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
