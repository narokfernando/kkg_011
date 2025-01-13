function renderController(){

	selectedhero = game.selected.heroes;

	if(selectedhero != ""){
		if(game.collection.heroes[selectedhero].position.scene == game.url.scene){
			document.getElementById("scene").innerHTML += `
			<div id="controller">
				<div id="controller-left" class="controller-button">←</div>
				<div id="controller-right" class="controller-button">→</div>
				<div id="controller-up" class="controller-button">↑</div>
				<div id="controller-down" class="controller-button">↓</div>
			</div>`;
		}
	}
}

function removeController(){
	let elem = document.getElementById("controller");
	if(elem != undefined){
		document.getElementById("controller").remove();
	}
}