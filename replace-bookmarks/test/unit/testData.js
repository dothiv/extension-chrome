var chromeBookmarksData = [
    {
        "children": [
            {
                "children": [
                    {
                        "dateAdded": 1372226029225,
                        "id": "4",
                        "index": 0,
                        "parentId": "1",
                        "title": "Wetterradar",
                        "url": "http://www.wetteronline.de/radar/dldldwddgf_vie.htm"
                    },
                    {
                        "dateAdded": 1372226029228,
                        "id": "5",
                        "index": 1,
                        "parentId": "1",
                        "title": "Wetter B",
                        "url": "http://www.wetteronline.de/Berlin/Berlin.htm"
                    },
                    {
                        "children": [
                            {
                                "id": "7",
                                "index": 0,
                                "parentId": "6",
                                "title": "Web Application Exploits and Defenses",
                                "url": "http://google-gruyere.appspot.com/"
                            },
                            {
                                "id": "8",
                                "index": 1,
                                "parentId": "6",
                                "title": "20 Things I Learned About Browsers and the Web",
                                "url": "http://www.20thingsilearned.com/"
                            }
                        ],
                        "dateAdded": 1371500160643,
                        "id": "6",
                        "index": 2,
                        "parentId": "1",
                        "title": "VeryInteresting"
                    },
                    {
                        "dateAdded": 1372364606047,
                        "id": "9",
                        "index": 3,
                        "parentId": "1",
                        "title": "SPIEGEL ONLINE - Nachrichten",
                        "url": "http://www.spiegel.de/"
                    },
                    {
                        "dateAdded": 1372364791490,
                        "id": "10",
                        "index": 4,
                        "parentId": "1",
                        "title": "Welcome to Facebook - Log In, Sign Up or Learn More",
                        "url": "https://www.facebook.de/"
                    },
                    {
                        "dateAdded": 1372442933023,
                        "id": "11",
                        "index": 5,
                        "parentId": "1",
                        "title": "Bashooka | Graphic & Web Design Inspiration + Resources",
                        "url": "http://bashooka.com/"
                    },
                    {
                        "dateAdded": 1372612351964,
                        "id": "19",
                        "index": 6,
                        "parentId": "1",
                        "title": "Extensions",
                        "url": "chrome://extensions/"
                    }
                ],
                "dateAdded": 1371499977989,
                "dateGroupModified": 1372612356516,
                "id": "1",
                "index": 0,
                "parentId": "0",
                "title": "Bookmarks Bar"
            },
            {
                "children": [
                    {
                        "children": [
                            {
                                "dateAdded": 1372364950451,
                                "id": "13",
                                "index": 0,
                                "parentId": "12",
                                "title": "Developer's Guide - Google Chrome",
                                "url": "https://developer.chrome.com/extensions/devguide.html"
                            },
                            {
                                "dateAdded": 1372399434044,
                                "id": "14",
                                "index": 1,
                                "parentId": "12",
                                "title": "angular/angular-seed · GitHub",
                                "url": "https://github.com/angular/angular-seed"
                            },
                            {
                                "dateAdded": 1372446110734,
                                "id": "15",
                                "index": 2,
                                "parentId": "12",
                                "title": "Building a Web App From Scratch in AngularJS | Nettuts+",
                                "url": "http://net.tutsplus.com/tutorials/javascript-ajax/building-a-web-app-from-scratch-in-angularjs/"
                            },
                            {
                                "dateAdded": 1372605042339,
                                "id": "16",
                                "index": 3,
                                "parentId": "12",
                                "title": "Markdown Cheatsheet · adam-p/markdown-here Wiki · GitHub",
                                "url": "https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet"
                            },
                            {
                                "dateAdded": 1372607018433,
                                "id": "17",
                                "index": 4,
                                "parentId": "12",
                                "title": "Full-Spectrum Testing with AngularJS and Karma - yearofmoo.com",
                                "url": "http://www.yearofmoo.com/2013/01/full-spectrum-testing-with-angularjs-and-karma.html"
                            },
                            {
                                "dateAdded": 1372607080692,
                                "id": "18",
                                "index": 5,
                                "parentId": "12",
                                "title": "jasmin introduction-1.3.1.js",
                                "url": "http://pivotal.github.io/jasmine/"
                            }
                        ],
                        "dateAdded": 1372364964150,
                        "dateGroupModified": 1372612351964,
                        "id": "12",
                        "index": 0,
                        "parentId": "2",
                        "title": "Dev"
                    }
                ],
                "dateAdded": 1371499977989,
                "dateGroupModified": 1372364964150,
                "id": "2",
                "index": 1,
                "parentId": "0",
                "title": "Other Bookmarks"
            }
        ],
        "dateAdded": 1372598397240,
        "id": "0",
        "title": ""
    }
];

