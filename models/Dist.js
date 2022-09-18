const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const dish = new Schema({
  dishname: {
    type: String,
    require: true,
  },
  keyword: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  ingredients: {
    type: Array,
    require: true,
  },
  howtomade: {
    type: Array,
    require: true,
  },
});
module.exports = mongoose.model("Dish", dish);
