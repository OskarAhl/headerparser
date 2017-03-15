var express = require("express");
var app = express();
var os = require("os");



app.get("/", function(req,res) {
	var host = String(os.hostname());
	var platform = String(os.platform());

	res.send({ip: req.connection.remoteAddress, os: host + " " + platform});	
});

app.listen(process.env.PORT || 3000, function() {
	console.log('Nuclear launch detected...');
});
