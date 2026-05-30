
let form=document.querySelector("form");
// form.addEventListener("submit",function(event){
//     let user=document.querySelector("#user");
//     let pass=document.querySelector("#pass");
//     event.preventDefault();
//     alert(`${user.value} your password is ${pass.value}`);
//     console.log(user.value);
//     console.log(pass.value);
// })
form.addEventListener("submit",function(event){
    event.preventDefault();
    console.dir(form);
    console.log(form.elements);
    let user=this.elements[0];
    let pass=this.elements[1];

    alert(`${user.value} your password is ${pass.value}`);
   console.log(user.value);
    console.log(pass.value);
})