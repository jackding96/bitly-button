chrome.browserAction.onClicked.addListener(function(tab) {
  browser.browserAction.openPopup()

  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
    console.log(url);
  });  
  
});