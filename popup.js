let changeColor = document.getElementById('changeColor');

chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
  var url = tabs[0].url;

  chrome.storage.sync.get(['BITLY_ACCESS_TOKEN'], function(result) {
    const ACCESS_TOKEN = result.BITLY_ACCESS_TOKEN;

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
});