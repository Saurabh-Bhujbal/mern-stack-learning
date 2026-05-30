let arr=[["banana","watermwlon","apple"],["potato","bangan","drumstick"]]
for(let i=0;i<arr.length;i++){
    console.log(`array elements in ${i}th array is ${arr[i]}`);
    for(let j=0;j<arr[i].length;j++){
        console.log(`${i}th array element at ${j} is ${arr[i][j]}`);
    }
}


//for Of loop
console.log("********************FOR OF LOOP******************************");
let fruit=["banana","watermwlon","apple","potato","bangan","drumstick"];
for(ele of fruit){
    console.log(ele)
}