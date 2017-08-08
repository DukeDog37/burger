var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");
var bodyparser = require("body-parser");
var methodoverride = require("method-override");
//establish connection from pool
var conn = require('./config/connection.js').pool;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Create instance of express app.
var app = express();

// Specify the port.
var port = 8090;





app.listen(port);
// Initiate MySQL Connection.
conn.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});