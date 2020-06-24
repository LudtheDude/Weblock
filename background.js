window.urls = [];
chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
	window.urls.push(request.url)
})

chrome.browserAction.onClicked.addListener(function(tab){
	chrome.tabs.create({url: 'newpage.html'})
})




//BLOCKS ENTIRE WEBSITE
/*function blockRequest(details) {
   return {cancel: true};
}

function updateFilters(urls) {
   if(chrome.webRequest.onBeforeRequest.hasListener(blockRequest))
     chrome.webRequest.onBeforeRequest.removeListener(blockRequest);
   chrome.webRequest.onBeforeRequest.addListener(blockRequest, {urls: ["*://*.facebook.com/*", "*://*.facebook.net/*"]}, ['blocking']);
}

updateFilters();*/
