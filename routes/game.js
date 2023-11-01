const express = require("express");
const app = express.Router();
const fs = require("fs");

app.get("/game/:file", (req, res) => {
    const { file } = req.params;

    if (file === "ClientPresence.ashx") {
        return res.status(200).end();
    } else if (file === "GetCurrentUser.ashx") {
        return res.send("null");
    } else if (file === "logout.ashx") {
        return res.status(200).end();
    };

    if (fs.existsSync(`./storage/game/${file}`)) {
        res.send(fs.readFileSync(`./storage/game/${file}`, "utf-8"));
    } else {
        return res.status(404).end();
    };
});

app.get("/Game/:file", (req, res) => {
    const { file } = req.params;

    if (file === "ClientPresence.ashx") {
        return res.status(200).end();
    } else if (file === "GetCurrentUser.ashx") {
        return res.send("null");
    } else if (file === "logout.ashx") {
        return res.status(200).end();
    };

    if (fs.existsSync(`./storage/game/${file}`)) {
        res.send(fs.readFileSync(`./storage/game/${file}`, "utf-8"));
    } else {
        return res.status(404).end();
    };
});

app.get("/game/visit.ashx", (req, res) => {
    const { isPlaySolo, UserID, PlaceID, universeId } = req.query;
    res.status(200).send(fs.readFileSync("./storage/game/visit.ashx", "utf-8"));
});

app.get("/Game/Visit.ashx", (req, res) => {
    const { isPlaySolo, UserID, PlaceID, universeId } = req.query;
    res.status(200).send(fs.readFileSync("./storage/game/visit.ashx", "utf-8"));
});

module.exports = app;