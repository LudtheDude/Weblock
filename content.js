//blocks the entire domain
var blocked = [];
chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
    blocked = request.blockedURLs;
    BlockAllURL(blocked);
    updateFilters(blocked)
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
BlockAllURL(blocked);

chrome.runtime.sendMessage({
  url: window.location.href
})
