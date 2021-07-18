var express = require('express');
var app = express();

app.use("/public", express.static(__dirname + "/public"));

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", function (req, res) {
	var message = "Hello json";

	console.log(process.env.MESSAGE_STYLE);

	if (process.env.MESSAGE_STYLE === "uppercase") {
		message = message.toUpperCase();
	}

	res.json({
		message: message
	});
})

module.exports = app;