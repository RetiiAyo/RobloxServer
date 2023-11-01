const express = require("express");
const app = express.Router();
const fs = require("fs");

app.get("/v1.1/Counters/Increment/", (req, res) => {
    const { apiKey, counterName, amount } = req.query;
    res.status(204).end();
});

module.exports = app;