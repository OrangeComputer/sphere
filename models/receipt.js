'use strict';
var models = require('../models');

module.exports = (sequelize, DataTypes) => {
  const Receipt = sequelize.define('Receipt', {
    date_received: {
      type: DataTypes.DATE
    },
    date_delievered: {
      type: DataTypes.DATE
    },
    user_id: {
      type: DataTypes.INTEGER
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
    },
  }, {
    timestamps: true,
    underscored: true
  }, {
    classMethods: {
      associate: (models) => {
        Receipt.belongsTo(models.User, {
          foreignKey: 'user_id',
          // as: 'user_id',
          onDelete: 'CASCADE'
        });
      }
    }
  });
  return Receipt;
};
