function savetoDB(data,Success,failure){
    let internet=Math.floor(Math.random()*10);
    console.log(internet);
    if(internet>4){
       Success();
    }
    else{
        failure();
    }
}
savetoDB("hello everyone",()=>{ 
    console.log("Success:data saved !!");
    savetoDB("hello everyone",()=>{
        console.log("Success2:data saved !!");
        savetoDB("hello everyone",()=>{
            console.log("success3:data saved!!");
        },()=>{
            console.log("Fail3:data not saved");
        }
    );
    },()=>{
        console.log("Fail2:data not saved");
    })
    },
    ()=>{console.log("Fail:data not saved");

    });