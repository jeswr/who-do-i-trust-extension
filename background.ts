console.log('Hello from the background script!')

function setRating(good = false, tabId: number | undefined = undefined) {
    chrome.action.setBadgeText({ text: good ? '👍' : '👎', tabId });
    chrome.action.setBadgeBackgroundColor({ color: good ? 'green' : 'red', tabId });
}

chrome.tabs.query({}, tabs => tabs.forEach(tab => setRating(typeof tab.url === 'string' && new URL(tab.url).origin === 'http://example.org/', tab.id)));

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    console.log(tabId, changeInfo.url, tab, chrome.action)
    const urlText = changeInfo.url ?? 'no url';
    console.log('the url text is', urlText)
    setRating(typeof tab.url === 'string' && new URL(tab.url).origin === 'http://example.org/', tabId);
});
