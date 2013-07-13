/*global describe,angular,beforeEach,expect,inject,it,chromeBookmarksData,expectedDomainToChromeBookmarks,alternatives,domainToChromeBookmarkNodes,expectedChromeBookmarkNodesWithDomainChanges,chromeBookmarkNodesWithDomainChanges,chrome*/
(function () {
    'use strict';

    /* jasmine specs for services go here */

    describe('Unit Testing: Services', function () {
        beforeEach(angular.mock.module('dothivExtChrome.services'));

        it('should contain a $settings service', inject(function ($settings) {
            assume($settings).not.to.equal(null);
        }));

        it('should contain a $alternatives service', inject(function ($alternatives) {
            assume($alternatives).not.to.equal(null);
        }));

        it('should contain a $bookmarks service', inject(function ($bookmarks) {
            assume($bookmarks).not.to.equal(null);
        }));

        it('$bookmarks service should return empty map for empty chrome-bookmark list ', inject(function ($bookmarks) {
            assume($bookmarks.domainToChromeBookmarkNodesFrom([])).to.be.empty;
        }));

        it('$bookmarks service should return domain-to-bookmarkNodes-map for not-empty chrome-bookmark list ', inject(function ($bookmarks) {
            assume($bookmarks.domainToChromeBookmarkNodesFrom(chromeBookmarksData)).to.eql(expectedDomainToChromeBookmarks);
        }));

        it('$bookmarks service should propose changes for not-empty domain-to-bookmarkNodes-map', inject(function ($bookmarks) {
            assume($bookmarks.chromeBookmarkNodesWithDomainChangesBy(alternatives, domainToChromeBookmarkNodes)).to.
                eql(expectedChromeBookmarkNodesWithDomainChanges);
        }));

        describe("test applyChangesToChromeBookmarks", function () {
            var callback;
            beforeEach(function () {
                callback = function () {
                };
                chrome = {
                    bookmarks: {
                        update: function (id, data, cb) {
                        }
                    }
                };
                spyOn(chrome.bookmarks, 'update');
            });
            it('$bookmarks service apply changes', inject(function ($bookmarks) {
                $bookmarks.applyChangesToChromeBookmarks(chromeBookmarkNodesWithDomainChanges, callback);
                assume(chrome.bookmarks.update.calls.length).to.equal(2);
                expect(chrome.bookmarks.update).toHaveBeenCalledWith(
                    '9', { url : 'http://www.spiegel.hiv/' }, callback);
                expect(chrome.bookmarks.update).toHaveBeenCalledWith(
                    '10', { url : 'https://www.facebook.hiv/' }, callback);
            }));
        });
    });
}());
