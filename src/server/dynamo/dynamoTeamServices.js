const AWS = require("aws-sdk");

require("dotenv").config(); //gets variables from .env and allows us to pass it in here

AWS.config.update({
  region: process.env.AWS_DEFAULT_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const dynamoClient = new AWS.DynamoDB.DocumentClient();
("teams");

const getTeams = async () => {
  const params = {
    TableName: "teams",
  };
  const teams = await dynamoClient.scan(params).promise();
  return teams;
};
const addOrUpdateTeam = async (team) => {
  const params = {
    TableName: "teams",
    Item: team,
  };
  return await dynamoClient.put(params).promise();
};

const deleteTeam = async (id) => {
  const params = {
    TableName: "teams",
    Key: {
      id,
    },
  };
  return await dynamoClient.delete(params).promise();
};

const getTeamById = async (id) => {
  const params = {
    TableName: "teams",
    Key: {
      id,
    },
  };
  return await dynamoClient.scan(params).promise();
};

module.exports = {
  dynamoClient,
  getTeams,
  getTeamById,
  deleteTeam,
  addOrUpdateTeam,
};
