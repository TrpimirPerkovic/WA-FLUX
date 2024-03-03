const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");
const collection = require("./config");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static("public"));

app.set("view engine", "ejs");

//login
app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

// Register
app.post("/signup", async (req, res) => {
  const userData = {
    email: req.body.email,
    password: req.body.password,
  };

  try {
    // Here you should insert userData into your MongoDB collection
    await collection.insertMany(userData);
    res.status(201).send("User registered successfully");
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).send("Error registering user");
  }
});
const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
