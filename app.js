//retrieve the required modules
var models = require( './models' );
var express = require( 'express' );
var serveStatic = require( 'serve-static' );
var path = require( 'path' );
var bodyParser = require( 'body-parser' )

// Routes
var routes = require( './routes/index' );
var users = require( './routes/users' );
var receipts = require( './routes/receipts' );

//express
var app = express();

//global middleware, body parser makes it possible to post JSON to the server
// data is access using req.body // see relevant route
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( {
  extended: false
} ) );

// telling express what routes to use, these define the sub routes, mounting the routers to URLs
app.use( '/', routes );
app.use( '/users', users );
app.use( '/receipts', receipts );

//errors must be at the bottom of the middleware list
// 404
app.use( function ( req, res, next ) {
  var err = new Error( 'Not Found' );
  err.status = 404;
  next( err );
} );

app.use( function ( err, req, res, next ) {
  res.status( err.status || 500 );
  res.json( {
    message: err.message,
    error: ( app.get( 'env' ) === 'development' ) ? err : {}
  } );
} );


module.exports = app;
