'use strict';
var models = require('../models');
// model the data of the sqlite database
module.exports = (sequelize, DataTypes) => {
  const Phone = sequelize.define('Phone', {
    user_id: {
      type: DataTypes.INTEGER
    },
    number: {
      type: DataTypes.STRING
    },
    phone_type: {
      type: DataTypes.STRING,
      defaultValue: 'not given'
    }
  }, {
    timestamps: true,
    underscored: true,
    classMethods: {
      associate: (models) => {
        Phone.belongsTo(models.User, {});
      }
    }
  });
  return Phone;
};
