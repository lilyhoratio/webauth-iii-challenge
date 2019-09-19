const express = require("express");
const logger = require("morgan");

const authRouter = require("./auth/auth-router.js");
const userRouter = require("./users/user-router.js");
const server = express();

server.use(express.json());
server.use(logger("short"));

// Sanity check - basic route handler which executes on every `GET` request to URL specified.
server.get(`/`, (req, res) => {
  res.status(200).json({ api: "I am up!" });
});

server.use(`/api/auth`, authRouter);
server.use(`/api/users`, userRouter);

module.exports = server;
