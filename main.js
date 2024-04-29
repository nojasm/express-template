const express = require("express");
const app = express();

const root = __dirname + "/public";

app.get("/", (req, res) => {
    res.sendFile(root + "/index.html");
});

app.get("/[/a-zA-Z0-9.]+\.(css|png|jpg|svg|js)", (req, res) => {
    res.sendFile(root + req.url);
});

app.listen(80, () => {
    console.log("Running on port 80");
});