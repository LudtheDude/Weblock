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
	if(window.addedSite){ //executes if input is not empty
		window.blocked.push(window.addedSite)
		var length = window.blocked.length
		const div = document.createElement('div')
		if(window.addedSite){
			div.textContent = length + ". " + addedSite
		}
		document.getElementById("printedList").appendChild(div)
	}
	/*chrome.runtime.sendMessage({
  		added: addedSite
	})*/
	document.getElementById("websites-to-block").value = "";
	window.addedSite = "";
}
