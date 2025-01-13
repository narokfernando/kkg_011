//collectables
function collect(id,type){

	//save
	game.collection[type][id] = window[type][id];

	if(game.selected[type] == ""){
		game.selected[type] = id;
	}

	if(type == "heroes"){
		
		game.collection[type][id].position.world = wid;
		game.collection[type][id].position.region = rid;
		game.collection[type][id].position.scene = sid;

		selectHero(id);
	}

	save("game",game);

	//delete
	delete scene.collectables[id];
	document.getElementById("collectable-"+id).remove();

	save(url,scene);
}

//treasures
function collectTreasure(id,type,color){
	
	game.treasures[type][color] = game.treasures[type][color]+1;
	save("game",game);

	//delete
	scene.treasures[type][color] = scene.treasures[type][color]-1;
	
	//pop collect treasure
	document.getElementById(id).classList.add('fadeup');
	setTimeout(remove,1000,id);
	
	save(url,scene);
}

function remove(id){
	document.getElementById(id).remove();
}