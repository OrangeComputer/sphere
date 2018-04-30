User = require("../models/").User;
Receipt = require("../models").Receipt;
Email = require("../models").Email;
Phone = require("../models").Phone;
Address = require("../models").Address;

module.exports = {
  search(req, res) {
    return User.findAndCountAll({
      limit: req.body["limit"] || 0,
      offset: req.body["offset"] || 0,
      where: req.body["where"],
      order: [req.body["order"] || ["id", "DESC"]],
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
    });
  },
  index(req, res) {
    return User.findAll({
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
    });
  },
  show(req, res) {
    return User.findById(req.params.id, {
      // return all receipts for user
      include: Receipt
    });
  },
  create(req, res) {
    //  return User.create({
    //    first_name: req.body.first_name,
    //    last_name: req.body.last_name
    //  });
  },
  update(req, res) {
    return User.find({
      where: {
        id: req.params.id
      }
    }).then(function(user) {
      if (user) {
        user.updateAttributes({
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          middle_name: req.body.middle_name
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
