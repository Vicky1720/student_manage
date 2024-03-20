const express = require("express");

const { getLogin } = require("../controller/Login.js");

const Login = express.Router();

Login.get("/", getLogin);

module.exports = Login;
