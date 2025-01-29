function rendersettingsBtn(){
	let html = `<div id="settings-btn" class="click" onclick="opensettings()"><span class="material-symbols-outlined">
settings
</span></div>`;
	document.querySelector("#body").insertAdjacentHTML("beforeend",html);
}
rendersettingsBtn();

function opensettings(){
	let html = `
		<div id="overlay-settings">
			<div id="modal-settings">

				<div class="settings-item">
					<span class="title">${ui[lang].settings.sound}</span>
					<span class="click" onclick="soundOn()">On</span>/<span class="click" onclick="soundOff()">Off</span>
				</div>
				<div class="settings-item">
					<span class="title">${ui[lang].settings.screenmode}</span>
					<span class="click" onclick="darktheme()">☾</span>/<span class="click" onclick="lighttheme()">☼</span>
				</div>
				<div class="settings-item">
					<span class="title">${ui[lang].settings.language}</span>
					<span id="esp" class="click" onclick="switchLang('esp')">Español</span> / 
					<span id="eng" class="click" onclick="switchLang('eng')">English</span>
				</div>
				<div class="settings-item">
					<span class="title">${ui[lang].settings.system}</span>
					<span class="click" onclick="reset()">${ui[lang].settings.reset}</span
				</div>
				
				<div id="close-settings-btn" class="click" onclick="closesettings()"><span class="material-symbols-outlined">close</span></div>
			</div>
		</div>
	`;
	document.querySelector("#body").insertAdjacentHTML("beforeend",html);

}

function closesettings(){
	document.querySelector("#overlay-settings").remove();
}

