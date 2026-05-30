let heading=document.querySelector("h1");
let btn=document.querySelector("button");
let div=document.querySelector("div");

function getcolor(){
        let red=(Math.floor(Math.random()*255)); 
        let grn=(Math.floor(Math.random()*255)); 
        let blu=(Math.floor(Math.random()*255)); 
        
        let bgclr=`rgb(${red},${grn},${blu})`
        return bgclr;
}
btn.addEventListener("click",cngclr);
function cngclr(){
    let clr=getcolor();
    heading.innerText=clr;
    div.style.backgroundColor=clr;
}