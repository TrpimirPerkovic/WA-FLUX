const mongoose = require("mongoose");

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://trpimirperkovic:lmao1234@cluster0.d4xrttg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
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
