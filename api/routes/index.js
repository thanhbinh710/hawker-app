var express = require('express');
var router = express.Router();

var ctrlPosts = require('../controllers/posts.controllers.js');
var ctrlUsers = require('../controllers/users.controllers.js');

// Feeds 
router
  .route('/getAllPosts')
  .get( ctrlPosts.postGetAll);

router
  .route('/getPost/:id')
  .get( ctrlPosts.postGetOne);

// Users
// router
//     .route('/users/login')
//     .post(ctrlUsers.login);

router
  	.route('/getProfile/:id')
  	.get(ctrlUsers.getProfile);


module.exports = router;