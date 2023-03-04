
let input_text = document.querySelector("#input-item");

input_text.addEventListener("keypress", function (listen) {
    if (listen.key === "Enter") {
        if (listen.target.value === "") {
            alert("Veuillez taper le produit à ajouter à la liste")
        } else {
            let ol = document.querySelector("ol");
            let newItem = document.createElement("li");
            newItem.classList.add("item");
            newItem.innerText = listen.target.value;
            ol.appendChild(newItem);
            let newBtn = document.createElement("button");
            newBtn.classList.add("button-remove");
            newBtn.innerText = "retirer";
            newItem.appendChild(newBtn);
            let newBtn2 = document.createElement("button");
            newBtn2.classList.add("button-remove", "button-edit");
            newBtn2.innerText = "éditer";
            newItem.appendChild(newBtn2);
            listen.target.value = "";
        }
    }
})

function addNewButtonTo(there) {
    let newBtn2 = document.createElement("button");
    newBtn2.classList.add("button-remove", "button-edit");
    newBtn2.innerText = "éditer";
    newItem.appendChild(newBtn2);
}


let btn = document.querySelector("button");
btn.addEventListener("click", function (listen) {
    if (input_text.value === "") {
        alert("Veuillez taper le produit à ajouter à la liste")
    } else {
        let ol = document.querySelector("ol");
        let newItem = document.createElement("li");
        newItem.classList.add("item")
        newItem.innerText = input_text.value;
        ol.appendChild(newItem);
        let newBtn = document.createElement("button");
        newBtn.classList.add("button-remove");
        newBtn.innerText = "retirer";
        newItem.appendChild(newBtn);
        let newBtn2 = document.createElement("button");
        newBtn2.classList.add("button-remove", "button-edit");
        newBtn2.innerText = "éditer";
        newItem.appendChild(newBtn2);
        input_text.value = "";
    }
})


// Changer le style de LI sur MouseOver

let list = document.querySelector('ol');

list.addEventListener('click', function (ev) {
    //if (ev.target.tagName === 'BUTTON')
    if (ev.target.className === 'button-remove') {
        console.log(ev.target)
        ev.target.parentNode.remove();
    }
}, false);

list.addEventListener('click', function (ev) {
    //if (ev.target.tagName === 'BUTTON')
    if (ev.target.className == 'button-remove button-edit') {
        console.log(ev.target)
        ev.target.parentNode.firstChild.textContent = prompt("Veuillez taper le nom produit");
    }
}, false);

list.addEventListener("mouseover", function (event) {
    if (event.target.className === "item") {
        event.target.classList.add("item-highlight")
        console.log(event.target.className)
    }
})

list.addEventListener('click', function (event) {
    // if (event.target.tagName === "LI") {
        console.log(event.target)
        if (event.target.className === 'item item-highlight') {
        event.target.classList.toggle("checked")
        
    }
})

list.addEventListener("mouseout", function (event) {
    if (event.target.tagName === "LI") {
        event.target.classList.remove("item-highlight")
    }
})