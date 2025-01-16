function placeHero(h,s){

    let elem = document.getElementById(s);

    let nx = window.getComputedStyle(elem).getPropertyValue("left");
    let ny = window.getComputedStyle(elem).getPropertyValue("top");

    document.getElementById(h).style.transition = "all .2s ease";
    document.getElementById(h).style.left = nx;
    document.getElementById(h).style.top = ny;


    heroSize(h,s);
    heroSide(h,nx);

    //placeHeroBt(h,s);

    
    document.getElementById(h).innerHTML += `
        <div id="select-${h}" class="select-hero-btn" onclick="selectHero('${h}')">
            <div class="select-this-hero">▼</div>
        </div>
    `;
    
}

function placeHeroBt(h,s){
    let elem = document.getElementById(s);

    let nx = window.getComputedStyle(elem).getPropertyValue("left");
    let ny = window.getComputedStyle(elem).getPropertyValue("top");

    document.getElementById("select-"+h).style.transition = "all .2s ease";
    document.getElementById("select-"+h).style.left = nx;
    document.getElementById("select-"+h).style.top = ny;
}





function heroSize(h,s){
    let elem = document.getElementById(s);

    //height
    let nh = window.getComputedStyle(elem).getPropertyValue("height");
    let size = nh.split("px");
    let sizenum = size[0];
    let newheight = sizenum*2.7;
    document.getElementById(h).style.height = newheight+"px";
    
    //width
    let nw = window.getComputedStyle(elem).getPropertyValue("width");
    let nwsize = nw.split("px");
    let nwsizenum = nwsize[0];
    //let newwidth = sizenum/0.8;
    let newwidth = sizenum*1.6;
    document.getElementById(h).style.width = newwidth+"px";

    //margins
    document.getElementById(h).style.marginTop = "-"+newheight/1.4+"px";
    document.getElementById(h).style.marginLeft = "-0%";

}


function heroSide(h,nx){
    //origin
    let o = document.getElementById(h);
    let ox = window.getComputedStyle(o).getPropertyValue("left");
    ox = ox.replace('px','');
    //destine
    nx = nx.replace('px','');

    if(nx > ox){
        document.getElementById(h).classList.remove("hero-left");
        document.getElementById(h).classList.add("hero-right");
    } else {
        document.getElementById(h).classList.remove("hero-right");
        document.getElementById(h).classList.add("hero-left");
    }
}

