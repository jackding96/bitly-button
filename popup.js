let changeColor = document.getElementById('changeColor');

let ACCESS_TOKEN = '830df54fea45d0d3adc6e25b53fae0bb6c595a7b';

// changeColor.onclick = function(element) {
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
    console.log(url);

    fetch('https://api-ssl.bitly.com/v4/bitlinks', {
      method: 'POST',
      body: JSON.stringify({long_url: url}),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
      },
    }).then(res => res.json())
    .then(response => {
      navigator.clipboard.writeText(response.link)
      .then(() => {
        document.getElementById('message-box').innerHTML = `
          <p id='message-header'>Copied!</p>
          <p id='message-link'>${response.link}</p>
        `;
        console.log('Text copied to clipboard');
      })
      .catch(err => {
        console.error('Could not copy text: ', err);
      }); 
    })
    .catch(error => console.error('NAW:', error));   
  });
// };