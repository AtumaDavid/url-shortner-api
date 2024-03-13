const express = require("express");
const router = express.Router();
const validUrl = require("valid-url");
const shortid = require("shortid");
const config = require("config");

const Url = require("../models/url");

// @route POST /api/url/shorten
// @desc  Create short URL

module.exports = router;
