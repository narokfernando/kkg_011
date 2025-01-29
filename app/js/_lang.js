var lang = "esp";

var ui = {
	"eng":{
		"inventory":{
			"tabs":{
				"collection":"Collection",
				"treasures":"Treasures"
			}
		},
		"settings":{
			"sound":"Music & Effects",
			"screenmode":"Screen Mode",
			"language":"Language",
			"system":"System",
			"reset":"Reset Game"
		}
	},
	"esp":{
		"inventory":{
			"tabs":{
				"collection":"Collección",
				"treasures":"Tesoros",
				"settings":"Configuraciones"
			}
		},
		"settings":{
			"sound":"Música & Sonido",
			"screenmode":"Modo de Pantalla",
			"language":"Lenguaje",
			"system":"Sistema",
			"reset":"Reiniciar Juego"
		}
	}
}


function loadlang(){

	//load
	const locallang = localStorage.getItem("lang");
	if(locallang != undefined){
		lang = locallang;
	} else {
		localStorage.setItem("lang","esp");
	}

	//render btn
	/*
	let html = `<div id="lang-btn" >
		<span id="esp" class="click" onclick="switchLang('esp')">esp</span> / 
		<span id="eng" class="click" onclick="switchLang('eng')">eng</span>
	</div>`;
	*/
	//document.getElementById("body").insertAdjacentHTML('beforeend',html);

	//render lang
	/*
	if(lang == "esp"){
		document.getElementById("esp").classList.add("active-lang")
	}
	if(lang == "eng"){
		document.getElementById("eng").classList.add("active-lang")
	}
	*/

}
loadlang();

function switchLang(l){
	//save
	localStorage.setItem("lang",l);

	//reload
	location.reload();
}