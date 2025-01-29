var sound;
var music;

function renderSoundBtn(){
	let html = `<div id="soundbtn"><span class="material-symbols-outlined">
graphic_eq
</span></div>`;
	document.querySelector("#body").insertAdjacentHTML("beforeend",html);
}
renderSoundBtn();

function loadSound(){

	let soundlocal = localStorage.getItem("sound");
	if(soundlocal == undefined){
		sound = "off";
		save("sound",sound);
	} else {
		sound = soundlocal;
	}
		

	if(sound == "on"){
		soundOn();
	} else {
		soundOff();
	}

	/*
	music = db.map[worldid][regionid][sceneid].music;

	if(music !== undefined){
		console.log("sound exist");
	} else {
		console.log("sound doesn't exist");
	}
	*/

}
loadSound();


function soundOff(){

	sound = "off";
	save("sound",sound);

	/*
	document.querySelector("#soundbtn").innerText = '';
	let html = '<span class="material-symbols-outlined">volume_off</span>';
	document.querySelector("#soundbtn").insertAdjacentHTML("beforeend",html);
	*/
	document.getElementById("soundbtn").setAttribute("class","soundoff");
	document.getElementById("soundbtn").setAttribute("onclick","soundOn()");
	
}
function soundOn(){

	sound = "on";
	save("sound",sound);

	/*
	document.querySelector("#soundbtn").innerText = '';
	let html = '<span class="material-symbols-outlined">volume_up</span>';
	document.querySelector("#soundbtn").insertAdjacentHTML("beforeend",html);
	*/
	document.getElementById("soundbtn").setAttribute("class","soundon");
	document.getElementById("soundbtn").setAttribute("onclick","soundOff()");
	
}


function soundFX(file,volume){

	soundstatus = db.player.sound;
	if(soundstatus == "on"){
		let audio = new Audio(file);
		audio.volume = volume;
		audio.play();
	}
	
}