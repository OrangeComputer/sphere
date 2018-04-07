User = require("../models/").User;
Receipt = require("../models").Receipt;
Email = require("../models").Email;
Phone = require("../models").Phone;
Address = require("../models").Address;
utils = require("./utils");

module.exports = {
  index(req, res) {
    User.findAll({
      // return the tables associated with each user
      include: [
        {
          model: Receipt,
          attributes: ["date_delievered", "total_cost", "status"]
        },
        {
          model: Email,
          attributes: ["email"]
        },
        {
          model: Phone,
          attributes: ["number"]
        },
        {
          model: Address,
          attributes: ["street", "city", "state", "zip_code"]
        }
      ]
    })
      .then(function(users) {
        utils.sendResult(res, users);
      })
      .catch(function(error) {
        utils.sendError(res, error);
      });
  },
  show(req, res) {
    User.findById(req.params.id, {
      // return all receipts for user
      include: Receipt
    })
      .then(function(user) {
        utils.sendResult(res, user);
      })
      .catch(function(error) {
        utils.sendError(res, error);
      });
  },
  create(req, res) {
    User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name
    })
      .then(function(newUser) {
        utils.sendResult(res, newUser);
      })
      .catch(function(error) {
        utils.sendError(res, error);
      });
  },
  update(req, res) {
    User.find({
      where: {
        id: req.params.id
      }
    }).then(function(user) {
      if (user) {
        console.log(req.body);
        user
          .updateAttributes({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            middle_name: req.body.middle_name
          })
          .then(function(updatedUser) {
            utils.sendResult(res, updatedUser);
          })
          .catch(function(err) {
            utils.sendError(res, err);
          });
      }
    });
  },
  delete(req, res) {
    User.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(deletedRecord) {
        utils.sendResult(res, deletedRecord);
      })
      .catch(function(err) {
        utils.utils.sendError(res, err);
      });
  }
};
