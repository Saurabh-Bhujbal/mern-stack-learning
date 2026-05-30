setTimeout(()=>{
    console.log("HELLO THIS IS TIMEOUT FUNCTION!!");
},3000);//3


console.log("here is my info=");   //1

let show=()=>{
    console.log("and i am studying in BTECH");//4
}
setTimeout(show , 5000);
console.log("My name is saurabh");//2