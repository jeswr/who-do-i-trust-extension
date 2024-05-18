console.log('Hello from the background script!')

chrome.action.enable()

// background.js
chrome.action.onClicked.addListener((tab) => {
    chrome.action.enable()
});
  