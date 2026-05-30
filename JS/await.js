// function getnum(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let num=Math.floor(Math.random()*10);
//             console.log(num);
//             resolve();
//     },1000)
// })
// }
// async function demo(){
//    await getnum();
//    await getnum();
//     await getnum();
//      await getnum();
//      getnum();
// }


//NOTE:ABOVE CODE IS BASIC EXAMPLE OF AWAIT AND IT IS CORRECT.
let h1=document.querySelector("h1");
function changeclr(color,delay,){
    return new Promise((resolved, reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*10);
            if(num<6){
                reject("value is less");
            }
        h1.style.color=color;
        resolved();
    },delay);
    })
    
}
async function demo() {
    try{
    await changeclr("red",1000);
    await changeclr("green",1000);
    await changeclr("orange",1000);
    await changeclr("blue",1000);
    await changeclr("yellow",1000);
    }
    catch(err){
        console.log("promise rejected=",err);
    }
    

    console.log("code from here is NOT depends on Promises");
    let a=5;
    let b=a+4;
    console.log(b);

}
