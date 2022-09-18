const mongoose = require("mongoose"),
  Schema = mongoose.Schema;
const menu = mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: "User",
  },
  breakfast: [
    {
      type: Schema.Types.ObjectId,
      require: true,
      ref: "Dish",
    },
  ],
  lunch: [
    {
      type: Schema.Types.ObjectId,
      require: true,
      ref: "Dish",
    },
  ],
  dinner: [
    {
      type: Schema.Types.ObjectId,
      require: true,
      ref: "Dish",
    },
  ],
});
module.exports = mongoose.model("dailymenu", menu);
