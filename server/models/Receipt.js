'use strict';
var models = require('../models');
// model the data of the sqlite database
module.exports = (sequelize, DataTypes) => {
  const Receipt = sequelize.define('Receipt', {
    user_id: {
      type: DataTypes.INTEGER
    },
    date_received: {
      type: DataTypes.DATE
    },
    date_delievered: {
      type: DataTypes.DATE
    },
    total_cost: {
      type: DataTypes.DECIMAL
    },
    tax: {
      type: DataTypes.DECIMAL
    },
    status: {
      type: DataTypes.INTEGER
    },
    discount: {
      type: DataTypes.DECIMAL
    }
  }, {
    timestamps: true,
    underscored: true,
    classMethods: {
      associate: (models) => {
        // owner_id is the id of the receipt and is the foreign key in the notes table
        Receipt.hasMany(models.Note, {
          foreignKey: 'owner_id'
        });
        Receipt.belongsTo(models.User, {});
      }
    }
  });
  return Receipt;
};
