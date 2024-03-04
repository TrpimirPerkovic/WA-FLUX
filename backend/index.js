const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const dbName = "userData";
const port = 3000;
const { user } = require("./data/userData");

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const uri =
  "mongodb+srv://trpimirperkovic:lmao1234@cluster0.d4xrttg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
// -------------------------------------------------------------------
/*
app.post("/user", async (req, res) => {
  try {
    const User = await user.create(req.body);
    res.status(200).json(User);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
}); */

// Fetch all users
MongoClient.connect("mongodb://localhost:27017/")
  .then((client) => {
    const connect = client.db(dbName);
    const collection = connect.collection("users");
    collection.find({}).then((ans) => {
      console.log(ans);
    });
  })
  .catch((err) => {
    console.error(err);
  });
/*
app.get("/", async (req, res) => {
  try {
    const users = await user.find({});
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Error fetching users" });
  }
});
*/
app.listen(port, () => {
  console.log(`App is listening on ${port}`);
});
