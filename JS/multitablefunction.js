function multtable(digit){
    for(i=1;i<=10;i++){
        console.log(digit*i)
    }
}
multtable(9);
function divisibleby10(digit){
            if((digit%10)===0){
                return "divisible by 10";
            }
            else{
                return "not divisible by 10";
            }
}
console.log(divisibleby10(90));
function sumofthree(a,b){
     return a+b;
}
console.log("sum of three number using two variables => "+sumofthree(sumofthree(12,3),5));