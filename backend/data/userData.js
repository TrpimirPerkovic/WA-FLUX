const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const user = mongoose.model("user", userSchema);

user
  .find({})
  .then((users) => {
    console.log("Users:", users);
  })
  .catch((error) => {
    console.error("Error fetching users:", error);
  });

module.exports = user;
