var mongoose = require('mongoose');

var locationSchema = new mongoose.Schema({
	hawker_name: {
		type: String,
    	unique: true,
		required: true
	},
	hawker_location: {
		type: String,
    	unique: true,
		required: true
	}
});

mongoose.model('Location', locationSchema);