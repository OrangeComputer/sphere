'use strict';
var models = require('../models');
// model the data of the sqlite database
module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define('Note', {
    owner_id: {
      type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT,
    },
    dtf: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    timestamps: true,
    underscored: true,
    classMethods: {
      associate: (models) => {
        //associates owner_id as receipt_id
        Note.belongsTo(models.Receipt, {
          as: 'owner'
        });
      }
    }
  });
  return Note;
};
