const express = require("express");
const QuestionController = require("./controllers/QuestionController");
const RoomController = require("./controllers/RoomController");

const route = express.Router();

route.get("/", (req, res) => res.render("index", { page: "enter-room" }));
route.get("/room/:roomId", (req, res) => res.render("room"));
route.get("/create-pass", (req, res) =>
  res.render("index", { page: "create-pass" })
);

// Formato que o formuláriopassa as informações para o banco de dados
route.post("/question/:room/:question/:action", QuestionController.index);
route.post("/create-room", RoomController.create);

module.exports = route;
