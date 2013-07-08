'use strict';

/* Controllers */
angular.module('dothivExtChrome.controllers', [])
    .controller('WelcomeCtrl', ['$scope', '$settings', function ($scope, $settings) {
        $scope.settings = {
            'autoupdate': $settings.getAutoupdate()
        };
        $scope.$watch('settings.autoupdate', function () {
            $settings.setAutoupdate($scope.settings.autoupdate);
        });
    }])
    .controller('BookmarkCheckCtrl', ['$scope', '$alternatives', '$settings', '$bookmarks',
        function ($scope, $alternatives, $settings, $bookmarks) {
            var State = {INITIALIZED:0, FETCHING_BOOKMARKS:1, CALCULATING_CHANGES:2, APPLYING_CHANGES:3, DONE:4};

            // map of {domain:[list of chrome bookmark leaf nodes of given domain],...}
            var domainToChromeBookmarkNodes;

            // list of alternatives (heads up: name collision with service)
            var alt = {};
            $scope.alt = alt;

            // list of proposed changes
            var changes = [];
            $scope.changes = changes;
            $scope.changed = 0; // count of changed bookmarks

            // mark list as tentative
            $scope.status = State.INITIALIZED;


            /**
             *  Process the root of the bookmark tree. After that, call .hiv API
             *  to look for .hiv alternatives.
             */
            function processBookmarkRoot(bookmarkNodes) {
                domainToChromeBookmarkNodes = $bookmarks.domainToChromeBookmarkNodesFrom(bookmarkNodes);
                $scope.$apply(function () { // asynchronous modification of $scope needs $apply to be applied to the view
                    $scope.status = State.FETCHING_BOOKMARKS;
                });
                lookupAlternatives();
            }

            /**
             *  Looks up alternatives for all domains in the bookmark object, then
             *  calls the proposeChangesForBookmarks method to propose these alternatives to the user.
             */
            function lookupAlternatives() {

                // from angular.js: (it's not public there)
                function map(obj, iterator, context) {
                    var results = [];
                    angular.forEach(obj, function (value, index, list) {
                        results.push(iterator.call(context, value, index, list));
                    });
                    return results;
                }

                $scope.$apply(function () {
                    $scope.alt = alt = $alternatives.query({ 'q': map(domainToChromeBookmarkNodes,
                        function (context, domain, index, list) {
                            return domain;
                        }) }, proposeChangesForBookmarks);
                });
            }


            /**
             *  Generates a list of proposed changes of bookmarks.
             */
            function proposeChangesForBookmarks() {
                // this is a callback from a $scope.$apply wrapped function (see above). Thus, no need to use $scope.$apply here.
                $scope.status = State.CALCULATING_CHANGES;
                var items = $bookmarks.chromeBookmarkNodesWithDomainChangesBy(alt, domainToChromeBookmarkNodes);
                append(items, $scope.changes);
            }

            function append(items, changes) {
                for (var i = 0; i < items.length; i++) {
                    changes.push(items[i]);
                }
            }

            /**
             *  Removes c from the list of tentative changes.
             */
            function noChangeOn(c) {
                changes.splice(changes.indexOf(c), 1);
                console.log("no change on " + c);
            }

            $scope.noChangeOn = noChangeOn;


            /**
             *  Applies all changes
             */
            function apply() {
                $scope.status = State.APPLYING_CHANGES;
                $bookmarks.applyChangesToChromeBookmarks(changes,function () {
                    $scope.$apply(function () {
                        $scope.changed++;
                    });
                });
            }

            $scope.apply = apply;

            /**
             *  Watching for the count of changes; setting the status to DONE if we're
             *  done.
             */
            $scope.$watch('changed', function () {
                if ($scope.changed > 0 && $scope.changed == changes.length) {
                    $scope.status = State.DONE;
                }
            });

            // TODO duplicate code, see WelcomeCtrl
            $scope.settings = {
                'autoupdate': $settings.getAutoupdate()
            }
            $scope.$watch('settings.autoupdate', function () {
                $settings.setAutoupdate($scope.settings.autoupdate);
            });

            // collect list of all bookmarks, this starts the whole process
            chrome.bookmarks.getTree(processBookmarkRoot);
        }])
