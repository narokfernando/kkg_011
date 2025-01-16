function renderHeroes(){
	for (const [h, data] of Object.entries(game.collection.heroes)) {
		if(game.collection.heroes[h].position.scene == sid){
			const heroHTML = `<div id="${h}" class="heroes ${h}">${h}</div>`;
			document.getElementById("scene").insertAdjacentHTML('beforeend',heroHTML);

			if(h != game.selected.heroes){

				//render hero
				const heroselectorHTML = `<div id="select-${h}" class="heroselector">▼</div>`;
				document.getElementById("scene").insertAdjacentHTML('beforeend',heroselectorHTML);

				//activate select
				document.getElementById("select-"+h).addEventListener("click", function(){
				    selectHero(h);
				});

				//place selector
				placeSelectHeroBtn(h,game.collection.heroes[h].position.step);
			} else {
				const heroselectedHTML = `<div id="selected-${h}" class="heroselected">▼</div>`;
				document.getElementById("scene").insertAdjacentHTML('beforeend',heroselectedHTML);

				//place selected
				placeSelecedtHeroBtn(h,game.collection.heroes[h].position.step);
			}

			//place on step
			placeHero(h,game.collection.heroes[h].position.step);

			//run controller
			controller("move");
			
		}
	}
}


function selectHero(h){
	//save
	game.selected.heroes = h;
	save("game",game);

	//remove selectors
	const heroselectorList = document.querySelectorAll(".heroselector");
	for (let i = 0; i < heroselectorList.length; i++) {
	  heroselectorList[i].remove();
	}
	//remove heroes
	const heroesList = document.querySelectorAll(".heroes");
	for (let i = 0; i < heroesList.length; i++) {
	  heroesList[i].remove();
	}
	//remove selected
	const heroselectedList = document.querySelectorAll(".heroselected");
	for (let i = 0; i < heroselectedList.length; i++) {
	  heroselectedList[i].remove();
	}

	//re render heroes
	renderHeroes();

}



function placeHero(h,s){

    let elem = document.getElementById(s);

    let nx = window.getComputedStyle(elem).getPropertyValue("left");
    let ny = window.getComputedStyle(elem).getPropertyValue("top");

    document.getElementById(h).style.transition = "all .2s ease";
    document.getElementById(h).style.left = nx;
    document.getElementById(h).style.top = ny;

    //heroSize(h,s);
    //heroSide(h,nx);

    //activateStepsNOGOTO(s);

    //place select unselected heroes
    /*
    console.log(document.getElementById("select-"+h).style);
    document.getElementById("select-"+h).transition = "all .2s ease";
    document.getElementById("select-"+h).style.left = nx;
    document.getElementById("select-"+h).style.top = ny;
    */


}



function placeSelectHeroBtn(h,s){

	let elem = document.getElementById(s);
	let nx = window.getComputedStyle(elem).getPropertyValue("left");
    let ny = window.getComputedStyle(elem).getPropertyValue("top");

    let topnum = ny.split("px");

    topnum = parseInt(topnum, 10);
    topnum = topnum * 1;
    ny = topnum+"px";

    document.getElementById("select-"+h).style.left = nx;
    document.getElementById("select-"+h).style.top = ny;	
}


function placeSelecedtHeroBtn(h,s){

	let elem = document.getElementById(s);
	let nx = window.getComputedStyle(elem).getPropertyValue("left");
    let ny = window.getComputedStyle(elem).getPropertyValue("top");

    let topnum = ny.split("px");

    topnum = parseInt(topnum, 10);
    topnum = topnum * 1;
    ny = topnum+"px";

    document.getElementById("selected-"+h).style.left = nx;
    document.getElementById("selected-"+h).style.top = ny;	
}




