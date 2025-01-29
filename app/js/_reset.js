/*
function renderResetBtn(){
	document.getElementById('body').innerHTML += '<div id="reset-btn" class="click" onclick="reset()">r</div>';
	document.getElementById('body').innerHTML += '<div id="reset-scene-btn" class="click" onclick="resetScene()">r/s</div>';
}
*/

function reset(){
	localStorage.clear();
	location.reload();
}

function resetScene(){
	localStorage.removeItem(url);
	location.reload();
}