const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const dbroutes = require("./dbroute/dbroutes");

require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());
const port = process.env.Port;
const DB_URL = "mongodb+srv://kshuyz0055:kshuyz0055@cluster0.vnwhw.mongodb.net/Dist?retryWrites=true&w=majority";
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

app.listen(process.env.Port || 3000, () => {
  console.log(`App running on port ${port}. `);
});
