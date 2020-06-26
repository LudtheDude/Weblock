//BLOCK THE ENTIRE DOMAIN 
console.log('Content script running.');
window.blocked = [];
chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
    window.blocked.push(request.addSite)
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    console.log(request.greeting)
    console.log(request.addSite)
    BlockAllURL(window.blocked);
});

BlockAllURL = function changeAllURL(text){
  var current = window.location.href;
  for(var i = 0;i<text.length;i++){
    if(current.includes(text[i])){
      document.documentElement.innerHTML = '';
      document.documentElement.innerHTML = 'The page you are trying to access has been blocked';
      document.documentElement.scrollTop = 0;
    }
  }
}
BlockAllURL(window.blocked);

chrome.runtime.sendMessage({
  url: window.location.href
})




//BLOCK WORDS
BlockString = function findText(text) {
  if(window.find(text)){
    document.documentElement.innerHTML = '';
    document.documentElement.innerHTML = 'This site is blocked';
    document.documentElement.scrollTop = 0;
  };
}

//BLOCK THE PARTIAL DOMAINS
BlockURL = function changeURL(text){
  var current = window.location.href;
  if(current === text){
    window.location.replace("https://www.google.co.in");
  }
}




 /*chrome.webRequest.onBeforeRequest.addListener(
        function(details) { return {cancel: true}; },
        {urls: ["*://www.evil.com/*"]},
        ["blocking"]);
  */





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
