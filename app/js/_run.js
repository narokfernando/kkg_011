function run(){

	//global
	loadURL();
	renderResetBtn();

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
