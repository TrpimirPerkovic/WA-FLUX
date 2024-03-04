const mongoose = require("mongoose");

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:0.0.0.0/userData", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected successfully!");
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
  });

// Define Schema
const LoginSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Create and export model
module.exports = mongoose.model("User", LoginSchema); // Export the model, not the instance
