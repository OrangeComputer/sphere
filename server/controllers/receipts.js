Receipt = require('../models/').Receipt;
User = require('../models/').User;
Note = require('../models/').Note;

module.exports = {
  index(req, res) {
    Receipt.findAll({
        include: [{
          model: User // including the user asscoiated with the Receipt
        }, {
          model: Note,
        }],
        where: {
          updated_at: {
            $lt: new Date(),
            $gt: new Date(new Date() - 24 * 60 * 60 * 1000 * 365) // receipts from the last year
          }
        },
        order: [
          ['created_at', 'DESC'] // latest at the top
        ]
      })
      .then(function(receipts) {
        res.status(200).json(receipts);
      })
      .catch(function(error) {
        res.status(500).json(error);
      });
  },

  show(req, res) {
    Receipt.findById(req.params.id)
      .then(function(receipt) {
        res.status(200).json(receipt);
      })
      .catch(function(error) {
        res.status(500).json(error);
      });
  },

  create(req, res) {
    Receipt.create(req.body)
      .then(function(newReceipt) {
        res.status(200).json(newReceipt);
      })
      .catch(function(error) {
        res.status(500).json(error);
      });
  },

  update(req, res) {
    Receipt.update(req.body, {
        where: {
          id: req.params.id
        }
      })
      .then(function(updatedRecords) {
        res.status(200).json(updatedRecords);
      })
      .catch(function(error) {
        res.status(500).json(error);
      });
  },

  delete(req, res) {
    Receipt.destroy({
        where: {
          id: req.params.id
        }
      })
      .then(function(deletedRecords) {
        res.status(200).json(deletedRecords);
      })
      .catch(function(error) {
        res.status(500).json(error);
      });
  }
};
