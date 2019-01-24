function updateClipboard(newClip) {
  navigator.clipboard.writeText('Hello!')
  .then(() => {
    console.log('Text copied to clipboard');
  })
  .catch(err => {
    console.error('Could not copy text: ', err);
  });
} 

navigator.permissions.query({
  name: 'clipboard-write'
}).then(permissionStatus => {
  // Will be 'granted', 'denied' or 'prompt':
  console.log(permissionStatus.state);

  // Listen for changes to the permission state
  permissionStatus.onchange = () => {
    console.log(permissionStatus.state);
  };
});

chrome.browserAction.onClicked.addListener(function(tab) {

  navigator.clipboard.writeText('Hello!')
  .then(() => {
    console.log('Text copied to clipboard');
  })
  .catch(err => {
    console.error('Could not copy text: ', err);
  });
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
    console.log(url);

    
  });  
});