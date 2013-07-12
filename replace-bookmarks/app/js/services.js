/*global angular,chrome*/
(function () {
    'use strict';

    // TODO config module + DI
    var baseUrl = 'http://hiv.enit.biz/app_dev.php/api/alternatives.json';

    /* Services */
    var services = angular.module('dothivExtChrome.services', ['ngResource']);

    services.
        factory('$alternatives', function ($resource) {
            return $resource(baseUrl + '/:id', {id: '@id'}, {
                'query': {method: 'GET', params: { q: "" }, isArray: true}
            });
        })
        .factory('$appStorage', function () {
            var keyPrefix = 'hiv-';
            return {

                version: function () {
                    return '1';
                },

                prefixKey: function (key) {
                    return keyPrefix + this.version() + '-' + key;
                },

                put: function (key, value) {
                    key = this.prefixKey(key);
                    value = JSON.stringify(value);
                    localStorage.setItem(key, value);
                },

                get: function (key) {
                    key = this.prefixKey(key);
                    var value = localStorage.getItem(key);
                    return JSON.parse(value);
                },

                erase: function (key) {
                    key = this.prefixKey(key);
                    localStorage.removeItem(key);
                },

                flush: function () {
                    while (localStorage.length) localStorage.removeItem(localStorage.key(0));
                },

                isPresent: function (key) {
                    return !!this.get(key);
                }

            };
        })
        .factory('$alternativesSearcher', ['$appStorage', '$resource', function ($storage, $resource) {
            var alternativesKey = 'alternatives';

            return {
                getAlternatives: function (onSuccess, onFailure) {
                    var that = this;

                    var key = alternativesKey;
                    if ($storage.isPresent(key)) {
                        onSuccess($storage.get(key));
                        return;
                    }

                    // TODO go on here...
                }
            };
        }])
        .factory('$bookmarks', function () {
            /**
             *  converts the chrome bookmarks nodes to a map of {domain:[list of chrome bookmark leaf nodes of given domain],...}
             */
            function domainToChromeBookmarkNodesFrom(chromeBookmarkNodes) {
                function processBookmarkNodes(chromeBookmarkNodes) {
                    for (var i = 0; i < chromeBookmarkNodes.length; i++) {
                        var bookmarkNode = chromeBookmarkNodes[i];

                        // process the url, if any
                        if (bookmarkNode.url) {
                            var matches = bookmarkNode.url.match(/^https?:\/\/(www\.)?([^\/?#]+)(?:[\/?#]|$)/i);
                            var domain = matches && matches[2];
                            if (domain) {
                                if (bookmarks[domain]) {
                                    bookmarks[domain].push(bookmarkNode);
                                } else {
                                    bookmarks[domain] = [bookmarkNode];
                                }
                            }
                        }

                        // process child nodes
                        if (bookmarkNode.children) {
                            processBookmarkNodes(bookmarkNode.children);
                        }
                    }
                }

                var bookmarks = {};
                processBookmarkNodes(chromeBookmarkNodes);
                return bookmarks;
            }

            function chromeBookmarkNodesWithDomainChangesBy(alternatives, domainToChromeBookmarkNodes) {
                var chromeBookmarkNodesWithDomainChanges = [];
                for (var i = 0; i < alternatives.length; i++) {
                    var alternative = alternatives[i];
                    for (var j = 0; j < domainToChromeBookmarkNodes[alternative.domain].length; j++) {
                        var chromeBookmarkNode = domainToChromeBookmarkNodes[alternative.domain][j];
                        chromeBookmarkNodesWithDomainChanges.push({'bookmark': chromeBookmarkNode, 'domain': alternative.domain, 'hivdomain': alternative.hiv_domain.name, 'status': 0});
                    }
                }
                return chromeBookmarkNodesWithDomainChanges;
            }

            function applyChangesToChromeBookmarks(chromeBookmarkNodesWithDomainChanges, callback) {
                angular.forEach(chromeBookmarkNodesWithDomainChanges, function (change, index, list) {
                    var newurl = change.bookmark.url.replace(change.domain, change.hivdomain); // TODO restrict replacement to domain name
                    chrome.bookmarks.update(change.bookmark.id, { url: newurl }, callback);
                });
            }

            return {
                domainToChromeBookmarkNodesFrom: domainToChromeBookmarkNodesFrom,
                chromeBookmarkNodesWithDomainChangesBy: chromeBookmarkNodesWithDomainChangesBy,
                applyChangesToChromeBookmarks: applyChangesToChromeBookmarks
            };

        })
        .factory('$settings', function () {
            function setAutoupdate($value) {
                localStorage['autoupdate'] = $value ? 1 : 0;
            }

            function getAutoupdate() {
                return localStorage['autoupdate'] == 1;
            }

            return {
                'setAutoupdate': setAutoupdate,
                'getAutoupdate': getAutoupdate
            };
        });
}());
