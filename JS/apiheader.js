async function getjoke(){
let url="https://icanhazdadjoke.com/";
let config={
    headers:{Accept:"application/json"}
};
let res=await axios.get(url,config);
console.log(res.data);
}
getjoke();