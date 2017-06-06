chrome.browserAction.onClicked.addListener(function(activeTab){
  var myURL = "https://www.pexels.com/search/art/";
  chrome.tabs.create({ url: myURL });
});