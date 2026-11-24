const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const ageInput = document.getElementById("ageInput");
const addressInput = document.getElementById("addressInput");
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", () => {
    const nameValue = nameInput.value; // Use .trim() to handle whitespace
    const emailValue = emailInput.value;
    const ageValue = ageInput.value;
    const addressValue = addressInput.value;

    nameInput.style.backgroundColor = "";
    emailInput.style.backgroundColor = "";
    ageInput.style.backgroundColor = "";
    addressInput.style.backgroundColor = "";
    
    let isEmpty = false;

    if (nameValue === "") {
        nameInput.style.backgroundColor = "red";
        isEmpty = true;
    }
    if (emailValue === "") {
        emailInput.style.backgroundColor = "red";
        isEmpty = true;
    }
    if (ageValue === "") {
        ageInput.style.backgroundColor = "red";
        isEmpty = true;
    }
    if (addressValue === "") {
        addressInput.style.backgroundColor = "red";
        isEmpty = true;
    }

    if (!isEmpty) {
        console.log("Name:", nameValue);
        console.log("Email:", emailValue);
        console.log("Age:", ageValue);
        console.log("Address:", addressValue);

        submitBtn.style.backgroundColor = "green";
    } else {
        submitBtn.style.backgroundColor = ""; 
        console.log("Please fill in all the highlighted fields.");
    }
});



//  26/11/25  


var btn = document.querySelector("#btn");
console.log(btn);

btn.addEventListener("click", () => {
    var name1 = document.querySelector("#name1");
    console.log(name1.value);
    name1.value = "";
});

btn.addEventListener("click", function() {
    var name1 = document.querySelector("#name1");
    console.log(name1.value);
    name1.value = "";
});

btn.addEventListener("dblclick", namePrint);
btn.addEventListener("keypress", (event) => {
    if(event.key == "Enter"){
        namePrint();
    }

    var name1 = document.querySelector("#name1");
});

name1.addEventListener("input", (event) => {
    console.log(event.target.value);
});

function namePrint(){
    var name1 = document.querySelector("#name1");
    console.log(name1.value);
    name1.value = "";
}




var email= "abc@gmail.dpm";
email = email.split("");

var txt = "@gmail.com";
txt = txt.split("");   // split("") --> individual character index assign

// console.log(txt);
var j = 9;
function emailCheck(){
    for(let i = email.length - 1; 
        i >= ((email.length - 1) - (txt.length - 1)); 
        --i){

        if(email[i] == txt[j]){
            console.log(email[i] + " both are equal " + txt[j]);
            --j;
        }
        else{
            j = 9;
            alert("the given email doesn't follow the following format");
            return;
        }
    }
}

emailCheck();

var name1 = "Man@340$";

name1 = name1.split("");
// console.log(typeof(name1));

function nameCheck(){
    name1.forEach(element => {
        if(
            element != '!' && 
            element != '@' && 
            element != '+' && 
            element != '*' && 
            element != '-' && 
            element != '$'
        ){
            console.log("the character is " + element);
        }
        else{
            // alert("the following name contains special character");
            // break;
            // continue;
            console.log("the particular character is a special character " + element);
        }
    });
    return;
}

nameCheck();