Receipt = require("../models/").Receipt;
User = require("../models/").User;
Note = require("../models/").Note;

module.exports = {
  index(req, res) {
    return Receipt.findAll({
      include: [
        {
          model: User // including the user asscoiated with the Receipt
        },
        {
          model: Note
        }
      ],
      where: {
        updated_at: {
          $lt: new Date(),
          $gt: new Date(new Date() - 24 * 60 * 60 * 1000 * 365) // receipts from the last year
        }
      },
      order: [
        ["created_at", "DESC"] // latest at the top
      ]
    });
  },

  show(req, res) {
    return Receipt.findById(req.params.id);
  },

  create(req, res) {
    return Receipt.create(req.body);
  },

  update(req, res) {
    return Receipt.update(req.body, {
      where: {
        id: req.params.id
      }
    });
  },

  delete(req, res) {
    return Receipt.destroy({
      where: {
        id: req.params.id
      }
    });
  }
};
