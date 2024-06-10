const express = require("express");
const static = express();
const path = require("path");

static.use('/static', express.static(path.join(__dirname, "../frontend/static")));

module.exports = static;