const express = require("express");
const nanoid = require("nanoid");

const fs = require("fs");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.post("/user/create", (req, res) => {
  fs.readFile("./db.json", "utf-8", (err, data) => {
    const parsed = JSON.parse(data);
    parsed.users = [...parsed.users, req.body];

    fs.writeFile("./db.json", JSON.stringify(parsed), "utf-8", () => {
      res.status(201).send("user created");
    });
  });
});



app.post("./db.json", (req, res) => {
  fs.readFile("./db.json", "utf-8", (err, data));
});
