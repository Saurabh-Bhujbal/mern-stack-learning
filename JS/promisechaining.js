function saveDB(){
    return new Promise((resolve,reject)=>{
        let internet=Math.floor(Math.random()*10);
        //console.log(internet);
        if(internet>4){
            resolve("ok Done");
        }else{
            reject("try again");
        }
    })
}
saveDB()
// .then(()=>{
//     console.log("Data1 :saved succefully!!");  
//     saveDB().then(()=>{                          //it is looking like nested callbacks which is not readable
//         console.log("Data2 :saved successfully!!");
//     })
// })
// .catch(()=>{
//     console.log("Faile!!");
// })
.then((result)=>{
    console.log("Data1 :saved succefully!!");
    console.log(result);
    return saveDB()                                //return saveDB to this then on that then below then is called 
}).then((result)=>{
        console.log("Data2 :saved successfully!!");
         console.log(result);
})
.catch((error)=>{
    console.log("Faile!!");
     console.log(error);
})