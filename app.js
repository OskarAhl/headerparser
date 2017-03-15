var express = require("express");
var app = express();
var os = require("os");


app.get("/", function(req,res) {
	res.send({ip: req.connection.remoteAddress, os: os.hostname()});
	console.log(req.connection.remoteAddress);
	console.log(os.hostname());
});

app.listen(process.env.PORT || 3000, function() {
	console.log('Nuclear launch detected...');
});
