function getOpenTabsCount(callback) {
  var queryInfo = {
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function (tabs) {
    callback(tabs.length.toString());
  });
}

function setBadgeWithTabCount() {
  getOpenTabsCount(function (tabs) {
    chrome.browserAction.setBadgeText({text: tabs});
  });
}

chrome.tabs.onCreated.addListener(setBadgeWithTabCount);
chrome.tabs.onRemoved.addListener(setBadgeWithTabCount);
chrome.tabs.onAttached.addListener(setBadgeWithTabCount);
chrome.tabs.onDetached.addListener(setBadgeWithTabCount);
