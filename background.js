window.urls = [];
chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
	window.urls.push(request.url)
})

chrome.browserAction.onClicked.addListener(function(tab){
	chrome.tabs.create({url: 'newpage.html'})


	/*chrome.tabs.query({}, function(tabs) {
		var message = {addSite: "initial", greeting: "from background.js"};
		for (var i=0; i<tabs.length; i++) {
	        chrome.tabs.sendMessage(tabs[i].id, message);
		}
	});*/
})
