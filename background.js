var CLIENT_ID = '17cfeffb14a21238315c23501770003d1dd97a76';
var CLIENT_SECRET = 'c1ec91ecb596fe3dcf909e5ff8d725c070988b77';
var REDIRECT_URI = "https://gfkcjlimpeehdgkfcnkieoapmgnngolf.chromiumapp.org/testing"; 

var loc = "https://bitly.com/oauth/authorize?client_id=" + CLIENT_ID + "&redirect_uri=" + REDIRECT_URI;
chrome.identity.launchWebAuthFlow(
  {'url': loc, 'interactive': true},
  function(redirect_url) {
    let code = redirect_url.split('=')[1];

    fetch(`https://api-ssl.bitly.com/oauth/access_token?code=${code}&redirect_uri=${REDIRECT_URI}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }      
    }).then(r => r.json())
    .then(response => {

      // Set token to storage
      chrome.storage.sync.set({BITLY_ACCESS_TOKEN: response.access_token}, function() {
        console.log("Access token set!");
      });
    })
    .catch(err => {
      console.log('NAW', err);
    });
   },
);