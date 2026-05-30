let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";
});

ul.addEventListener("click", function (event) {   //we can also apply this eventlistner on li but when new list element is created then eventlistener can't  
    if (event.target.nodeName == "BUTTON") {       //work with that button inside list so to perform this we crete event listner on parent element so it act like 
        let listItem = event.target.parentElement;//event bubbling and eventlistner work properly is called event delegation
        listItem.remove();
        console.log("deleted");
    }
});