let enabled = true;

chrome.browserAction.onClicked.addListener(function() {
    enabled = !enabled;
});

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        if (enabled) {
            if (details.url.match(/main.[a-zA-Z0-9]+.bundle+.(js)$/)) {
                return {redirectUrl: chrome.runtime.getURL("main.js")};
            } else if (details.url.match(/main.[a-zA-Z0-9]+.(css)$/)) {
                return {redirectUrl: chrome.runtime.getURL("main.css")};
            } else if (details.url.match(/[0-9].[a-zA-Z0-9]+.(css)$/)) {
                return {redirectUrl: chrome.runtime.getURL("sec.css")};
            } else if (details.url.includes("atomichub.svg")) {
                return {redirectUrl: chrome.runtime.getURL("https://nfthive.io/nfthive-logo.svg")};
            }
        }
    },
    {
        urls: ["*://wax.atomichub.io/*"],
        types: ["script","stylesheet"]
    },
    ["blocking"]
);