//check all element in array are multiplicable by 10;

let arr=[10,20,40,60,190];
let result=arr.every((el)=>(el%10==0));
console.log("is All elements divisible by 10=> "+result);


//find min number from array;
let min=arr.reduce((min,ele)=>{
    if(min < ele){
        return min;
    }
    else{
        return ele;
    }
})
console.log("minimum number is => "+min);