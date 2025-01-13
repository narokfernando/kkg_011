function goto(w,r,s,sp){

	wid = w;
	rid = r;
	sid = s;

	url = "/map/"+wid+"/"+rid+"/"+sid+"/";
	history.pushState(null,url,[url]);
	
	//clear
	console.clear();
	document.getElementById('scene').innerHTML = '';
	document.getElementById('scenejs').remove();
	document.getElementById('scenecss').removeAttribute("href");
	document.getElementById('scene').removeAttribute("class");
	/*
	document.getElementById('regionenemies').remove();
	document.getElementById('regiontreasures').remove();
	*/

	//render all again
	loadJS('scenejs',url+'scene.js');
	document.getElementById('scenecss').setAttribute("href","scene.css");
	document.getElementById('regionscenery').setAttribute("href","/map/"+wid+"/"+rid+"/_db/_scenery/_scenery.css");


	/*
	loadJs('regionenemies','/map/'+wid+'/'+rid+'/enemies.js');
	loadJs('regiontreasures','/map/'+wid+'/'+rid+'/treasures.js');
	loadJs('regionitems','/map/'+wid+'/'+rid+'/items.js');
	*/

	//the run
	setTimeout(run,200);
}