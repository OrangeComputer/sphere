const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'), // lets use ready req.body to get params etc
  router = express.Router(),
  methodOverride = require('method-override'), // let's use HTTP verbs where the client doesn't support it
  path = require('path'),
  users = require('./server/controllers/users'),
  receipts = require('./server/controllers/receipts');


// express config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(methodOverride());
app.set('port', process.env.PORT || 8000);


app.use(express.static(__dirname + '/public'));

// define user routes
router.get('/users', users.index);
router.get('/users/:id', users.show);
router.post('/users', users.create);
router.put('/users', users.update);
router.delete('/users', users.delete);

// define receipt routes
router.get('/receipts', receipts.index);
router.get('/receipts/:id', receipts.show);
router.post('/receipts', receipts.create);
router.delete('/receipts', receipts.delete);

// register api routes
app.use('/api', router);


// start server
app.listen(app.get('port'), function() {
  console.log("Server started on port", app.get('port'));
});

module.exports = app;
