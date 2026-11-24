// var para = document.querySelector('p');
// var txt = document.querySelector('.txt');
// var btn = document.querySelector('.btn');

// function checkChar() {
//     try {
//         if (txt.value.length > 1) throw "Greater than 1 character is not allowed";

//         if (txt.value >= "A" && txt.value <= "Z") throw "Capital character is not allowed";

//         if (txt.value >= "0" && txt.value <= "9") throw "Number is not allowed";

//         console.log(txt.value);
//         para.textContent = txt.value;
//         para.style.color = "green";

//     } catch (error) {
//         console.log(error);
//         para.textContent = error;
//         para.style.color = "red";
//     }
//     finally {
//         txt.value = "";
//     }
// }

// btn.addEventListener("click", checkChar);



//  key based API :

var para = document.querySelector('p');
var txt = document.querySelector('.txt');
var btn = document.querySelector('.btn');

function loadApiKey() {
    fetch(`https://api.weatherapi.com/v1/current.json?key=140b1cb9397c4112b201291250912&q=${txt.value}&aqi=yes`)
        .then((response) => response.json())
        .then((data1) => {
            console.log(data1.location.lat);
        });
}

btn.addEventListener("click", loadApiKey);

// //////


var para = document.querySelector('p');
var txt = document.querySelector('.txt');
var btn = document.querySelector('.btn');

function loadApiKey() {
    fetch(`https://api.weatherapi.com/v1/current.json?key=140b1cb9397c4112b201291250912&q=${txt.value}&aqi=yes`)
        .then((response) => response.json())
        .then((data1) => {
            console.log(data1);
        });
}

btn.addEventListener("click", loadApiKey);




























