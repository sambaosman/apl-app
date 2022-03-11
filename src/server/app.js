const express = require("express");
const app = express();

const {
  getTeams,
  getTeamById,
  deleteTeam,
  addOrUpdateTeam,
} = require("./dynamo");

app.use(express.json()); //allows you to parse BODY data coming from inside a post request

app.get("/teams", async (req, res) => {
  try {
    const teams = await getTeams();
    res.json(teams);
  } catch (error) {
    res.status(500).json({ err: "Something went wrong" });
  }
});

app.get("/teams:id", async (req, res) => {
  const id = req.params.id;
  try {
    const team = await getTeamById(id);
    res.json(team);
  } catch (error) {
    res.status(500).json({ err: "Something went wrong" });
  }
});

app.post("/teams", async (req, res) => {
  const team = req.body;
  try {
    const newTeam = await addOrUpdateTeam(team);
    res.json(newTeam);
  } catch (error) {
    res.status(500).json({ err: "Something went wrong" });
  }
});

app.put("/teams/:id", async (req, res) => {
  const team = req.body;
  const id = req.params.id;
  team.id = id;
  try {
    const updatedTeam = await addOrUpdateTeam(team);
    res.json(updatedTeam);
  } catch (error) {
    res.status(500).json({ err: "Something went wrong" });
  }
});

app.delete("/teams:id", async (req, res) => {
  const id = req.params.id;
  try {
    const team = await deleteTeam(id);
    res.json(team);
  } catch (error) {
    res.status(500).json({ err: "Something went wrong" });
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("listening on port");
});
