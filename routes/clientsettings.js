const express = require("express");
const app = express.Router();
const fs = require("fs");

app.get("/Setting/QuietGet/ClientSharedSettings", (req, res) => {
    return res.json({});
});

app.get("/Setting/QuietGet/ClientAppSettings", (req, res) => {
    return res.json({});
});

module.exports = app;