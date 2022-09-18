const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const comment = new Schema({
 userId: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: "User",
 },
 dishId: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: "Dish",
 },
 content: {
    type:String,
    require: true
 }
});
module.exports = mongoose.model("Comment", comment);
