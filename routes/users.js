var models = require( '../models' );
var express = require( 'express' );
var userRouter = express.Router();
var logger = require( 'morgan' );

userRouter.use( logger( 'dev' ) ); // used for logging purposes during development
// URL: http://localhost:1123/users
// get all users
userRouter.get( '/', function ( req, res ) {
  models.User.findAll().then( function ( users ) {
    res.json( {
      users: users
    } );
  } );
} );

// URL: http://localhost:1123/users/create
//create user
userRouter.post( '/create', function ( req, res ) {
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
userRouter.get( '/:id', function ( req, res ) {
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

// URL: http://localhost:1123/users/:first_name
//get users by first_name //TODO //case sensative
userRouter.get( '/:first_name', function ( req, res ) {
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
userRouter.delete( '/:id', function ( req, res ) {
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

// URL: http://localhost:3100/users/update/:id
// find a user by their id and update their info
userRouter.put( '/:id', function ( req, res ) {
  models.User.find( {
    where: {
      id: req.params.id
    }
  } ).then( function ( user ) {
    if ( user ) {
      user.updateAttributes( {
        first_name: req.body.first_name,
        last_name: req.body.last_name
      } ).then( function ( user ) {
        res.json( {
          message: 'updated user info to ' + user
        } );
      } );
    }
  } );
} );
// export the userRouter to be mounted in app.js
module.exports = userRouter;
