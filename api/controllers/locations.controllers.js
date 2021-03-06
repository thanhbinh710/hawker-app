var mongoose = require('mongoose');
var Location = mongoose.model('Location');
var distance = require('google-distance');
distance.apiKey = 'AIzaSyAzNAi6SKWiJJM2mcGecnmDFDe6YD2Q4OA';

// Return all the hawker locations
module.exports.locationsGetAll = function(req, res) {
	Location
		.find()
		.exec(function(err, response) {
			console.log("Found locations");
			res
				.status(200)
				.json(response);
		});
}

module.exports.getAllDistance = function(req, res) {
	var origin = req.params.origin;

	
	var hawkerDistance = []
	var hawkerLocationsList = [];

	for (var i =0 ; i< hawkerLocations.length; i++) {
		hawkerLocationsList.push(hawkerLocations[i].hawker_location)
	}

	
	for(var j=0; j < hawkerLocationsList.length; j++) {
		distance.get(
		{
		  	origin: origin,
		  	destination: hawkerLocationsList[j]
		},
		function(err, data) {
		  	if (err) return console.log(err);
		  		console.log(data.distanceValue);
		  		hawkerDistance.push({
		  			hawker_location: data.destination,
		  			hawker_distance: data.distanceValue
		  		})
		});
	}

		
	setTimeout(function () {
	  	res
			.status(200)
			.json(hawkerDistance);
	}, 1000)
		
		
}



// Hard coded values for display
var hawkerLocations = [
	{
		"hawker_name": "Ci Yuan Community Club Hawker Centre",
		"hawker_location": "51 Hougang Avenue 9, 530917"
	},{
		"hawker_name": "Bendemeer Food Centre",
		"hawker_location": "29 Bendemeer Rd, Singapore 330029"
	},{
		"hawker_name": "Changi Village Hawkers",
		"hawker_location": "2 Changi Village Rd, Singapore 500002"
	},{
		"hawker_name": "Tanjong Pagar Plaza Market",
		"hawker_location": "6 Tanjong Pagar Plaza, Singapore 081006"
	},{
		"hawker_name": "Hong Lim Food Centre",
		"hawker_location": "531A Upper Cross Street, 051531"
	},{
		"hawker_name": "Taman Jurong Market and Food Centre",
		"hawker_location": "3 Yung Sheng Rd, 618499"
	},{
		"hawker_name": "Toa Payoh Lorong 5 Hawker Centre",
		"hawker_location": "75 Lor 5 Toa Payoh, Singapore 310075"
	},{
		"hawker_name": "Bedok Interchange Hawker Centre",
		"hawker_location": "460209, 208 New Upper Changi Rd"
	},{
		"hawker_name": "Bukit Merah Hawker Center",
		"hawker_location": "163 Bukit Merah Central"
	},{
		"hawker_name": "Golden Shoe Hawker Centre",
		"hawker_location": "50 Market Street, 048940"
	}
]