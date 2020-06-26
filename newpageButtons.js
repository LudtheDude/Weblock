/*function addWebsite(){
    //var website = document.getElementById('websites-to-block').value;
    //document.getElementById("websites-to-block").value = '';
    console.log(document.getElementById('websites-to-block').value);
}


document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('add-website').addEventListener('click', addWebsite);
    main();
  });
  */
window.blocked = [];

document.getElementById('add-website').onclick = function(){
	window.addedSite = document.getElementById("websites-to-block").value

	if(addedSite){
		window.blocked.push(window.addedSite)
		alert(window.blocked.toString())
		const div = document.createElement('div')
		div.textContent = blocked.length + ". " + addedSite
		document.getElementById("printedList").appendChild(div)

		chrome.tabs.query({}, function(tabs) {
		    var message = {addSite: window.addedSite, greeting: "from button.js"};
		    for (var i=0; i<tabs.length; i++) {
		        chrome.tabs.sendMessage(tabs[i].id, message);
		    }
		});
	}

	document.getElementById("websites-to-block").value = "";
	addedSite = "";
}
