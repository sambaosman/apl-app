import axios from "axios";
import { v4 as uuidv4 } from "uuid";

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

export const addTeam = (teamName, division, setTeams, imageURL) => {
  axios
    .post("/teams", {
      id: uuidv4(),
      teamName: teamName,
      division: division,
      imageURL: imageURL,
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
  axios.delete(`teams/${id}`).then((res) => {
    getTeams(setTeams);
  });
};
