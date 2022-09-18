const mongoose = require("mongoose"),
  Schema = mongoose.Schema;
const User = new mongoose.Schema(
  {
    useracc: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    username: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", User);
