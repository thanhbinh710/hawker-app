var express = require('express');
var router = express.Router();

var ctrlPosts = require('../controllers/posts.controllers.js');
var ctrlUsers = require('../controllers/users.controllers.js');
var ctrlLocation = require('../controllers/locations.controllers.js');

// Feeds 
router
  .route('/getAllPosts')
  .get( ctrlPosts.postGetAll);

router
  .route('/getPost/:id')
  .get( ctrlPosts.postGetOne);

// Users
router
    .route('/login')
    .post(ctrlUsers.login);

router
    .route('/register')
    .post(ctrlUsers.register);

router
  	.route('/getProfile/:username')
  	.get(ctrlUsers.getProfile);

// Hawker Locations
router
  .route('/getAllLocations')
  .get( ctrlLocation.locationsGetAll);

router
  .route('/getDistance/:origin')
  .get( ctrlLocation.getAllDistance);


module.exports = router;