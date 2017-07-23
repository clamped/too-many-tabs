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

chrome.tabs.onCreated.addListener(function () {
  setBadgeWithTabCount();
});

chrome.tabs.onRemoved.addListener(function () {
  setBadgeWithTabCount();
});

chrome.tabs.onAttached.addListener(function () {
  setBadgeWithTabCount();
});

chrome.tabs.onDetached.addListener(function () {
  setBadgeWithTabCount();
});
