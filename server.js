const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const dbroutes = require("./dbroute/dbroutes");
const port = 3300;
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());

const DB_URL = process.env.DB;
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.get("/", (request, response) => {
  response.json({ info: "Welcome to the rice fields" });
});

app.use("/", dbroutes);

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("Connect success");
  })
  .catch((error) => {
    console.log(error.message);
  });

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
