var express = require('express');
var app = express();

require("dotenv").config();
var messageStyle = process.env.MESSAGE_STYLE;

app.use("/public", express.static(__dirname + "/public"));

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", function (req, res) {
	console.log(messageStyle);

	res.json({
		message: process.env.MESSAGE_STYLE === "uppercase" ? "Hello json".toUpperCase() : "Hello json"
	});
})

module.exports = app;