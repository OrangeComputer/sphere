'use strict';

module.exports = function(sequelize, DataTypes) {
  var Receipt = sequelize.define('Receipt', {
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
    },
  }, {
    timestamps: true,
    underscored: true
  }, {
    classMethods: {
      associate: function(models) {
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
