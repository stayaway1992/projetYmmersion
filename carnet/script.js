let add = document.querySelector(".add")
let del = document.querySelector(".delete")
let submit = document.querySelector("#submit")
let form = document.querySelector("form")


function store() {
    var firstname = document.getElementById("firstname").value;
    var name = document.getElementById("name").value;
    var gender = document.getElementById("gender").value;
    var phone = document.getElementById("phone").value;
    addNewContact(firstname, name, gender, phone);
}

function addNewContact(firstname, name, gender, phone) {
    var contact = JSON.parse(localStorage.getItem("contact")) || [];
    contact.push({ firstname: firstname, name: name, gender: gender, phone: phone });
    localStorage.setItem("contact", JSON.stringify(contact));
}


function clear() {
    localStorage.clear()
    var element = document.getElementById("retrieve");
    element.innerHTML = "";
}

function toggle() {
    form.classList.toggle("hide")
}


function retrieveRecords() {
    var element = document.getElementById("retrieve");
    var contact = window.localStorage.getItem('contact');
    contact = JSON.parse(contact) || 0;
    for (let i = 0; i < contact.length; i++) {
        var paragraph = document.createElement("li");
        paragraph.classList.add("list");
        var infor = document.createTextNode(contact[i].name + " " + contact[i].firstname + " " + contact[i].gender + " " + contact[i].phone);
        paragraph.appendChild(infor);
        element.appendChild(paragraph);
        var edit = document.createElement("button");
        var edittext = document.createTextNode("Edit");
        edit.appendChild(edittext);
        paragraph.appendChild(edit);
        edit.addEventListener("click", function () {
            document.getElementById("firstname").value = contact[i].firstname;
            document.getElementById("name").value = contact[i].name;
            document.getElementById("gender").value = contact[i].gender;
            document.getElementById("phone").value = contact[i].phone;
            contact.splice(i, 1);
            localStorage.setItem("contact", JSON.stringify(contact));
        });

    }
}

retrieveRecords();


del.addEventListener("click", clear);
submit.addEventListener("click", store);
add.addEventListener("click", toggle);