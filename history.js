document.addEventListener('DOMContentLoaded',function(){
	const background = chrome.extension.getBackgroundPage()
		for(var i = 0;i<background.urls.length;i++){
			const div = document.createElement('div')
			div.textContent = background.urls[i]
			document.body.appendChild(div)
		}
},false)

//window.addEventListener('load',function load(event){
//});