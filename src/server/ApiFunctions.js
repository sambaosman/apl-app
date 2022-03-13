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

export const addTeam = (teamName, division) => {
  axios
    .post("/teams", { id: uuidv4(), teamName: teamName, division: division })
    .catch((err) => {
      console.error(err);
    });
};

export const updatedTeam = (id, teamName, division) => {
  axios.put(`teams/${id}`, {
    teamName: teamName,
    division: division,
  });
};

export const deleteTeam = (id) => {
  axios.delete(`teams/${id}`).then((res) => {
    console.log(res);
  });
};
