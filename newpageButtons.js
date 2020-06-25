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
	window.blocked.push(window.addedSite)
	chrome.runtime.sendMessage({
  		added: addedSite
	})
	var length = window.blocked.length
	const div = document.createElement('div')
	div.textContent = length + ". " + addedSite
	document.getElementById("printedList").appendChild(div)

	document.getElementById("websites-to-block").value = "";
	window.addedSite = "";
}
