
let ar=[4,6,11,13];
console.log(ar);
console.log(...ar);

let result =Math.max(...ar);
console.log(result);  


let min=Math.min(...ar);
console.log(min);

let demoar=[4,8,1,39,2,90];
let newdemoar=[...demoar];
console.log(demoar);
console.log(newdemoar);
console.log(..."Saurabh");
let charar=[..."hello"];
console.log(charar);

let finalar=[...ar,...demoar];
console.log(finalar);
let final2=[...ar,...charar];
console.log(final2);



//spread with  object literals
let student={
    name:"rahul",
    email:"rahul123@gmail.com"
} 
let stud2={...student,id:123};
console.log(stud2);

let obj={...demoar}   //convert array to object(key:values pairs)
console.log(obj);
 