// vamos importar os dois modulos o sqlite e o sqlite 3
const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

module.exports = () =>
  open({
    filename: "./src/DB/rocketq.sqlite",
    driver: sqlite3.Database,
  });
