'use strict';

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    first_name: {
      type: DataTypes.STRING
    },
    middle_name: {
      type: DataTypes.STRING,
      defaultValue: 'not given'
    },
    last_name: {
      type: DataTypes.STRING
    },
  }, {
    underscored: true
  });

  return User;
};
