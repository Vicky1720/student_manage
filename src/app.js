const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const dotenv = require("dotenv");
const path = require("path");
require("../src/helpers/db");
dotenv.config();

const app = express();

app.use(helmet({ crossOriginResourcePolicy: { policy: "same-site" } }));
app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  try {
    return res.status(200).json({ message: "Server Is Running" });
  } catch (error) {
    return res.status(200).json({ errorMessage: "Server is crashed" });
  }
});

app.use(require("../src/routers/index"));

module.exports = app;
