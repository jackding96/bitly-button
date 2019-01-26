let changeColor = document.getElementById('changeColor');

// var CLIENT_ID = '17cfeffb14a21238315c23501770003d1dd97a76';
// var CLIENT_SECRET = 'c1ec91ecb596fe3dcf909e5ff8d725c070988b77';
// var REDIRECT_URI = "https://gfkcjlimpeehdgkfcnkieoapmgnngolf.chromiumapp.org/testing"; 
// let ACCESS_TOKEN = '830df54fea45d0d3adc6e25b53fae0bb6c595a7b';

// console.log('Popup!');

// var loc = "https://bitly.com/oauth/authorize?client_id=" + CLIENT_ID + "&redirect_uri=" + REDIRECT_URI;
// chrome.identity.launchWebAuthFlow(
//   {'url': loc, 'interactive': true},
//   function(redirect_url) {
//     console.log('YEE');
//     console.log(redirect_url);
//    }
// );

// // changeColor.onclick = function(element) {
//   chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
//     var url = tabs[0].url;
//     console.log(url);

//     fetch('https://api-ssl.bitly.com/v4/bitlinks', {
//       method: 'POST',
//       body: JSON.stringify({long_url: url}),
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${ACCESS_TOKEN}`,
//       },
//     }).then(res => res.json())
//     .then(response => {
//       navigator.clipboard.writeText(response.link)
//       .then(() => {
//         document.getElementById('message-box').innerHTML = `
//           <p id='message-header'>Copied!</p>
//           <p id='message-link'>${response.link}</p>
//         `;
//         console.log('Text copied to clipboard');
//       })
//       .catch(err => {
//         console.error('Could not copy text: ', err);
//       }); 
//     })
//     .catch(error => console.error('NAW:', error));   
//   });
// // };