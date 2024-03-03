const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

mong;

app
  .get("/", (req, res) => {
    res.set({
      "Allow-access-Allow-origin": "*",
    });
  })
  .listen(3000);

console.log("Listening on port 3000");
/*
const uri =
  "mongodb+srv://trpimirperkovic:qzaTuEDTpOSlEf2d@cluster0.d4xrttg.mongodb.net/your_database_name?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    return client.db("flux"); // Replace with your database name
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    throw err;
  }
}

app.post("/api/signup", async (req, res) => {
  try {
    const db = await connectToDatabase();
    const userData = req.body;
    const collection = db.collection("users");

    await collection.insertOne(userData);
    res.status(201).send("User registered successfully");
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).send("Error registering user");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
*/
