"use strict";
var models = require("../models");
// model the data of the sqlite database
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define(
    "Item",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        primaryKey: true
      },
      description: {
        type: DataTypes.STRING
      },
      price: {
        type: DataTypes.DECIMAL
      },
      stock: {
        type: DataTypes.INTEGER
      }
    },
    {
      timestamps: true,
      underscored: true
    }
  );
  return Item;
};
