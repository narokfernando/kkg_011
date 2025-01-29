function renderMapBtn(){
	let html = `<div id="map-btn" class="click" onclick="openMap()"><span class="material-symbols-outlined">
map
</span></div>`;
	document.querySelector("#body").insertAdjacentHTML("beforeend",html);
}
renderMapBtn();

function openMap(){
	let html = `
		<div id="overlay-map">
			<div id="modal-map">
				<div id="tabs-map">
					<div id="collection" class="tab">${ui[lang].map.tabs.collection}</div>
					<div id="treasures" class="tab" onclick="openTab('treasures')">${ui[lang].map.tabs.treasures}</div>
					<div id="settings" class="tab" onclick="openTab('settings')">${ui[lang].map.tabs.settings}</div>
				</div>
				<div id="taboptions"></div>
				<div id="close-map-btn" class="click" onclick="closeMap()">x</div>
			</div>
		</div>
	`;
	document.querySelector("#body").insertAdjacentHTML("beforeend",html);

	//init
	openTab('collection');
}

function closeMap(){
	document.querySelector("#overlay-map").remove();
}

function openTab(m){

	const tabs = document.querySelectorAll(".tab");
	for (let i = 0; i < tabs.length; i++) {
	  tabs[i].classList.add('click');
	  const tabid = tabs[i].id;
	  tabs[i].setAttribute("onclick","openTab('"+tabid+"')");
	}
	document.querySelector("#"+m).classList.remove('click');
	document.querySelector("#"+m).removeAttribute("onclick");

	let collectionHTML = ``;
	let treasuresHTML = ``;
	let settingsHTML = `
		<div class="map-item">
			<span class="title">${ui[lang].map.settings.sound}</span>
			<span class="click" onclick="soundOn()">On</span>/<span class="click" onclick="soundOff()">Off</span>
		</div>
		<div class="map-item">
			<span class="title">${ui[lang].map.settings.screenmode}</span>
			<span class="click" onclick="darktheme()">☾</span>/<span class="click" onclick="lighttheme()">☼</span>
		</div>
		<div class="map-item">
			<span class="title">${ui[lang].map.settings.language}</span>
			<span id="esp" class="click" onclick="switchLang('esp')">Español</span> / 
			<span id="eng" class="click" onclick="switchLang('eng')">English</span>
		</div>
		<div class="map-item">
			<span class="title">${ui[lang].map.settings.system}</span>
			<span class="click" onclick="reset()">${ui[lang].map.settings.reset}</span
		</div>
	`;

	document.querySelector("#taboptions").textContent = '';

	if(m == "collection"){
		for (const [type, data] of Object.entries(game.collection)) {
			collectionHTML += `<div id="map-${type}" class="map-item-collection click" onclick="openCollection('${type}')">${type}</div>`;
		}
		document.querySelector("#taboptions").insertAdjacentHTML("beforeend",collectionHTML);
	}
	if(m == "treasures"){
		for (const [type, data] of Object.entries(game.treasures)) {
			treasuresHTML += `<div id="map-${type}" class="map-item-collection click" onclick="openTreasureType('${type}')">${type}</div>`;
		}
		document.querySelector("#taboptions").insertAdjacentHTML("beforeend",treasuresHTML);
	}
	if(m == "settings"){
		document.querySelector("#taboptions").insertAdjacentHTML("beforeend",settingsHTML);
	}


}