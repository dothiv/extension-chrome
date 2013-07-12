/**
 * Chrome-Plugin javascript for .hiv-page-action
 */

// Called when the url of a tab changes.
function showPageActionIconForDotHivAlternative(tabId, changeInfo, tab) {
    if (true) {
        // ... show the page action.
        console.log("%s, %s, %s",tabId,changeInfo,tab)
        chrome.pageAction.show(tabId);
    }
};

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(showPageActionIconForDotHivAlternative);

// Listen for clicks an the page actions icon
chrome.pageAction.onClicked.addListener(function (tab) {
    console.log("pageAction clicked",tab);
    chrome.tabs.update(tab.id,{'url':'http://www.heise.de', 'active':true})
});

