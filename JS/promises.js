function saveDB(){
    return new Promise((resolved,reject)=>{
        let internet=Math.floor(Math.random()*10);
        console.log(internet);
        if(internet>4){
            resolved("success: data saved!");
        }
        else{
            reject("fail:Unable to connect!");
        }
    })
}
//saveDB("hello");