// Search the bookmarks when entering the search keyword.
$(function() {

  $('#updateBooksmarks').click(function() {

    function updateBookmarks() {
      domainList = readBookmarks();
    };
    
    function setDomainList(obj) {
      domainList = obj;
      getAlternatives();
    };
    
    function readBookmarks() {
      dumpBookmarks(setDomainList);
    };
    
    function getAlternatives() {
      $.getJSON(
        'http://hiv.enit.biz/app_dev.php/api/alternatives?q=' + $.map(domainList, function(element, index) { return index; }).join(','), 
        null, 
        doUpdateBookmarks
      );    
    };
    
    function doUpdateBookmarks(data, textStatus, jqXHR) {
      for (var i = 0; i < data.length; i++) {
        var alternative = data[i];
        console.log(alternative.domain + " => " + alternative.hiv_domain.name + ": ids " + domainList[alternative.domain].join(', '));
        for (var j = 0; j < domainList[alternative.domain].length; j++) {
          var id = domainList[alternative.domain][j];
          doUpdateSingleBookmark(id, alternative.domain, alternative.hiv_domain.name);
        }
      }
    };
    
    function doUpdateSingleBookmark(id, domain, hivdomain) {
      chrome.bookmarks.get(id, function(result) {
        var url = result[0].url;
        var newurl = url.replace(domain, hivdomain);
        console.log(url + " =xx> " + newurl);
        chrome.bookmarks.update(id, { url: newurl });
      });    
    }
    
    var domainList;

    updateBookmarks();

  });  
});
// Traverse the bookmark tree, and print the folder and nodes.
function dumpBookmarks(callback) {
  var domainList = {};
  var bookmarkTreeNodes = chrome.bookmarks.getTree(
    function(bookmarkTreeNodes) {
      dumpTreeNodes(bookmarkTreeNodes, domainList);
      (callback || noop)(domainList);
    });
  return domainList;
}
function dumpTreeNodes(bookmarkNodes, domainList) {
  var i;
  for (i = 0; i < bookmarkNodes.length; i++) {
    dumpNode(bookmarkNodes[i], domainList);
  }
}
function dumpNode(bookmarkNode, domainList) {
//  return bookmarkNode.url;
  if (bookmarkNode.url != undefined) {
    var matches = bookmarkNode.url.match(/^https?\:\/\/(www\.)?([^\/?#]+)(?:[\/?#]|$)/i);
    var domain = matches && matches[2];
    if (domain != null) {
      if (domainList[domain]) {
        domainList[domain].push(bookmarkNode.id);
      } else {
        domainList[domain] = [bookmarkNode.id];
      }
      console.log(domain);
    } else {
      console.log(bookmarkNode.url + " kein Match");
    }
  }
  if (bookmarkNode.children != undefined) {
    dumpTreeNodes(bookmarkNode.children, domainList);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  dumpBookmarks();
});

function noop() {}
