var express = require("express");
var moment = require("moment");
var router = express.Router();

// Import burger.js model
var burger = require("../models/burger.js");

// Create get, post, put and delete routes
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    //console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
    burger.create([
    "burger_name", "devoured", "date"
  ], [
    req.body.burger, 0, moment().format("YYYY-MM-DD HH:mm:ss")
  ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  burger.update({
    devoured: 1
  }, condition, function() {
    res.redirect("/");
  });
});

router.delete('/:id', function(req, res){
  var condition = 'id = ' + req.params.id;
    burger.delete(condition, function(){
      res.redirect('/');
    });
});


// Export routes for server.js to use.
module.exports = router;
