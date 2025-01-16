function renderController(){

	let selectedhero = game.selected.heroes;

	if(selectedhero != ""){

		if(game.collection.heroes[selectedhero].position.scene == sid){

			const controllerHTML = `
				<div id="controller">
					<div id="controller-left" class="controller-button">←</div>
					<div id="controller-right" class="controller-button">→</div>
					<div id="controller-up" class="controller-button">↑</div>
					<div id="controller-down" class="controller-button">↓</div>
				</div>
			`;
			document.getElementById("scene").insertAdjacentHTML('beforeend',controllerHTML);

		}
	}
}

function removeController(){
	let elem = document.getElementById("controller");
	if(elem != undefined){
		document.getElementById("controller").remove();
	}
}


//controller "ON"
function controller(i){

	if (i === 'move') {
   		//document.removeEventListener('keydown', keyItemsEnter);
   		//document.removeEventListener('keydown', keySeeEnter);
		document.addEventListener('keydown',keyMoveEnter);

		renderController();
 	}

}


//if "MOVE"
function keyMoveEnter(event) {

	//steps = map[worldid][regionid].scenes[sceneid].steps;
    let steps = scene.steps;
    let chero = game.selected.heroes;
    let cstep = game.collection.heroes[chero].position.step;

	//console.log(event);
	//console.log(steps);

 	if (event.key === 'Enter') {
   		//console.log('Move Enter!');
 	} else if (event.key === 'ArrowRight' || event.key === 'd') {

   		//console.log("Move Right");
   		if(steps[cstep].right != null){
   			move(steps[cstep].right,"right",chero);
   		}

	} else if (event.key === 'ArrowLeft' || event.key === 'a') {
   		//console.log("Move Left");
   		if(steps[cstep].left != null){
   			move(steps[cstep].left,"left",chero);
   		}

 	} else if (event.key === 'ArrowUp' || event.key === 'w') {
   		//console.log("Move Up");
   		if(steps[cstep].up != null){
   			move(steps[cstep].up,"up",chero);
   		}

 	} else if (event.key === 'ArrowDown' || event.key === 's') {
   		//console.log("Move Down");
   		if(steps[cstep].down != null){
   			move(steps[cstep].down,"down",chero);
   		}
 	}
	
}