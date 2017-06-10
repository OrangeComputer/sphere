var models = require('../models');
var express = require('express');
var receiptsRouter = express.Router();
var logger = require('morgan');

receiptsRouter.get('/', function(req, res) {
  models.Receipt.findAll().then(function(receipts) {
    res.json({
      receipts: receipts
    });
  });
});


module.exports = receiptsRouter;
