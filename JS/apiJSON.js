let data=
'{"fact":"In just seven years, a single pair of cats and their offspring could produce a staggering total of 420,000 kittens.","length":115}';
let validdata=JSON.parse(data);
console.log(validdata.fact);



//let convert javascript object to JSON 
let student={
    name:"harry",
    rollno:23,
    class:12
}
console.log(JSON.stringify(student));

//first api call using fetch
let url="https://catfact.ninja/fact";
fetch(url)
.then((response)=>{
    console.log(response);//this is response object and it is not in JSON format
    response.json().then((data)=>{
        console.log(data);//this is the data in JSON format
    })
    
})

console.log("----------------------------------------------------------------------");
let url2="https://catfact.ninja/fact";
async function getdata(){
    try{
         let res=await fetch(url);
    let data=await res.json();
    console.log(data);
    }
    catch(error){
        console.log(error);
    }
   
}