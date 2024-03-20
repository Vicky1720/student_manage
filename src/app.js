const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const dotenv = require("dotenv");
const path = require("path");
const rateLimit = require("express-rate-limit");
require("../src/helpers/db");
dotenv.config();

const app = express();

app.use(helmet({ crossOriginResourcePolicy: { policy: "same-site" } }));
app.use(express.json());
app.use(cors());

// Rate limiting middleware
const limiter = rateLimit({
  windowMs: 2 * 60 * 1000, // 2 minutes
  max: 100, // limit each IP to 10 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
});
app.use(limiter);

// Account limiting middleware
const accountLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // limit each account to 5 requests per windowMs
  message: (req) => {
    return `Too many requests from account ${req.ip}, please try again later.`;
  },
});

// Apply account limiting middleware to specific routes
app.use("/account-limited-route", accountLimiter);

app.use("/login", require("./routers/r_studentLogin"));

// app.use(require("../src/routers/index"));

app.use(
  "/",
  require("../src/middlewares/authmiddleware"),
  require("../src/routers/index")
);

module.exports = app;
