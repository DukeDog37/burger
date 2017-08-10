var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
//var nicetable = require('console.table');
var app = express();
var conn = require('./config/connection.js').pool;
var connection;
app.use(express.static("public"));
app.use(methodOverride("_method"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//var app = express();
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Create instance of express app.


// Specify the port.
var port = 8080;

//app.listen(port);
// Initiate MySQL Connection.
conn.getConnection(function(err, connect) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connect.threadId);
  connection = connect;
 }); 
  
  app.get("/", function(req, res) {
  	console.log("right before connect is used");
  connection.query("SELECT * FROM burgers;", function(err, data) {
    if (err) throw err;

    // Test it
     console.log('The solution is: ', data);

    // Test it
    // res.send(data);

    res.render("index", { burgers: data });
  });
});

// Post route -> back to home
app.post("/", function(req, res) {
  
  connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?, false)", [req.body.burger], function(err, result) {
    if (err) throw err;

    res.redirect("/");
  });
});




app.listen(port);