var expectedDomainToChromeBookmarks = {
    "wetteronline.de": [
        {
            "dateAdded": 1372226029225,
            "id": "4",
            "index": 0,
            "parentId": "1",
            "title": "Wetterradar",
            "url": "http://www.wetteronline.de/radar/dldldwddgf_vie.htm"
        },
        {
            "dateAdded": 1372226029228,
            "id": "5",
            "index": 1,
            "parentId": "1",
            "title": "Wetter B",
            "url": "http://www.wetteronline.de/Berlin/Berlin.htm"
        }
    ],
    "google-gruyere.appspot.com": [
        {
            "id": "7",
            "index": 0,
            "parentId": "6",
            "title": "Web Application Exploits and Defenses",
            "url": "http://google-gruyere.appspot.com/"
        }
    ],
    "20thingsilearned.com": [
        {
            "id": "8",
            "index": 1,
            "parentId": "6",
            "title": "20 Things I Learned About Browsers and the Web",
            "url": "http://www.20thingsilearned.com/"
        }
    ],
    "spiegel.de": [
        {
            "dateAdded": 1372364606047,
            "id": "9",
            "index": 3,
            "parentId": "1",
            "title": "SPIEGEL ONLINE - Nachrichten",
            "url": "http://www.spiegel.de/"
        }
    ],
    "facebook.de": [
        {
            "dateAdded": 1372364791490,
            "id": "10",
            "index": 4,
            "parentId": "1",
            "title": "Welcome to Facebook - Log In, Sign Up or Learn More",
            "url": "https://www.facebook.de/"
        }
    ],
    "bashooka.com": [
        {
            "dateAdded": 1372442933023,
            "id": "11",
            "index": 5,
            "parentId": "1",
            "title": "Bashooka | Graphic & Web Design Inspiration + Resources",
            "url": "http://bashooka.com/"
        }
    ],
    "developer.chrome.com": [
        {
            "dateAdded": 1372364950451,
            "id": "13",
            "index": 0,
            "parentId": "12",
            "title": "Developer's Guide - Google Chrome",
            "url": "https://developer.chrome.com/extensions/devguide.html"
        }
    ],
    "github.com": [
        {
            "dateAdded": 1372399434044,
            "id": "14",
            "index": 1,
            "parentId": "12",
            "title": "angular/angular-seed · GitHub",
            "url": "https://github.com/angular/angular-seed"
        },
        {
            "dateAdded": 1372605042339,
            "id": "16",
            "index": 3,
            "parentId": "12",
            "title": "Markdown Cheatsheet · adam-p/markdown-here Wiki · GitHub",
            "url": "https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet"
        }
    ],
    "net.tutsplus.com": [
        {
            "dateAdded": 1372446110734,
            "id": "15",
            "index": 2,
            "parentId": "12",
            "title": "Building a Web App From Scratch in AngularJS | Nettuts+",
            "url": "http://net.tutsplus.com/tutorials/javascript-ajax/building-a-web-app-from-scratch-in-angularjs/"
        }
    ],
    "yearofmoo.com": [
        {
            "dateAdded": 1372607018433,
            "id": "17",
            "index": 4,
            "parentId": "12",
            "title": "Full-Spectrum Testing with AngularJS and Karma - yearofmoo.com",
            "url": "http://www.yearofmoo.com/2013/01/full-spectrum-testing-with-angularjs-and-karma.html"
        }
    ],
    "pivotal.github.io": [
        {
            "dateAdded": 1372607080692,
            "id": "18",
            "index": 5,
            "parentId": "12",
            "title": "jasmin introduction-1.3.1.js",
            "url": "http://pivotal.github.io/jasmine/"
        }
    ]
};

var domainToChromeBookmarkNodes = expectedDomainToChromeBookmarks;

var alternatives = [
    {"id": 1, "domain": "facebook.de", "hiv_domain": {"id": 1, "name": "facebook.hiv"}, "trusted": true},
    {"id": 6, "domain": "spiegel.de", "hiv_domain": {"id": 3, "name": "spiegel.hiv"}, "trusted": true}
];

var expectedChromeBookmarkNodesWithDomainChanges = [
    {"bookmark": {"dateAdded": 1372364791490, "id": "10", "index": 4, "parentId": "1", "title": "Welcome to Facebook - Log In, Sign Up or Learn More", "url": "https://www.facebook.de/"}, "domain": "facebook.de", "hivdomain": "facebook.hiv", "status": 0},
    {"bookmark": {"dateAdded": 1372364606047, "id": "9", "index": 3, "parentId": "1", "title": "SPIEGEL ONLINE - Nachrichten", "url": "http://www.spiegel.de/"}, "domain": "spiegel.de", "hivdomain": "spiegel.hiv", "status": 0}
];

