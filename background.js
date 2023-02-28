let enabled = true;

chrome.browserAction.onClicked.addListener(function() {
    enabled = !enabled;
});

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        if (enabled) {
            if (details.url.match(/main.[a-zA-Z0-9]+.bundle+.(js)$/)) {
                return {redirectUrl: chrome.runtime.getURL("main.js")};
            }
        }
    },
    {
        urls: ["*://wax.atomichub.io/*"],
        types: ["script","stylesheet"]
    },
    ["blocking"]
);