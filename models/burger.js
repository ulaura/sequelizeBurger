// Creating the model (table) called burgers for burgers_db

// Dependencies
// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/config.js");

// Creates a "burgers" model that matches up with DB
var Burgers = sequelize.define("burgers", {
  burger_name: {
    type: Sequelize.STRING,
    allowNull: false
    validate: {
    	len: [1]
    }
  },
  devoured: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
}, {
  timestamps: true
});

// Syncs with DB
Burgers.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = Burgers;
