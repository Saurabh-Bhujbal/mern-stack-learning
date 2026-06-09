let sqr=(a)=>{return a*a;};
let cube=(b)=>(b*b*b);
let mul=(a,b)=>{return a*b};
let sum=(a,b)=>(a+b);
let obj={
    sum:sum,
    sqr:sqr,
    cube:cube,
    mul:mul
};
module.exports=obj;