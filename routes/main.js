const express = require("express");
const app = express.Router();
const fs = require("fs");

app.get("/Error/Lua.ashx", (req, res) => {
    res.status(200).send("Thx");
});

app.get("/Error/Dmp.ashx", (req, res) => {
    res.status(200).send("Thx");
});

module.exports = app;