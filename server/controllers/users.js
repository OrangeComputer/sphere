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
    User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name
      })
      .then(function(newUser) {
        sendResult(res, newUser);
      })
      .catch(function(error) {
        sendError(res, error);
      });
  },
  update(req, res) {
    User.find({
        where: {
          id: req.params.id
        }
      })
      .then(function(user) {
        if (user) {
          console.log(req.body);
          user.updateAttributes({
              first_name: req.body.first_name,
              last_name: req.body.last_name,
              middle_name: req.body.middle_name
            })
            .then(function(updatedUser) {
              sendResult(res, updatedUser);
            })
            .catch(function(err) {
              sendError(res, err);
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
