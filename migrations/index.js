'use strict';
var Sequelize = require("sequelize");

module.exports = {
  up: function(queryInterface, Sequelize) {
    queryInterface.addColumn(
      'notes',
      'dtf', {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      }
    );
  },

  down: function(queryInterface, Sequelize) {
    console.log('database down');
  }
};
