let btns=document.querySelectorAll('button');
let bd=document.querySelector('body');
let div=document.querySelector('div');
for(btn of btns){
    btn.addEventListener("click",sayhello);//Execute both functions sayhello and clr 
    btn.addEventListener("click",clr);
}
div.addEventListener("click",show);
function sayhello(){
    alert("HWLLO!!!");
}

function clr(){
    bd.style.backgroundColor="green";
}



//this in event listener, returns object element by which eventlistener called
function show(){
    console.log(this);
}
