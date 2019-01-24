let changeColor = document.getElementById('changeColor');

changeColor.onclick = function(element) {
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
    console.log(url);

    navigator.clipboard.writeText(url)
    .then(() => {
      console.log('Text copied to clipboard');
    })
    .catch(err => {
      console.error('Could not copy text: ', err);
    });    
  });
};