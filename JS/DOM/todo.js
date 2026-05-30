let intask=document.querySelector("#intask");
let btn=document.querySelector("#btn");
let show=document.querySelector("#show");
let del=document.querySelector('#delete');
let tasklist=document.querySelector("#tasklist");
let delin=document.querySelector("#delint");

let taskarr=[];
btn.addEventListener("click",function(){
    let task=intask.value;
    intask.value="";
    taskarr.push(task);
    displaylist();
    console.log(taskarr);
})
show.addEventListener("click",displaylist);
function displaylist(){
    tasklist.innerHTML=" ";
    for(i=0;i<taskarr.length;i++){
    let newtask=document.createElement("li");
    newtask.innerText= (i+1)+" "+taskarr[i] 
    tasklist.appendChild(newtask);
    tasklist.style.listStyleType = "none";
    }
}
del.addEventListener("click",function(){
   let ind=delin.value;
     delin.value='';
    taskarr.splice((ind-1),1);
    console.log(`element at ${ind} deleted`);
    console.log(taskarr);
    displaylist();
})

