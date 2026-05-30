let getbtn=document.getElementById("get_fact");
let para=document.getElementById("para");   
getbtn.addEventListener("click",async ()=>{
    try{
        let url="https://catfact.ninja/fact"; 
        let res=await axios.get(url);
        let fact=res.data.fact;
        para.innerText=fact;
    }
    catch(error){
       console.log(error)
    }
})
