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
      console.log(response);
      navigator.clipboard.writeText(response.link)
      .then(() => {
        if (response.link) {
          document.getElementById('message-box').innerHTML = `
            <p id='message-header'>Copied!</p>
            <p id='message-link'>${response.link}</p>
          `;
        }
        else {
          document.getElementById('message-box').innerHTML = `
            <p id='message-header'>Error!</p>
            <p id='message-err'>${response.description}</p>
          `;          
        }
      })
      .catch(err => {
        document.getElementById('message-box').innerHTML = `
          <p id='message-header'>Error:</p>
          <p id='message-header'>${err}</p>
        `;  
        console.error('Could not copy text: ', err);      
      }); 
    })
    .catch(error => {
      document.getElementById('message-box').innerHTML = `
        <p id='message-header'>Error:</p>
        <p id='message-header'>${err}</p>
      `; 
      console.error('Error:', error);
    });       

  });  
});