/**
 * Chrome-Plugin javascript for .hiv-page-action
 */
requirejs.config(requirejsConfig);

requirejs(['hiv-alternatives-service'],
    function (hivAlternativesService) {
        // Called when the url of a tab changes.
        function showPageActionIconForDotHivAlternative(tabId, changeInfo, tab) {
            if (hivAlternativesService.existsAlternativeFor(tab.url)) {
                // ... show the page action.
                chrome.pageAction.show(tabId);
            }
        }

        // Listen for any changes to the URL of any tab.
        chrome.tabs.onUpdated.addListener(showPageActionIconForDotHivAlternative);

        // Listen for clicks an the page actions icon
        chrome.pageAction.onClicked.addListener(function (tab) {
            var alternative = hivAlternativesService.alternativeFor(tab.url);
            if (alternative && alternative !== tab.url) {
                chrome.tabs.update(tab.id, {'url': alternative, 'active': true})
            } else console.warn("No alternative found for %s, but page Action was shown!", tab.url);
        });
    }
);