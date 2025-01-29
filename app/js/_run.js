function run(){

	//global
	loadURL();

	//scene
	loadscene();
	renderTitle();

		//steps
		path();
		renderSteps();
		renderScenery();
		renderTreasures();
		renderCollectables();

	/*
	
	renderEnemies();
	//game elements
	
	*/

	//game
	loadgame();
	renderHeroes();

}
run();
