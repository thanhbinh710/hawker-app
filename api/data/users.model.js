var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	user_id: {
		type: String,
    	unique: true,
		required: true
	},
	username: {
		type: String,
    	unique: true,
		required: true
	},
	passcode: {
		type: String,
    	required: true
	},
	user_dp: String,
	name: String,
	ratings: String,
	bio: String,
	user_media: { type : Array , "default" : [] },
	comments: { type : Array , "default" : [] }

});

mongoose.model('User', userSchema);