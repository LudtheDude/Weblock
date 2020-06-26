window.blocked = [];
var addedSite = "";
window.urls = [];

chrome.browserAction.onClicked.addListener(function(tab){
  chrome.tabs.create({url: 'newpage.html'})
  for(var i = 0;i<blocked.length;i++){
      const div = document.createElement('div')
      div.textContent = blocked[i]
      document.getElementById('printedList').appendChild(div)
    }
})

chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
  urls.push(request.url); //history
})

document.getElementById('see-history').onclick = function(){
  chrome.tabs.create({url: 'history.html'})
}

document.getElementById('add-website').onclick = function(){
  addedSite = document.getElementById("websites-to-block").value
    if(addedSite && !blocked.includes(addedSite)){
      blocked.push(addedSite);
      const div = document.createElement('div')
      div.textContent = blocked.length + ". " + addedSite
      document.getElementById("printedList").appendChild(div)
  }
  document.getElementById("websites-to-block").value = "";
  addedSite = "";

  chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    sendToContent();
  });

  chrome.tabs.onCreated.addListener(function(tab) {         
    sendToContent();
  });

  chrome.tabs.onActivated.addListener(function(tabId, changeInfo, tab) {
     sendToContent();
  });
}

function sendToContent(){
  chrome.tabs.query({}, function(tabs) {
      var message = {blockedURLs: blocked};
      for (var i=0; i<tabs.length; i++) {
        chrome.tabs.sendMessage(tabs[i].id, message);
      }
  });
}

function removeElement(array, elem) {
    var index = array.indexOf(elem);
    if (index > -1) {
        array.splice(index, 1);
    }
}

document.getElementById('remove').onclick = function(){
  removedSite = document.getElementById('websites-to-block').value
  if(removedSite && blocked.includes(removedSite)){
    removeElement(blocked,removedSite)
    var element = document.getElementById('printedList')
    while (element.firstElementChild) {
      element.removeChild(element.lastElementChild);
    }
    for(var i = 0;i<blocked.length;i++){
      const div = document.createElement('div')
      div.textContent = (i+1) + ". " + blocked[i]
      document.getElementById("printedList").appendChild(div)
    }
  }
  document.getElementById('websites-to-block').value = ""
  removedSite = ""
  chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    sendToContent();
  });

  chrome.tabs.onCreated.addListener(function(tab) {         
    sendToContent();
  });

  chrome.tabs.onActivated.addListener(function(tabId, changeInfo, tab) {
     sendToContent();
  });
}
