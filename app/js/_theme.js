var theme = "dark";

function loadTheme(){

	//load
	const localtheme = localStorage.getItem("theme");
	if(localtheme != undefined){
		theme = localtheme;
	} else {
		localStorage.setItem("theme",theme);
	}

	//render btn
	//let html = `<div id="theme-btn" class="${theme} click" ></div>`;
	//document.getElementById("body").insertAdjacentHTML('beforeend',html);

	//render theme
	if(theme == "dark"){
		darktheme();
	}
	if(theme == "light"){
		lighttheme();
	}

}
loadTheme();

function darktheme(){

	//clear
	//document.getElementById('theme-btn').removeEventListener('click',darktheme);

	//set

	const root = document.querySelector(':root');
	root.style.setProperty('color-scheme','dark');
	//document.getElementById('theme-btn').addEventListener('click',lighttheme);
	//document.getElementById("theme-btn").innerText = '☾';
	document.getElementById('body').setAttribute("class","dark");

	//save
	localStorage.setItem("theme","dark");
}


function lighttheme(){

	//clear
	//document.getElementById('theme-btn').removeEventListener('click',lighttheme);

	//set
	const root = document.querySelector(':root');
	root.style.setProperty('color-scheme','light');
	//document.getElementById('theme-btn').addEventListener('click',darktheme);
	//document.getElementById("theme-btn").innerText = '☼';
	document.getElementById('body').setAttribute("class","light");


	//save
	localStorage.setItem("theme","light");
}



