let clgin=document.querySelector('input');
let btn=document.querySelector('button');
let clglist=document.querySelector("#clglist")
btn.addEventListener("click",async ()=>{
        let country=clgin.value;
         console.log(country);
          let res=await getdata(country);
          
          console.log(res.data);
          await show(res.data);

})
async function show(data){
    for(clg of data){
        let list=document.createElement("li");
        clglist.appendChild(list);
        list.innerText=clg.name;
    }
}
//we can also use for each 
// async function show(data){
//     data.forEach(clg => {
//         console.log(clg.name);
//         let list=document.createElement("li");
//         clglist.appendChild(list);
//         list.innerText=clg.name;
//     });
//     }
async function getdata(country){
      let url="http://universities.hipolabs.com/search?name=";
      let clgdata=await axios.get(url+country);
      return clgdata;
    }