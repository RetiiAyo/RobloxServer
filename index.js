const express = require("express");
const app = express();
const fs = require("fs");
const ratelimit = require("express-rate-limit");
const mongoose = require("mongoose");

const { logging } = require("./structure");
const config = require("./config")

app.use(ratelimit({ windowMs: 0.5 * 60 * 1000, max: 45 }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = fs.readdirSync("./routes").filter(route => route.endsWith(".js"));

var score = {};

routes.forEach(route => {
    app.use(require(`./routes/${route}`));
});

app.get("/", (req, res) => {
    res.json({
        status: "online"
    });
});

app.get("/Game/Wipeouts.ashx", (req, res) => {
    console.log(req.query.UserID);
    if (score[req.query.UserID]) {
      score[req.query.UserID]["Wipeouts"] = score[req.query.UserID]["Wipeouts"] + 1
    } else {
      score[req.query.UserID] = {"Wipeouts":1, "Knockouts":0}
    }
    console.log(score)
    res.json({
        status: "online"
    });
});

app.get("/Game/Knockouts.ashx", (req, res) => {
    console.log(req.query.UserID);
    if (score[req.query.UserID]) {
      score[req.query.UserID]["Knockouts"] = score[req.query.UserID]["Knockouts"] + 1
    } else {
      score[req.query.UserID] = {"Wipeouts":0, "Knockouts":1}
    }
    res.json({
        status: "online"
    });
});

app.use((req, res, next) => {
    return res.status(404).json({
        error: "Page not found"
    });
});

app.listen(config.port, () => {
    logging(1, `Started listening on port: ${config.port}`);
});
