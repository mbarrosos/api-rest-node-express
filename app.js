const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cargar rutas
const hello_routes = require("./routers/hello");
const task_routes = require("./routers/task");

//Rutas bases
app.use("/api", hello_routes);
app.use("/api", task_routes);

module.exports = app;