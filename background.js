chrome.browserAction.onClicked.addListener(function(activeTab){
  var newURL = "www.google.com";
  chrome.tabs.create({ url: newURL });
});
