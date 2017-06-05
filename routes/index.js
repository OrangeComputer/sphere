var models = require( '../models' );
var express = require( 'express' );
var router = express.Router(); //built in middleware

// URL: http://localhost:1123/
// displays a welcome message
router.get( '/', function ( req, res ) {
  res.json( {
    message: 'welcome to the sphere development prototype!'
  } );
} );

module.exports = router;
