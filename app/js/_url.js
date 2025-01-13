var url = window.location.pathname;

var wid;
var rid;
var sid;

function loadURL(){
	let urlarray = url.substr(1).split('/');
	wid = urlarray[1];
	rid = urlarray[2];
	sid = urlarray[3];

}