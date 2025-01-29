function renderinventoryBtn(){
	let html = `<div id="inventory-btn" class="click" onclick="openinventory()"><span class="material-symbols-outlined">
deployed_code
</span></div>`;
	document.querySelector("#body").insertAdjacentHTML("beforeend",html);
}
renderinventoryBtn();

function openinventory(){
	let html = `
		<div id="overlay-inventory">
			<div id="modal-inventory">
				<div id="tabs-inventory">
					<div id="collection" class="tab">${ui[lang].inventory.tabs.collection}</div>
					<div id="treasures" class="tab" onclick="openTab('treasures')">${ui[lang].inventory.tabs.treasures}</div>
				</div>
				<div id="taboptions"></div>
				<div id="close-inventory-btn" class="click" onclick="closeinventory()"><span class="material-symbols-outlined">
close
</span></div>
			</div>
		</div>
	`;
	document.querySelector("#body").insertAdjacentHTML("beforeend",html);

	//init
	openTab('collection');
}

function closeinventory(){
	document.querySelector("#overlay-inventory").remove();
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

	document.querySelector("#taboptions").textContent = '';

	if(m == "collection"){
		for (const [type, data] of Object.entries(game.collection)) {
			collectionHTML += `<div id="inventory-${type}" class="inventory-item-collection click" onclick="openCollection('${type}')">${type}</div>`;
		}
		document.querySelector("#taboptions").insertAdjacentHTML("beforeend",collectionHTML);
	}
	if(m == "treasures"){
		for (const [type, data] of Object.entries(game.treasures)) {
			treasuresHTML += `<div id="inventory-${type}" class="inventory-item-collection click" onclick="openTreasureType('${type}')">${type}</div>`;
		}
		document.querySelector("#taboptions").insertAdjacentHTML("beforeend",treasuresHTML);
	}


}