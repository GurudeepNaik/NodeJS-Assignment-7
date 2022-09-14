const mongoose = require("mongoose");

//  Your code goes here
const Schema = mongoose.Schema;
const marioSchema = new Schema({
  name: { type: String, required: true },
  weight: { type: Number, required: true },
});
const marioModel = mongoose.model("mariochar", marioSchema, "MarioCollection");
module.exports = marioModel;