function activateSteps(ns){

    let hselected = game.selected.heroes;
    let hselectedstep = game.collection.heroes[hselected].position.step;

    /*
    console.log("++++");
    console.log(hselectedstep);
    console.log("++++");
    */

    //steps = map[worldid][regionid].scenes[sceneid].steps;
    let steps = scene.steps;

    let left = steps[ns].left;
    let right = steps[ns].right;
    let down = steps[ns].down;
    let up = steps[ns].up;
    let turn3 = steps[ns].turn3;
    let turn4 = steps[ns].turn4;
    let durl = steps[ns].url;
    let enemy = steps[ns].enemy;
    let fight = steps[ns].fight;
    let creature = steps[ns].creature;


    //clear all onclick
    let m = document.getElementById("scene").querySelectorAll(".step");
    let k;
    for (k = 0; k < m.length; k++) {
        let id = m[k].id;
        m[k].classList.remove("active");
        m[k].removeAttribute("onclick");
    }

    //clear arrows
    let a = document.getElementById("scene").querySelectorAll(".arrow");
    let j;
    for (j = 0; j < a.length; j++) {
        let id = a[j].id;
        a[j].remove();
    }

    //clear all controllers
    let c = document.getElementById("controller").querySelectorAll(".controller-btn");
    let r;
    for (r = 0; r < c.length; r++) {
        let id = c[r].id;
        c[r].classList.remove("controller-btn-active");
        c[r].removeAttribute("onclick");
    }

    //add goto
    for (const [key, value] of Object.entries(scene.steps)){
        //document.getElementById("scene").innerHTML += '<div id="'+key+'"  class="step">'+key+'</span></div>';

        //go to
        if(value.url != undefined){
            document.getElementById(key).setAttribute("onclick","goto('"+value.url.world+"','"+value.url.region+"','"+value.url.scene+"','"+value.url.step+"')");
        }
    }


    let h = game.selected.heroes;

    //add onclick
    if(left !== undefined) {
        document.getElementById(left).setAttribute("onclick","move('"+left+"','left','"+h+"')");
        document.getElementById(left).classList.add("active");
        document.getElementById(left).innerHTML += '<div class="arrow"></div>';


        
        document.getElementById("controller-left").setAttribute("onclick","move('"+left+"','left','"+h+"')");
        document.getElementById("controller-left").classList.add("controller-btn-active");
        
    }
    if(right !== undefined) {
        document.getElementById(right).setAttribute("onclick","move('"+right+"','right','"+h+"')");
        document.getElementById(right).classList.add("active");
        document.getElementById(right).innerHTML += '<div class="arrow"></div>';

        
        document.getElementById('controller-right').setAttribute("onclick","move('"+right+"','right','"+h+"')");
        document.getElementById("controller-right").classList.add("controller-btn-active");
        
    }
    if(down !== undefined) {
        document.getElementById(down).setAttribute("onclick","move('"+down+"','down','"+h+"')");
        document.getElementById(down).classList.add("active");
        document.getElementById(down).innerHTML += '<div class="arrow"></div>';

        
        document.getElementById('controller-down').setAttribute("onclick","move('"+down+"','down','"+h+"')");
        document.getElementById("controller-down").classList.add("controller-btn-active");
        
    }
    if(up !== undefined) {
        document.getElementById(up).setAttribute("onclick","move('"+up+"','up','"+h+"')");
        document.getElementById(up).classList.add("active");
        document.getElementById(up).innerHTML += '<div class="arrow"></div>';

        
        document.getElementById('controller-up').setAttribute("onclick","move('"+up+"','up','"+h+"')");
        document.getElementById("controller-up").classList.add("controller-btn-active");
        
    }
    if(turn3 !== undefined) {
        document.getElementById(turn3).setAttribute("onclick","move('"+turn3+"','"+h+"')");
        document.getElementById(turn3).classList.add("active");
  
    }
    if(turn4 !== undefined) {
        document.getElementById(turn4).setAttribute("onclick","move('"+turn4+"','"+h+"')");
        document.getElementById(turn4).classList.add("active");
   
    }
    if(durl !== undefined) {
 
        //save
        url.wid = durl.world;
        url.rid = durl.region;
        url.sid = durl.scene;

        game.collection.heroes[h].position.world = durl.world;
        game.collection.heroes[h].position.region = durl.region;
        game.collection.heroes[h].position.scene = durl.scene;
        game.collection.heroes[h].position.step = durl.step;

        save("game",game);

        //update scene
        goto(durl.world,durl.region,durl.scene);
    }
    if(enemy !== undefined) {
       
        //startBattle(steps[ns].enemy.class,steps[ns].enemy.level,steps[ns].back);

        let elevel = enemy.level;
        let etype = enemy.type;
        let eback = enemy.back;

        startBattleSequence(etype,elevel,eback);


    }
    if(creature !== undefined) {
       
        //startBattle(steps[ns].enemy.class,steps[ns].enemy.level,steps[ns].back);

        let level = creature.level;
        let id = creature.id;

        startCreatureBattle(id,level);


    }
    /*
    if(fight !== undefined) {
       
        //startBattle(steps[ns].enemy.class,steps[ns].enemy.level,steps[ns].back);

         console.log(regionenemies);

        console.log("FIGHT!!!! //////////");
       

    }
    */

}

function move(ns,dir,h){

    step = ns;

    //save
    game.collection.heroes[h].position.step = ns;
    save("game",game);

    //key btns
    //displayKeyBtns();

    let elem = document.getElementById(ns);
    let nx = window.getComputedStyle(elem).getPropertyValue("left");
    let ny = window.getComputedStyle(elem).getPropertyValue("top");
    document.getElementById(h).style.transition = "all .2s ease !important";
    document.getElementById(h).style.left = nx;
    document.getElementById(h).style.top = ny;

    heroSize(h,ns);
    heroSide(h,nx);

    activateSteps(ns);


    keyMoveEnter(dir);
    

}