const express = require("express");
const userControlle = require("../controllers/user");

const api = express.Router();

api.use("/register", userControlle.register);

module.exports = api;