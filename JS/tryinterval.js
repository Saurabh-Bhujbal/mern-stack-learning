let n=1;
let id=setInterval(()=>{
    console.log(n);
    n+=1;
    if(n==11){
    console.log("you are reach at 10");
    clearInterval(id);
}
},1000)
