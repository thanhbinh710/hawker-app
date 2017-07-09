var request = require('request');

// Log in
// module.exports.login = function(req, res) {
// 	var username = req.body.username;
// 	var password = req.body.password;

// 	console.log(username);
// 	console.log(password);

// 	res
// 		.status(200)
// 		.json({"message" : "Anyone can log in"});
// };

// Return the profile with the corresponding id if it exists
module.exports.getProfile = function(req, res) {
	var id = req.params.id;
	var result;

	for (var i=0; i<userProfiles.length; i++) {
		if (userProfiles[i].user_id === id) {
			console.log("id found", id);
			result = userProfiles[i];
			break;
		} else {
			console.log("cannot find id", id);
		}
	}

	console.log("result", result);

	if (result) {
		res
			.status(200)
			.json(result);
	} else {
		res 
			.status(404)
			.json({"message" : "Cannot find this user"});
	}
	
};

// Hard coded values for display
const userProfiles = [{
		"user_id": "0h001",
		"username": "binh_binh",
		"user_dp": "https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/19748836_10154840116808723_5917527941752089433_n.jpg?oh=b6e89b0b2ba5da8997f846cc5a4705c6&oe=59FEE025",
		"name": "Binh Nguyen",
		"ratings": "7",
		"bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a cursus turpis.",
		"user_media": [
			"https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/19875418_10154840116648723_4723830140124157049_n.jpg?oh=befd6d0de2c7f821ff79d97aca6e6604&oe=59C4D38D",
			"https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/19895015_10154840116643723_1453404376541569571_n.jpg?oh=55cb80d8be549ad4ab47eb46e7fdd5fd&oe=59C87C1A",
			"https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/19756701_10154840116593723_4389581104185657013_n.jpg?oh=43a9be34a25c8a488b2a0a9ca4d2e28d&oe=59CE6E29"
		],
		"comments": [
			{
				"user_id":"0h002",
				"user_dp": "https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/19959220_10154840116778723_9113274033293198746_n.jpg?oh=853c258f8bb97486ef35705a5cb6e47f&oe=5A0A0B7F",
				"comment":"Lorem ipsum dolor sit amet"
			},{
				"user_id":"0h003",
				"user_dp": "https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/19756647_10154840116943723_1113956070817428230_n.jpg?oh=2fe6c1a94856c150c31e2c07a6f0a5d6&oe=59FE1E15",
				"comment":"Consectetur adipiscing elit"
			}
		]
	},{
		"user_id": "0h002",
		"username": "allen_chen",
		"user_dp": "https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/19959220_10154840116778723_9113274033293198746_n.jpg?oh=853c258f8bb97486ef35705a5cb6e47f&oe=5A0A0B7F",
		"name": "Allen Chen",
		"ratings": "8",
		"bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a cursus turpis.",
		"user_media": [
			"https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/19904949_10154840116588723_8430280421529285561_n.jpg?oh=0096fbdf27864939f7d61f6b5b707548&oe=5A0D799F",
			"https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/19732332_10154840116598723_3819152897732253596_n.jpg?oh=8ce1b180aa665e97772956beb46496b4&oe=59CBCAF3"
		],
		"comments": [
			{
				"user_id":"0h003",
				"user_dp": "https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/19756647_10154840116943723_1113956070817428230_n.jpg?oh=2fe6c1a94856c150c31e2c07a6f0a5d6&oe=59FE1E15",
				"comment":"Consectetur adipiscing elit"
			}
		]
	}, {
		"user_id": "0h003",
		"username": "Aaryahi",
		"user_dp": "https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/19756647_10154840116943723_1113956070817428230_n.jpg?oh=2fe6c1a94856c150c31e2c07a6f0a5d6&oe=59FE1E15",
		"name": "Aaryahi Chen",
		"ratings": "9",
		"bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a cursus turpis.",
		"user_media": [
			"https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/19904949_10154840116588723_8430280421529285561_n.jpg?oh=0096fbdf27864939f7d61f6b5b707548&oe=5A0D799F",
			"https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/19732332_10154840116598723_3819152897732253596_n.jpg?oh=8ce1b180aa665e97772956beb46496b4&oe=59CBCAF3"
		],
		"comments": [
			{
				"user_id":"0h001",
				"user_dp": "https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/19748836_10154840116808723_5917527941752089433_n.jpg?oh=b6e89b0b2ba5da8997f846cc5a4705c6&oe=59FEE025",
				"comment":"Consectetur adipiscing elit"
			}
		]
	}]

