const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  name: String,
  path: String, // store path instead of binary data
  contentType: String,
  category:String
});

module.exports = mongoose.model("Image", imageSchema);
