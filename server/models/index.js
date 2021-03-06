"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");

//switch to change the environment
var env = process.env.NODE_ENV || "development";
//checking the paths
var config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
if (process.env.DATABASE_URL) {
  var sequelize = new Sequelize(process.env.DATABASE_URL);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}
var db = {};


//some magic
fs
  .readdirSync(__dirname)
  .filter((file) => {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach((file) => {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
