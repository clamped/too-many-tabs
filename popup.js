
function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}

document.addEventListener('DOMContentLoaded', function () {
  getOpenTabsCount(function (tabs) {
    renderStatus('Number of tabs: ' + tabs);
  });
});
