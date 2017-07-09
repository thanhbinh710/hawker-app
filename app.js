// require('./api/data/db.js');

var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var compression = require('compression');
var routes = require('./api/routes');


app.use(compression());
app.use(function(req, res, next) {
	console.log(req.method, req.url);
	if (process.env.NODE_ENV == "production" && req.headers['x-forwarded-proto'] !== 'https') {
		return res.redirect(['https://', req.get('Host'), req.url].join(''));
	}
	next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/api', routes);
app.get('*', (req,res) => {
	res.sendFile(path.resolve(__dirname, 'public/index.html'));
});


app.set('port', (process.env.PORT || 7500));
var server = app.listen(app.get('port'), function() {
	var port = server.address().port;
	console.log('Magic happens on port ' + port);

});

