// chrome.browserAction.onClicked.addListener(function(tab) {
//   browser.browserAction.openPopup()
// });

var CLIENT_ID = '17cfeffb14a21238315c23501770003d1dd97a76';
var CLIENT_SECRET = 'c1ec91ecb596fe3dcf909e5ff8d725c070988b77';
var REDIRECT_URI = "https://gfkcjlimpeehdgkfcnkieoapmgnngolf.chromiumapp.org/testing"; 
let ACCESS_TOKEN = '830df54fea45d0d3adc6e25b53fae0bb6c595a7b';

console.log('Popup!');

var loc = "https://bitly.com/oauth/authorize?client_id=" + CLIENT_ID + "&redirect_uri=" + REDIRECT_URI;
chrome.identity.launchWebAuthFlow(
  {'url': loc, 'interactive': true},
  function(redirect_url) {
    console.log('YEE');
    console.log(redirect_url);
   }
);