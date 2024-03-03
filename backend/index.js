const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/signup", (req, res) => {
  res.render("signup");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
