let arr=[20,3,26,19,23];
arr.forEach(function(ele){
    console.log(ele);
});

//OR
let print=(el,i)=>{
    console.log(el,i);
}
arr.forEach(print);
