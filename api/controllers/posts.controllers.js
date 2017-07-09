var request = require('request');

// Return all the posts
module.exports.postGetAll = function(req, res) {
	res
		.status(200)
		.json(posts);
}

// Return the post with the corresponding id if it exists
module.exports.postGetOne = function(req, res) {
	var id = req.params.id;
	var result;

	for (var i=0; i<posts.length; i++) {
		if (posts[i].post_id === id) {
			console.log("id found", id);
			result = posts[i];
			break;
		} else {
			console.log("cannot find id", id);
		}
	}

	if (result) {
		res
			.status(200)
			.json(result);
	} else {
		res 
			.status(404)
			.json({"message" : "Cannot find this post"});
	}
	
};

// Hard coded values for display
const posts = [{
		"post_id": "a0001",
		"user_id": "0h003",
		"username": "Aaryahi",
		"user_dp": "https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/19756647_10154840116943723_1113956070817428230_n.jpg?oh=2fe6c1a94856c150c31e2c07a6f0a5d6&oe=59FE1E15",
		"post_title": "Featured Food 1",
		"post_excerpt": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere nunc aliquam ligula viverra viverra.",
		"post_content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a cursus turpis. Vestibulum sapien urna, tempus non hendrerit non, tempus a ante. Etiam ut consequat sem. Sed nec leo eu sapien dignissim pretium varius quis erat.\r\n\r\nDonec commodo pharetra suscipit. Ut elit orci, gravida sed placerat non, cursus sit amet nulla. Duis viverra sem et diam sollicitudin, sit amet consequat diam convallis. Vivamus turpis sapien, pretium eget sodales pulvinar, tincidunt eget nunc. \r\n\r\nSed tincidunt luctus metus, vel auctor nunc venenatis vitae. Maecenas ac odio in massa pellentesque hendrerit in nec mi. Fusce congue sem ut placerat efficitur. Integer bibendum ornare magna quis sollicitudin. Sed eu ultrices orci. \r\n\r\nVestibulum pharetra velit vitae dui finibus, id malesuada tellus ullamcorper. Proin dignissim ex tellus, in vehicula turpis hendrerit nec. Fusce quis ligula nibh.",
		"post_media": [
			"https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/19875418_10154840116648723_4723830140124157049_n.jpg?oh=befd6d0de2c7f821ff79d97aca6e6604&oe=59C4D38D",
			"https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/19895015_10154840116643723_1453404376541569571_n.jpg?oh=55cb80d8be549ad4ab47eb46e7fdd5fd&oe=59C87C1A",
			"https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/19756701_10154840116593723_4389581104185657013_n.jpg?oh=43a9be34a25c8a488b2a0a9ca4d2e28d&oe=59CE6E29"
		],
		"hearts": "325"
	},{
		"post_id": "0b002",
		"user_id": "0h002",
		"username": "allen_chen",
		"user_dp": "https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/19959220_10154840116778723_9113274033293198746_n.jpg?oh=853c258f8bb97486ef35705a5cb6e47f&oe=5A0A0B7F",
		"post_title": "Featured Hawker 1",
		"post_excerpt": "Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus mollis blandit nulla nec dignissim. ",
		"post_content": "Curabitur pulvinar tincidunt tellus vitae condimentum. Aliquam lobortis nibh a mollis molestie. Vivamus elementum sollicitudin metus, ut sagittis mauris pellentesque nec. Aenean nisl velit, malesuada a nunc eget, vehicula faucibus augue.\r\n\r\nMorbi leo nibh, ullamcorper sit amet vulputate nec, maximus a ligula. Etiam lorem tellus, feugiat consectetur nunc eu, porta tincidunt felis.\r\n\r\nNunc vel felis eleifend, scelerisque eros quis, mollis tellus. Donec volutpat felis ut arcu iaculis, nec lobortis lectus posuere. Phasellus gravida pretium magna, sit amet condimentum dui malesuada eleifend. Cras sit amet fringilla ex. Quisque bibendum quam nibh, ut sollicitudin sem eleifend sit amet.",
		"post_media": [
			"https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/19904949_10154840116588723_8430280421529285561_n.jpg?oh=0096fbdf27864939f7d61f6b5b707548&oe=5A0D799F",
			"https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/19732332_10154840116598723_3819152897732253596_n.jpg?oh=8ce1b180aa665e97772956beb46496b4&oe=59CBCAF3"
		],
		"hearts": "87"
	}, {
		"post_id": "00c03",
		"user_id": "0h001",
		"username": "binh_binh",
		"user_dp": "https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/19748836_10154840116808723_5917527941752089433_n.jpg?oh=b6e89b0b2ba5da8997f846cc5a4705c6&oe=59FEE025",
		"post_title": "Featured Food 2",
		"post_excerpt": "Aliquam posuere nunc aliquam ligula viverra viverra.",
		"post_content": "Sed elit risus, commodo ut orci in, pretium commodo enim. \r\n\r\nDuis tincidunt consequat elit in porta. In vel nunc vitae enim sollicitudin ornare. Curabitur vehicula eros ut est lacinia semper. Donec id aliquam nisl, quis porttitor tortor. \r\n\r\nCurabitur a urna ut quam eleifend egestas. Sed pulvinar turpis tincidunt libero sagittis tristique a sit amet ipsum. Aenean in nisl mauris.",
		"post_media": [
			"https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/19756701_10154840116593723_4389581104185657013_n.jpg?oh=43a9be34a25c8a488b2a0a9ca4d2e28d&oe=59CE6E29",
			"https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/19895015_10154840116643723_1453404376541569571_n.jpg?oh=55cb80d8be549ad4ab47eb46e7fdd5fd&oe=59C87C1A",
			"https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/19875418_10154840116648723_4723830140124157049_n.jpg?oh=befd6d0de2c7f821ff79d97aca6e6604&oe=59C4D38D"
		],
		"hearts": "103"

	}]

