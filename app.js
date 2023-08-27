const express = require("express");
const app = express();
app.use(express.json());
const router = require("./route");
const mongoose = require("mongoose");
//Import routers
app.use("/api/", router);
//db coonection
mongoose
  .connect("mongodb://127.0.0.1:27017/messageTranslation")
  .then(console.log("db connected ..!"))
  .catch((error) => console.log(error));
// Server is running on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
