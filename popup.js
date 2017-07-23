function getOpenTabsCount(callback) {
  var queryInfo = {
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function (tabs) {
    callback(tabs.length.toString());
  });
}

function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}

document.addEventListener('DOMContentLoaded', function () {
  getOpenTabsCount(function (tabs) {
    var template = 'Number of tabs: {{tabs}}      ';
    var output = Mustache.render(template, {tabs: tabs});
    renderStatus(output);
  });
});
