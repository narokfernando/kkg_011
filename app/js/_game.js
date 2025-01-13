var game = {
	"selected":{
		"heroes":"",
		"dices":"",
		"swords":"",
		"shields":"",
		"spells":"",
	},
	"collection":{
		"heroes":{},
		"dices":{},
		"swords":{},
		"shields":{},
		"spells":{},
		"specialcards":{},
		"pages":{},
		"maps":{}
	},
	"treasures":{
		"coins":{
			"silver":0,
			"golden":0,
			"red":0,
			"blue":0,
		},
		"starbits":{
			"red":0,
			"blue":0,
			"purple":0,
			"yellow":0,
			"white":0,
			"green":0
		},
		"gems":{
			"red":0,
			"blue":0,
			"green":0,
			"purple":0,
			"yellow":0
		},
		"shiningstones":{
			"red":0,
			"white":0,
			"black":0,
			"blue":0
		}
	}
}

function loadgame(){
	let localgame = localStorage.getItem('game');
	if(localgame == undefined){
		localStorage.setItem('game',JSON.stringify(game));
	} else {
		game = JSON.parse(localgame);
	}
	console.log("game");
	console.log(game);
}