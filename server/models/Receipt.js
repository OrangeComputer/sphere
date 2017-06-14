'use strict';
var models = require('../models');
// model the data of the sqlite database
module.exports = (sequelize, DataTypes) => {
  const Receipt = sequelize.define('Receipt', {
    date_received: DataTypes.DATE,
    date_delievered: DataTypes.DATE,
    user_id: DataTypes.INTEGER,
    total_cost: DataTypes.DECIMAL,
    tax: DataTypes.DECIMAL,
    status: DataTypes.INTEGER,
    discount: DataTypes.DECIMAL
  }, {
    timestamps: true,
    underscored: true,
    classMethods: {
      associate: (models) => {
        Receipt.belongsTo(models.User, {});
      }
    }
  });
  return Receipt;
};
