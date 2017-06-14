User = require('../models/').User;
Receipt = require('../models').Receipt;

module.exports = {
  index(req, res) {
    User.findAll({
      // return the receipts associated with each user
      include: Receipt
    }).then(function(users) {
      sendResult(res, users);
    }).catch(function(error) {
      sendError(res, error);
    });
  },
  show(req, res) {
    User.findById(req.params.id, {
      // return all receipts for user
      include: Receipt
    }).then(function(user) {
      sendResult(res, user);
    }).catch(function(error) {
      sendError(res, error);
    });
  },
  create(req, res) {
    User.create(req.body)
      .then(function(newUser) {
        sendResult(res, newUser);
      })
      .catch(function(error) {
        sendError(res, error);
      });
  },
  update(req, res) {
    User.update(req.body, {
        where: {
          id: req.params.id
        }
      })
      .then(function(updatedUser) {
        sendResult(res, updatedUser);
      })
      .catch(function(err) {
        sendError(res, err);
      });
  },
  delete(req, res) {
    User.destroy({
        where: {
          id: req.params.id
        }
      })
      .then(function(deletedRecord) {
        sendResult(res, deletedRecord);
      })
      .catch(function(err) {
        sendError(res, err);
      });
  }
};

// helper functions
function sendResult(res, result) {
  res.status(200).json(result);
}

function sendError(res, result) {
  res.status(500).json(result);
}
