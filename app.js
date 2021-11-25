const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cargar rutas
const task_routes = require("./routers/task");

//Rutas bases
app.use("/api", task_routes);

module.exports = app;