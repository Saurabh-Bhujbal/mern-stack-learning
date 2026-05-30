let arr=[10,20,3,4];
let newarr=arr.map(function(ele){
           return ele*ele;
}); 
console.log( newarr);



let result=(ele)=>{
       return ele*2;
};
let double=arr.map(result); 
console.log( double);


let emp=[{
    name:"",
    salary:120
    },
    {   
     name:"",
    salary:130},
    {
     name:"",
    salary:12
    }];
let sal=emp.map((el)=>{
      console.log((el.salary)*10);
}
)