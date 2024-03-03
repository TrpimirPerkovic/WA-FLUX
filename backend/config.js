const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://localhost:27017/userData");
// pass: qzaTuEDTpOSlEf2d
connect
  .then(() => {
    console.log("DB connected successfully!");
  })
  .catch(() => {
    console.error("Data cannot be reached!");
  });

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

const collection = new mongoose.model("users", LoginSchema);

module.exports = collection;
