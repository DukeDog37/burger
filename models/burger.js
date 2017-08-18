var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
      console.log("In Burger ALL: ");
      orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    console.log("In Burger CREATE: ");
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    console.log("In Burger UPDATE: ");
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb){
    orm.delete('burgers', condition, function(res){
      cb(res);
    });
  }
};

// Export the database functions for burgers_controller.js
module.exports = burger;
