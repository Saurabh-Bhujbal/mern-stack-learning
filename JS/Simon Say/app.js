let gamesqc=[];
let usersqc=[];
let btns=["red","green","yellow","blue"];
let started=false;
let level=0;
let head=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
    console.log("game started!!");
    started=true;

    levelup();
    }
});
function gameflash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash")
    },275);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },275);
}
function levelup(){
    usersqc=[];
    level++;
    head.innerHTML=`Level ${level}`;
    let btninx=Math.floor(Math.random()*4);
    let btnclr=btns[btninx];
    let btncls=document.querySelector(`.${btnclr}`);
    gameflash(btncls);
    gamesqc.push(btnclr);
    console.log(gamesqc);
}
function checkseq(ind){
    if(gamesqc[ind]===usersqc[ind]){
        if(usersqc.length==gamesqc.length){
           setTimeout(levelup,1000);
        }
    }
    else{

        head.innerHTML=`Game Over!  your score is ${level}<br>Press any key to restart`;
        reset();
    }
}
function btnPress(){
    let btn=this;
    userflash(btn);
    let userclr=btn.getAttribute("id");
    usersqc.push(userclr);
    checkseq(usersqc.length-1);
}
let allbtns =document.querySelectorAll('.btn');
console.log
for(let btn of allbtns){
   btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    level=0;
    usersqc=[];
    gamesqc=[];
}