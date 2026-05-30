let btn= document.querySelector("button");
let img=document.querySelector("img");
btn.addEventListener("click",getimg);
async function getimg(){
    try{
    let url="https://dog.ceo/api/breeds/image/random"; 
    let res=await axios.get(url);
    let link=res.data.message;
    console.log(link);
    img.setAttribute("src",link);
    
    }
    catch(error){
        console.log(error);
    }
    }