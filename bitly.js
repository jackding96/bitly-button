var BitlyAPI = require("node-bitlyapi");
var Bitly = new BitlyAPI({
	client_id: "17cfeffb14a21238315c23501770003d1dd97a76",
	client_secret: "c1ec91ecb596fe3dcf909e5ff8d725c070988b77"	
});

Bitly.authenticate(username, password, function(err, access_token) {
	// Returns an error if there was one, or an access_token if there wasn't 
});