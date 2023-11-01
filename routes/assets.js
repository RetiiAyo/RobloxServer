const express = require("express");
const app = express.Router();
const fs = require("fs");
const fetch = require("node-fetch");

app.get("/asset/", (req, res) => {
    const { id } = req.query;

    try {
        fetch(`https://assetdelivery.roblox.com/v2/assetId/${id}`).then(res => res.json()).then(out => {
            const url = out.locations[0].location
            res.redirect(url);
        });
    } catch (error) {
        console.log(error);
    };
});

app.get("/Asset/", (req, res) => {
    const { id } = req.query;

    try {
        fetch(`https://assetdelivery.roblox.com/v2/assetId/${id}`).then(res => res.json()).then(out => {
            const url = out.locations[0].location
            res.redirect(url);
        });
    } catch (error) {
        console.log(error);
    };
});

app.get("/Asset/CharacterFetch.ashx", (req, res) => {
    return res.send("http://www.roblox.com/Asset/BodyColors.ashx?userId=1;http://www.roblox.com/Asset/?versionid=21351761");
});

app.get("/Asset/BodyColors.ashx", (req, res) => {
    if (fs.existsSync("./storage/game/BodyColors.ashx")) {
        const content = fs.readFileSync("./storage/game/BodyColors.ashx", "utf-8");
        res.send(content);
    };
});

module.exports = app;
