const mongoose = require("mongoose");
// Earth Mesage schema
const earthMessageSchema = new mongoose.Schema({
  Response_from_Earth: String,
  Nokia_Translation: String,
  startTime: Date,
  endTime: Date,
});

const earthMessage = mongoose.model("earthMessage", earthMessageSchema);

// Mars Mesage schema
const marsMessageSchema = new mongoose.Schema({
  Response_from_Earth: String,
  Nokia_Translation: String,
  startTime: Date,
  endTime: Date,
});

const marsMessage = mongoose.model("marsMessage", marsMessageSchema);

// Export the models
module.exports = {
  earthMessage: earthMessage,
  marsMessage: marsMessage,
};


