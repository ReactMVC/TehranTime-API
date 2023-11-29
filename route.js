const express = require('express');
const Time = require('./time');

const Route = express.Router();

Route.route("/time").get(Time.getTime);

module.exports = Route;