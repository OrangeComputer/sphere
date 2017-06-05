//retrieve the required modules
var models = require( './models' );
var express = require( 'express' );
var serveStatic = require( 'serve-static' );
var path = require( 'path' );
var bodyParser = require( 'body-parser' )

// Routes
var routes = require( './routes/index' );
var users = require( './routes/users' );

//express
var app = express();

//middleware, body parser makes it possible to post JSON to the server
// data is access using req.body // see relevant route 
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( {
  extended: false
} ) );

// telling express what routes to use, depending on the request
app.use( '/', routes );
app.use( '/users', users );

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
