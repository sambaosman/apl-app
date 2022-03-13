import axios from "axios";

export const getTeams = async () => {
  axios.get("/teams");
};

// export const getTeamById = (id) => {
//   fetch("/teams:id")
//     .then((res) => res.json())
//     .catch((error) => console.error("error", error));
// };

export const addTeam = () => {
  axios
    .post("/teams", { name: "test" })
    .then(() => console.log("Book Created"))
    .catch((err) => {
      console.error(err);
    });
};

//   export const updatedTeam = (id) => {
//     fetch("/teams:id")
//       .then((res) => res.json())
//       .then((res) => "response", res)
//       .catch((error) => {
//         console.error("error", error);
//       });
//   };

//   export const deleteTeam = (id) => {
//     fetch("/teams:id")
//       .then((res) => res.json())
//       .then((res) => "response", res)
//       .catch((error) => {
//         console.error("error", error);
//       });
//   };
