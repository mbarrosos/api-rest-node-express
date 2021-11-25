const express = require("express");
const helloControllers = require("../controllers/hello");

const api = express.Router();
api.get("/hello", helloControllers.getHello);

module.exports = api;