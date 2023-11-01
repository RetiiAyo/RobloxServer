const colors = require("colors");

function log(type, message) {
    if (type === 1) {
        console.log("[Backend]".yellow + ": " + message);
    } else if (type === 2) {
        console.log("[Success]".red + ": " + message);
    } else if (type === 3) {
        console.log("[Error]".yellow + ": " + message);
    };
};

module.exports = log;