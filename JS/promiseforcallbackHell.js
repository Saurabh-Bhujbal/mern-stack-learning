let h1=document.querySelector("h1");
function changeclr(color,delay,){
    return new Promise((resolved, reject)=>{
        setTimeout(()=>{
        h1.style.color=color;
        resolved();
    },delay);
    })
    
}
changeclr("red",1000).then(()=>{
    console.log("color changed to red!!");
    return changeclr("green",1000);
}).then(()=>{
    console.log("color changed to green!!");
    return changeclr("orange",1000);
}).then(()=>{
    console.log("color changed to orange!!");
    return changeclr("blue",1000);
}).then(()=>{
    console.log("color changed to blue!!");
    return changeclr("red",8000);
})