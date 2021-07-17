var express = require('express');
var app = express();

function getString(req, res) {
	res.send("Hello Express");
}

app.get("/", getString);




































 module.exports = app;
