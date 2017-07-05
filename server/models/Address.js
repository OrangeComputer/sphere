'use strict';
var models = require('../models');
// model the data of the sqlite database
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    user_id: {
      type: DataTypes.INTEGER
    },
    city: {
      type: DataTypes.STRING
    },
    zip_code: {
      type: DataTypes.INTEGER,
      defaultValue: 'not given'
    },
    state: {
      type: DataTypes.STRING,
      defaultValue: 'not given'
    },
    street: {
      type: DataTypes.STRING,
      defaultValue: 'not given'
    }
  }, {
    timestamps: true,
    underscored: true,
    classMethods: {
      associate: (models) => {
        Address.belongsTo(models.User, {});
      }
    }
  });
  return Address;
};
