var para = document.querySelector('p');
var txt = document.querySelector('.txt');
var btn = document.querySelector('.btn');
var dataBox = document.querySelector('.dataContain'); // FIXED

function loadApiKey() {

    fetch(`https://api.mfapi.in/mf/search?q=${txt.value}`)
        .then((response) => response.json())
        .then((apiData) => { 

            console.log(apiData);

            dataBox.innerHTML = ""; 
            for (let i = 0; i < 15; ++i) {

                var p1 = document.createElement('p');
                p1.textContent = apiData[i].schemeCode;
                p1.style.color = "green";

                var p2 = document.createElement('p');
                p2.textContent = apiData[i].schemeName;
                p2.style.color = "brown";

                var div = document.createElement('div');
                div.appendChild(p1);
                div.appendChild(p2);

                dataBox.appendChild(div); 
            }
        });
}

btn.addEventListener("click", loadApiKey);
