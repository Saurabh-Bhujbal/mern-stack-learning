let h1=document.querySelector("h1");
function changeclr(color,delay,nextclr){//call back using nextclr 
    setTimeout(()=>{
        h1.style.color=color;
        nextclr();
    },delay);
}
changeclr("red",1000,()=>{
    changeclr("orange",1000,()=>{
        changeclr("green",1000,()=>{
            changeclr("blue",1000,()=>{
                changeclr("yellow",1000);
            });
        });
    });
});//this callbacks are complicated so also called callback hell;