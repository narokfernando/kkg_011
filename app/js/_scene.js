function loadscene(){
	let localscene = localStorage.getItem(url);
	if(localscene == undefined){
		localStorage.setItem(url,JSON.stringify(scene));
	} else {
		scene = JSON.parse(localscene);
	}
}

function renderTitle(){
	document.getElementById("title").text = scene.title;
}

function path(){
	let path = scene.path;
	if(path != undefined){
		document.getElementById("scene").classList.add(path);
	}
}

function renderSteps(){

	for (const [item, data] of Object.entries(scene.steps)) {

		const stepHTML = `<div id="${item}" class="step">${item}</div>`;
		document.getElementById("scene").insertAdjacentHTML('beforeend',stepHTML);

		//goto
		if(data.url != undefined){
		    document.getElementById(item).classList.add("goto","click");

		    document.getElementById(item).addEventListener("click", function(){
                goto(data.url.world,data.url.region,data.url.scene,data.url.step);
            });

		    const gotoHTML = `<div class="goto-name">${data.url.scene}</div>`;
			document.getElementById(item).insertAdjacentHTML('beforeend',gotoHTML);

		}
	};
}

function renderScenery(){

	document.getElementById('regionscenery').setAttribute("href","/map/"+wid+"/"+rid+"/_db/_scenery/_scenery.css");

	let scenery = scene.scenery;
	if(scenery != undefined){
		for (const [item, data] of Object.entries(scenery)) {

			const sceneryHTML = `<div id="${item}" class="scenery ${item}">${item}</div>`;
			document.getElementById("scene").insertAdjacentHTML('beforeend',sceneryHTML);

		}
	}
}



function renderCollectables(){
	let collectables = scene.collectables;
	if(collectables != undefined){
		for (const [item, data] of Object.entries(scene.collectables)) {
			let type = data.type;

			const collectableHTML = `<div id="collectable-${item}" class="collectable click collectable-${data.type} ${item}">${window[type][item].name}</div>`;
			document.getElementById("scene").insertAdjacentHTML('beforeend',collectableHTML);

			document.getElementById("collectable-"+item).addEventListener("click", function(){
                collect(item,data.type,);
            });
		};	
	}
}



function removePx(value) {
	return parseInt(value, 10); // Convierte el valor a un número entero
}
var scenewidth;
var sceneheight
function getSceneSize(){
	//get with and height sizes
	let elem = document.getElementById("scene");
	
	scenewidth = window.getComputedStyle(elem).getPropertyValue("width");
	scenewidth = removePx(scenewidth);
	
	sceneheight = window.getComputedStyle(elem).getPropertyValue("height");
	sceneheight = removePx(sceneheight);
}
getSceneSize();

function renderTreasures(){
	let treasures = scene.treasures;
	if(treasures != undefined){
		for (const [type, data] of Object.entries(scene.treasures)) {
			for (const [color,max] of Object.entries(scene.treasures[type])) {

				let i = 1;
				while(i <= max){

					let rheight = Math.floor(Math.random() * sceneheight) + 1;
					let rwidth = Math.floor(Math.random() * scenewidth) + 1;

					let rtop = rheight+"px";
					let rleft = rwidth+"px";

					const id = type+"-"+color+"-"+i;

					const treasureHTML = `<div id="${id}" class="treasure click ${type} ${color}" style="top:${rtop};left:${rleft};">${type} ${color}</div>`;
					document.getElementById("scene").insertAdjacentHTML('beforeend',treasureHTML);
					
					document.getElementById(id).addEventListener("click", function(){
					    collectTreasure(id,type,color);
					});

					i++
				}
			};
			
		};
	}
}