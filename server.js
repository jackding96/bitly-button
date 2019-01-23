var sys = require('sys'),
    express = require('express'),
    querystring = require('querystring'),
		https = require('https'),
		request = require('request-promise'),
    url = require('url');

// ENTER YOUR CLIENT ID, CLIENT SECRET AND REDIRECT_URI
var CLIENT_ID = '17cfeffb14a21238315c23501770003d1dd97a76';
var CLIENT_SECRET = 'c1ec91ecb596fe3dcf909e5ff8d725c070988b77';
// var REDIRECT_URI = "http://publish.uwo.ca/~yding96/"; 
var REDIRECT_URI = "http://localhost:80/callback"; 
var ACCESS_TOKEN = '';


function getAccessToken(params, successHandler) {
	
	var authurl = "https://api-ssl.bitly.com/oauth/access_token?" + querystring.stringify(params);


	var parsedUrl = url.parse(authurl, true),
		request, 
		result = "";

	parsedUrl.port = 443;
	
	request = https.request({
		host: parsedUrl.hostname,
		port: parsedUrl.port,
		path: parsedUrl.pathname + "?" + querystring.stringify(parsedUrl.query),
		method: "POST",
		headers: {
			'Content-Length': 0
		}
	}, function(res) {
		res.on('data', function(chunk) {
			result+= chunk;
		});
		// Returns a URL encoded string in the format of "access_token=%s&login=%s&apiKey=%s"
		res.on("end", function () {

			var json;

			if (successHandler !== undefined && result !== undefined) {
				json = querystring.parse(result);
				successHandler({
					username: json.login,
					access_token: json.access_token
				});
			}
		});
	});

	request.end();
}

var app = express();

//Forwards the user to a bitly login page for authorization via your bitly app
app.get('/login', function(req, res) {

	var loc = "https://bitly.com/oauth/authorize?client_id=" + CLIENT_ID + "&redirect_uri=" + REDIRECT_URI;
	res.writeHead(303, { 'location': loc });
	res.end();
});


//The Redirect URI that processes the authorization code and returns the bitly user id and access token

app.get('/callback', function (req, res) {

	var code = req.query.code;

	getAccessToken({
		code: code,
		redirect_uri: REDIRECT_URI,
		client_id: CLIENT_ID,
		client_secret: CLIENT_SECRET
	}, function (output) {

		if (output !== undefined) {	
			res.send(output.access_token);
			ACCESS_TOKEN = output.access_token;
		} else {
			console.log("Output is undefined.");
		}

	});
});

app.get('/create', function(req, res) {
	let long_url = 'https://www.google.com/maps/place/University+Hospital+-+London+Health+Sciences+Centre/@43.0143556,-81.2789509,15z/data=!4m5!3m4!1s0x882eee3e24e6df6d:0x703a642557b93d4c!8m2!3d43.0124102!4d-81.2748867';
	let options = {
		url: 'https://api-ssl.bitly.com/v4/bitlinks',
		method: 'POST',
		headers: {
			'Authorization': `Bearer ${ACCESS_TOKEN}`,
		},
		body: {
			long_url: long_url
		},
		json: true,
	}
	request(options).then(r => {
		console.log(res);
		res.send(`Bitlink: ${r.link}`);
	})
	.catch(err => {console.log('naw')});
});

//Simple index that links to the login page.
app.get('/', function(req, res){
    res.send('Bitly Authentication on node.js, please <a href="/login">login</a> to test.');
});

// Granted page
app.get('/granted', function(req, res) {

	res.send('You are authenticated!');
});

app.listen(80);