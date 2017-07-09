var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
	post_id: {
		type: String,
    	unique: true,
		required: true
	},
	user_id: String,
	username: String,
	user_dp: String,
	post_title: String,
	post_excerpt: String,
	post_content: String,
	post_media: { type : Array , "default" : [] },
	hearts: String

});

mongoose.model('Post', postSchema);