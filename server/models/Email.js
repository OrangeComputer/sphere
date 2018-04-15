"use strict";
var models = require("../models");
// model the data of the sqlite database
module.exports = (sequelize, DataTypes) => {
  const Email = sequelize.define(
    "Email",
    {
      user_id: {
        type: DataTypes.INTEGER
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true
        }
      },
      email_type: {
        type: DataTypes.STRING,
        defaultValue: "not given"
      }
    },
    {
      timestamps: true,
      underscored: true,
      classMethods: {
        associate: models => {
          Email.belongsTo(models.User, {});
        }
      }
    }
  );
  return Email;
};
