let arr=[1,3,4,5,8];
let op=arr.reduce((rest,ele)=>{ 
            console.log("rest="+rest,"ele="+ele);
              return rest+ele;

   });
console.log(op);

//to return maximum number from array
let demo=[7,2,9,19,6,58,43,8,32,78,99,23,10];
let max=demo.reduce((pre,next)=>{
  if(pre>next){
    return pre;
  }
  else{
    return next;
  }
});
console.log(max);