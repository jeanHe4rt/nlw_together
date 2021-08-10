const Database = require("./config");

const initDb = {
  async init() {
    let db = await Database();
    console.log("Data Base Conected!!!");
    await db.exec(
      `CREATE TABLE rooms (
      roomId INTEGER(6) PRIMARY KEY,
      passwd TEXT
      )`,
      console.log("TABLE rooms CREATED SUCCESSFULLY!!!")
    );
    await db.exec(
      `CREATE TABLE questions (
      questionId INTEGER PRIMARY KEY AUTOINCREMENT,
      titulo TEXT,
      read INT,
      FOREIGN KEY (questionId) REFERENCES activity(roomId)
     )`,
      console.log("TABLE questions CREATED SUCCESSFULLY!!!")
    );

    await db.close();
    console.log("Data Base CREATED!!!");
  },
};

initDb.init();
