async function msg(){
    //throw "intrupt!!!!";
    return "All ok";
}
msg().then((reslt)=>{
    console.log("there is no Error!!",reslt)
})
.catch((err)=>{
    console.log("page not found!!",err)
})