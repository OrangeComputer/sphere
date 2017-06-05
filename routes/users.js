var models = require( '../models' );
var express = require( 'express' );
var router = express.Router();

// URL: http://localhost:1123/users
// get all users
router.get( '/', function ( req, res ) {
  models.User.findAll().then( function ( users ) {
    res.json( {
      users: users
    } );
  } );
} );

// URL: http://localhost:1123/users/create
//create user
router.post( '/create', function ( req, res ) {
  models.User.create( {
    first_name: req.body.first_name,
    last_name: req.body.last_name
  } ).then( function () {
    res.json( {
      message: 'created user'
    } );
  } );
} );


// URL: http://localhost:3100/users/get/:id
// get a user by their id
router.get( '/get/:id', function ( req, res ) {
  models.User.find( {
    where: {
      id: req.params.id
    }
  } ).then( function ( user ) {
    res.json( {
      user: user
    } );
  } );
} );

// URL: http://localhost:1123/users/name/:first_name
//get users by first_name //TODO //case sensative
router.get( '/name/:first_name', function ( req, res ) {
  models.User.findAll( {
    where: {
      first_name: req.params.first_name
    }
  } ).then( function ( users ) {
    res.json( {
      users: users //plural findAll()
    } );
  } );
} );

// URL: http://localhost:1123/users/delete/:id
router.get( '/delete/:id', function ( req, res ) {
  models.User.destroy( {
    where: {
      id: req.params.id
    }
  } ).then( function () {
    res.json( {
      message: 'deleted user'
    } );
  } );
} );



module.exports = router;
