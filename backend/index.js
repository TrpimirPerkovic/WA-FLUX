const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json());

const { MongoClient, ServerApiVersion } = require("mongodb");
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

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const userData = mongoose.model("userData", userSchema);

userData
  .find({})
  .then((users) => {
    console.log("Users:", users);
  })
  .catch((error) => {
    console.error("Error fetching users:", error);
  });

app.listen(port, () => {
  console.log(`App is listening on ${port}`);
});
