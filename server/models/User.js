'use strict';
var models = require('../models');
// model the data of the sqlite database
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    first_name: {
      type: DataTypes.STRING
    },
    middle_name: {
      type: DataTypes.STRING,
      defaultValue: 'not given'
    },
    last_name: {
      type: DataTypes.STRING
    }
  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
        //A User has many recepits.
        User.hasMany(models.Receipt, {
          onDelete: 'cascade' // when User is deleted, delete their receipt
        });
        User.hasMany(models.Email);
        User.hasMany(models.Phone);
        User.hasMany(models.Address);
      }
    }

  });

  return User;
};
