
//HTML insert
const itemHTML = `<div id="${item}" class="step">${item}</div>`;
document.getElementById("scene").insertAdjacentHTML('beforeend',itemHTML);

//Event Listener
document.getElementById(item).addEventListener("click", function(){
    myFunction(var1,var2,var3);
});

//LocalStorage
localStorage.setItem(id,JSON.stringify(json));

//querySelectorAll
const nodeList = document.querySelectorAll(".heroselector");
for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].remove();
}