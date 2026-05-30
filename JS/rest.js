function sumarr(...arr){
    let sum=0;
    for(i=0;i<arr.length;i++){
        console.log("passed elements="+arr[i])
        sum+=arr[i];
    }
console.log(sum);
}
sumarr(20,34,12,89,31);
