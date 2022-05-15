const AWS = require("aws-sdk");

require("dotenv").config(); //gets variables from .env and allows us to pass it in here

AWS.config.update({
  region: process.env.AWS_DEFAULT_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const dynamoClient = new AWS.DynamoDB.DocumentClient();
("users");

const getUsers = async () => {
  const params = {
    TableName: "users",
  };
  const users = await dynamoClient.scan(params).promise();
  return users;
};

const addOrUpdateUser = async (user) => {
  const params = {
    TableName: "users",
    Item: user,
  };
  return await dynamoClient.put(params).promise();
};

const deleteUser = async (id) => {
  const params = {
    TableName: "users",
    Key: {
      id,
    },
  };
  return await dynamoClient.delete(params).promise();
};

const getUserById = async (id) => {
  const params = {
    TableName: "users",
    Key: {
      id,
    },
  };
  return await dynamoClient.get(params).promise();
};

module.exports = {
  dynamoClient,
  getUsers,
  addOrUpdateUser,
  getUserById,
  deleteUser,
};
