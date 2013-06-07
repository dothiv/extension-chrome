'use strict';

/* Controllers */
angular.module('dothivExtChrome.controllers', [])
    .controller('WelcomeCtrl', [function() {
    }])
    .controller('BookmarkCheckCtrl', ['$scope', 'alternatives', function($scope, alternatives) {
        // list of all bookmarks
        var bookmarks = {};
        $scope.bookmarks = bookmarks;
        
        // list of alternatives (heads up: name collision with service)
        var alt = {};
        $scope.alt = alt;
        
        // list of proposed changes
        var changes = [];
        $scope.changes = changes;
        $scope.changed = 0; // count of changed bookmarks
        
        // mark list as tentative
        $scope.status = 0;
        
        /**
         *  Adds the given bookmark nodes and all children to the list of all 
         *  bookmarks
         */
        function processBookmarkNodes(bookmarkNodes) {
            for (var i = 0; i < bookmarkNodes.length; i++) {
                var bookmarkNode = bookmarkNodes[i];
            
                // process the url, if any
                if (bookmarkNode.url) {
                    var matches = bookmarkNode.url.match(/^https?\:\/\/(www\.)?([^\/?#]+)(?:[\/?#]|$)/i);
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
        
        /**
         *  Process the root of the bookmark tree. After that, call .hiv API
         *  to look for .hiv alternatives.
         */
        function processBookmarkRoot(bookmarkNodes) {
            processBookmarkNodes(bookmarkNodes);
            $scope.$apply(function() { // asynchronous modification of $scope needs $apply to be applied to the view
                $scope.status = 1;
            });
            lookupAlternatives();
        }
        
        /**
         *  Looks up alternatives for all domains in the bookmark object, then
         *  calls the merge method to propose these alternatives to the user.
         */
        function lookupAlternatives() {
        
            // from angular.js: (it's not public there)
            function map(obj, iterator, context) {
                var results = [];
                angular.forEach(obj, function(value, index, list) {
                    results.push(iterator.call(context, value, index, list));
                });
                return results;
            }
            
            $scope.$apply(function() {
                $scope.alt = alt = alternatives.query({ 'q': map(bookmarks, function(context, value, index, list) { return value; } ) }, merge);
            });
        }
        
        /**
         *  Generates a list of proposed changes of bookmarks.
         */
        function merge() {
            // this is a callback from a $scope.$apply wrapped function (see above). Thus, no need to use $scope.$apply here.
            $scope.status = 2;
            
            for (var i=0; i < alt.length; i++) {
                var alternative = alt[i];
                
                for (var j = 0; j < bookmarks[alternative.domain].length; j++) {
                    var bookmark = bookmarks[alternative.domain][j];
                    $scope.changes.push({'bookmark': bookmark, 'domain': alternative.domain, 'hivdomain': alternative.hiv_domain.name, 'status': 0});
                }                
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
            $scope.status = 3;
            angular.forEach(changes, function(value, index, list) {
                var c = value;
                var newurl = c.bookmark.url.replace(c.domain, c.hivdomain); // TODO restrict replacement to domain name
                chrome.bookmarks.update(c.bookmark.id, { url: newurl }, function() {
                    //value.status = 1;
                    $scope.$apply(function() {
                        $scope.changed++;
                    });
                });
            });
        }
        $scope.apply = apply;
        
        /**
         *  Watching for the count of changes; setting the status to 4 if we're
         *  done.
         */
        $scope.$watch('changed', function() {
            if ($scope.changed > 0 && $scope.changed == changes.length) {
                $scope.status = 4;
            }
        });
    
        // collect list of all bookmarks, this starts the whole process
        chrome.bookmarks.getTree(processBookmarkRoot);
    }]) 
