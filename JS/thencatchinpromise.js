function saveDB(){
    return new Promise((resolve,reject)=>{
        let internet=Math.floor(Math.random()*10);
        // console.log(internet);
        if(internet>4){
            resolve();
        }
        else{
            reject();
        }
    })
}
// let request=saveDB()
// request.then(()=>{
//     console.log("data saved successfully!!");
// })
// .catch(()=>{
//     console.log("Failed!!");
// })
saveDB()
.then(()=>{
    console.log("data saved successfully!!");
})
.catch(()=>{
    console.log("Failed!!");
})