var chromeBookmarkNodesWithDomainChanges = expectedChromeBookmarkNodesWithDomainChanges;

var expectedChangedChromeBookmarksData = [
    {
        "children": [
            {
                "children": [
                    {
                        "dateAdded": 1372226029225,
                        "id": "4",
                        "index": 0,
                        "parentId": "1",
                        "title": "Wetterradar",
                        "url": "http://www.wetteronline.de/radar/dldldwddgf_vie.htm"
                    },
                    {
                        "dateAdded": 1372226029228,
                        "id": "5",
                        "index": 1,
                        "parentId": "1",
                        "title": "Wetter B",
                        "url": "http://www.wetteronline.de/Berlin/Berlin.htm"
                    },
                    {
                        "children": [
                            {
                                "id": "7",
                                "index": 0,
                                "parentId": "6",
                                "title": "Web Application Exploits and Defenses",
                                "url": "http://google-gruyere.appspot.com/"
                            },
                            {
                                "id": "8",
                                "index": 1,
                                "parentId": "6",
                                "title": "20 Things I Learned About Browsers and the Web",
                                "url": "http://www.20thingsilearned.com/"
                            }
                        ],
                        "dateAdded": 1371500160643,
                        "id": "6",
                        "index": 2,
                        "parentId": "1",
                        "title": "VeryInteresting"
                    },
                    {
                        "dateAdded": 1372364606047,
                        "id": "9",
                        "index": 3,
                        "parentId": "1",
                        "title": "SPIEGEL ONLINE - Nachrichten",
                        "url": "http://www.spiegel.de/"
                    },
                    {
                        "dateAdded": 1372364791490,
                        "id": "10",
                        "index": 4,
                        "parentId": "1",
                        "title": "Welcome to Facebook - Log In, Sign Up or Learn More",
                        "url": "https://www.facebook.de/"
                    },
                    {
                        "dateAdded": 1372442933023,
                        "id": "11",
                        "index": 5,
                        "parentId": "1",
                        "title": "Bashooka | Graphic & Web Design Inspiration + Resources",
                        "url": "http://bashooka.com/"
                    },
                    {
                        "dateAdded": 1372612351964,
                        "id": "19",
                        "index": 6,
                        "parentId": "1",
                        "title": "Extensions",
                        "url": "chrome://extensions/"
                    }
                ],
                "dateAdded": 1371499977989,
                "dateGroupModified": 1372612356516,
                "id": "1",
                "index": 0,
                "parentId": "0",
                "title": "Bookmarks Bar"
            },
            {
                "children": [
                    {
                        "children": [
                            {
                                "dateAdded": 1372364950451,
                                "id": "13",
                                "index": 0,
                                "parentId": "12",
                                "title": "Developer's Guide - Google Chrome",
                                "url": "https://developer.chrome.com/extensions/devguide.html"
                            },
                            {
                                "dateAdded": 1372399434044,
                                "id": "14",
                                "index": 1,
                                "parentId": "12",
                                "title": "angular/angular-seed · GitHub",
                                "url": "https://github.com/angular/angular-seed"
                            },
                            {
                                "dateAdded": 1372446110734,
                                "id": "15",
                                "index": 2,
                                "parentId": "12",
                                "title": "Building a Web App From Scratch in AngularJS | Nettuts+",
                                "url": "http://net.tutsplus.com/tutorials/javascript-ajax/building-a-web-app-from-scratch-in-angularjs/"
                            },
                            {
                                "dateAdded": 1372605042339,
                                "id": "16",
                                "index": 3,
                                "parentId": "12",
                                "title": "Markdown Cheatsheet · adam-p/markdown-here Wiki · GitHub",
                                "url": "https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet"
                            },
                            {
                                "dateAdded": 1372607018433,
                                "id": "17",
                                "index": 4,
                                "parentId": "12",
                                "title": "Full-Spectrum Testing with AngularJS and Karma - yearofmoo.com",
                                "url": "http://www.yearofmoo.com/2013/01/full-spectrum-testing-with-angularjs-and-karma.html"
                            },
                            {
                                "dateAdded": 1372607080692,
                                "id": "18",
                                "index": 5,
                                "parentId": "12",
                                "title": "jasmin introduction-1.3.1.js",
                                "url": "http://pivotal.github.io/jasmine/"
                            }
                        ],
                        "dateAdded": 1372364964150,
                        "dateGroupModified": 1372612351964,
                        "id": "12",
                        "index": 0,
                        "parentId": "2",
                        "title": "Dev"
                    }
                ],
                "dateAdded": 1371499977989,
                "dateGroupModified": 1372364964150,
                "id": "2",
                "index": 1,
                "parentId": "0",
                "title": "Other Bookmarks"
            }
        ],
        "dateAdded": 1372598397240,
        "id": "0",
        "title": ""
    }
];
