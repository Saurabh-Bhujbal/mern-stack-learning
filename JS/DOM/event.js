let btns=document.querySelectorAll('button');
console.dir(btns)
let bd=document.querySelector('body');
for(btn of btns){
    btn.onclick=sayhii;       //sayhii can't execut bcos onclick have two function use addEventListener
    btn.onmouseenter=clrcng;
    btn.onmouseout=clrorg;
     btn.onclick=clr;
}
function sayhii(){
    alert("button clicked!!");
}
function clrcng(){
    bd.style.backgroundColor="red";
}
function clrorg(){
    bd.style.backgroundColor="white";
}
function clr(){
    bd.style.backgroundColor="green";
}