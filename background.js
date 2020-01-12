chrome.runtime.onInstalled.addListener(function() {
    // extension tells browser when the user can interact with the html page
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {pathPrefix: ''}, // so it matches all tabs
        })],
        actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    }); 

    


  });

  

chrome.runtime.onInstalled 

