"use strict";
var models = require("../models");
// model the data of the sqlite database
module.exports = (sequelize, DataTypes) => {
  const Service = sequelize.define(
    "Service",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      name: { type: DataTypes.STRING },
      description: { type: DataTypes.STRING },
      price: { type: DataTypes.DECIMAL },
      service_type: { type: DataTypes.STRING }
    },
    {
      timestamps: true,
      underscored: true,
      classMethods: {
        associate: models => {
          Service.belongsTo(models.Receipt, {});
        }
      }
    }
  );
  return Service;
};
