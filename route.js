const express = require("express");
const bodyParser = require("body-parser");
const route = express();
const mongoose = require("mongoose");
const { earthMessage, marsMessage } = require("./messageSchema");
route.use(bodyParser.urlencoded({ extended: true }));
route.use(bodyParser.json());
//referance to convert message to nummericMessage and viceversa
const charToNumericViceversa = {
  a: "2",
  b: "22",
  c: "222",
  d: "3",
  e: "33",
  f: "333",
  g: "4",
  h: "44",
  i: "444",
  j: "5",
  k: "55",
  l: "555",
  m: "6",
  n: "66",
  o: "666",
  p: "7",
  q: "77",
  r: "777",
  s: "7777",
  t: "8",
  u: "88",
  v: "888",
  w: "9",
  x: "99",
  y: "999",
  z: "9999",
  " ": "0",
};
// Function to convert text to numeric message
const textToNumeric = (text) => {
  let numericMessage = "";
  for (let i = 0; i < text.length; i++) {
    const char = text[i].toLowerCase();
    if (char in charToNumericViceversa) {
      if (
        numericMessage &&
        numericMessage[numericMessage.length - 1] ===
          charToNumericViceversa[char][0]
      ) {
        numericMessage += "_";
      }
      numericMessage += charToNumericViceversa[char];
    }
  }
  return numericMessage;
};

// Function to convert numeric message to text
const numericToText = (numericMessage) => {
  const numericParts = numericMessage.split("_");
  let englishMessage = "";
  for (const numericPart of numericParts) {
    const chars = numericPart.match(/(\d)\1*/g);
    if (chars) {
      for (const numericChar of chars) {
        const char = Object.keys(charToNumericViceversa).find(
          (key) => charToNumericViceversa[key] === numericChar
        );
        if (char) {
          englishMessage += char;
        }
      }
    }
    englishMessage += "";
  }
  return englishMessage.trim();
};
//Route to convert the series of numerics into the corresponding English characters and save messsage in DB.
route.post("/earth-mars-comm/message", async (req, res) => {
  const Response_from_Earth = req.body.Response_from_Earth;
  const Nokia_Translation = textToNumeric(Response_from_Earth);
  // Save the message to MongoDB
  const message = new earthMessage({ Response_from_Earth, Nokia_Translation });
  await message.save();
  res.json({ Response_from_Earth, Nokia_Translation });
});
//Route to convert a sentence written in English into the corresponding numeric message and save messsage in DB.
route.post("/mars-earth-comm/message", async (req, res) => {
  const Response_from_Mars = req.body.Response_from_Mars;
  const Nokia_Translation = numericToText(Response_from_Mars);
  // Save the message to MongoDB
  const message = new marsMessage({ Response_from_Mars, Nokia_Translation });
  await message.save();
  res.json({ Response_from_Mars, Nokia_Translation });
});

module.exports = route;
