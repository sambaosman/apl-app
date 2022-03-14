const express = require("express");
const app = express();
const AWS = require("aws-sdk");
const fs = require("fs");
const multer = require("multer");
const multerS3 = require("multer-s3");
const uuid = require("uuid").v4;
const path = require("path");

const s3 = new AWS.S3({ apiVersion: "2006-03-01" });

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "apl-logos",
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req, file, cb) => {
      cb(null, `${uuid()}`);
    },
  }),
});

require("dotenv").config(); //gets variables from .env and allows us to pass it in here

AWS.config.update({
  region: process.env.AWS_DEFAULT_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

app.post("/images", upload.single("image"), (req, res) => {
  const imagePath = req.file.path;
  const description = req.body.description;
  res.send({ description, imagePath });
  return res.json({ status: "ok" });
});

app.get("/images/:imageName", (req, res) => {
  const imageName = req.params.imageName;
  const readStream = fs.createReadStream(`images/${imageName}`);
  readStream.pipe(res);
});

app.use("/images", express.static("images"));

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

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("listening on port", port);
});
