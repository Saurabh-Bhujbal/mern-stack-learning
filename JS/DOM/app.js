
//attribute manipulation 

let imginfo=document.querySelector('img');
console.log(imginfo);
console.log("old id of img tag="+imginfo.getAttribute('id'));
imginfo.setAttribute('id','firstimg');
console.log("changed id of img tag="+imginfo.getAttribute('id'));



//style manupilating
console.dir(imginfo);// to view object properties
console.log(imginfo.style);
let heading=document.querySelector('h1');
heading.style.color="red";
heading.style.backgroundColor="green";

let links=document.querySelectorAll(".box a");
console.log(links);
for(i=0;i<links.length;i++){
        links[i].style.color="green";
}

console.log(imginfo.classList);

console.log(heading.classList);
heading.classList.add(".green");


//nevigation
console.log("Navigation");
let list=document.querySelector('li');
console.log(list.parentElement);
let div=document.querySelector(".box");
console.log(div.children);




