let show=function(a){
    console.log(`Value of a is ${a}`);
}
show(39);
const sum=function(a,b){
    console.log(`addition of ${a} & ${b} is ${a+b}`);
}
sum(23,9);



//HIGHER ORDER FUNCTION =>
function display(func,n){
    for(let i=0;i<n;i++){
        func();
    }
}
let greet=function(){
    console.log("Hello")
}
display(greet,19);



//returning whole function as output
function evenoddtest(req){
    if(req=="odd"){
        let odd=function(n){
            console.log(!(n%2==0));
        }
        return odd;
    }
    if(req=="even"){
        let even=function(n){
            console.log((n%2==0));
        }
        return even;
    } 
}
