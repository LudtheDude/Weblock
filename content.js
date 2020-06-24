//BLOCK WORDS
BlockString = function findText(text) {
  if(window.find(text)){
    document.documentElement.innerHTML = '';
    document.documentElement.innerHTML = 'This site is blocked';
    document.documentElement.scrollTop = 0;
  };
}

//BlockString("WordToBlock");



//BLOCK THE PARTIAL DOMAINS
BlockURL = function changeURL(text){
  var current = window.location.href;
  if(current === text){
    //window.location.replace("https://www.google.co.in");
    document.documentElement.innerHTML = 'Website is blocked';
  }
}

//BLOCK THE ENTIRE DOMAIN WITH THE FOLLOWING FUNCTION
BlockAllURL = function changeAllURL(text){
  var current = window.location.href;
  if(current.startsWith(text)){
    //document.documentElement.innerHTML = '';
    document.documentElement.innerHTML = 'Website is blocked';
    //document.documentElement.scrollTop = 0;
  }
}

BlockAllURL("https://www.facebook.com/");


chrome.runtime.sendMessage({
  url: window.location.href,
})


 /*chrome.webRequest.onBeforeRequest.addListener(
        function(details) { return {cancel: true}; },
        {urls: ["*://www.evil.com/*"]},
        ["blocking"]);*/
