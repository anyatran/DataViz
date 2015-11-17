"use strict"

var express = require("express");
var https = require('https');
var path = require('path');
var app = express();
app.set('view engine', 'jade');


app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'assets')));
app.get("/", function (req, res) {
  res.send("Hello");
});

app.get("/header", function (req, res) {
  res.render("header", {
    title: "Anya",
    message: "hello there"
  });
});
app.get("/force", function (req, res) {
  res.render("force", {});
});
/*
var httpServer = require('http').createServer(app);
httpServer.listen(app.get('port'), function() {
    console.log("Listening on port " + app.get('port'));
});
*/
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});