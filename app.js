const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cargar rutas
const task_routes = require("./routers/task");
const user_routes = require("./routers/user");

//Rutas bases
app.use("/api", task_routes);
app.use("/api", user_routes);

module.exports = app;