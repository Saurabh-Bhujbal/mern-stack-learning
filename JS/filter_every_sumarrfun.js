let arr=[13,22,5,33,48,9,59,78,44];
let gretnum=arr.filter((ele)=>(ele>29)  )
console.log(gretnum);


let evennum=arr.filter((ele)=>(ele%2==0));
console.log(evennum);

let odd=(ele)=>{
    return ele%2!=0
};
let oddnum=arr.filter(odd);
console.log(oddnum);






let arrr2=[2,4,6,8];
let reult=arrr2.every((el)=>{
    return el%2==0;
})
console.log("for every="+reult); //true bcos all are even

let ar=[4,6,11,13];
let r=ar.some((el)=>{
    return el%2==0;
})
console.log("for some="+r);   //true bcos there is 4 & 6


let sample=[1,5,9,23];
let op=sample.some((el)=>{
    return el%2==0;
})
console.log("for some="+op);        //false bcos no any even value