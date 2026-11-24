const card = document.querySelector(".card");
const enterCounter = document.getElementById("enterCounter");
const leaveCounter = document.getElementById("leaveCounter");
const saveBtn = document.querySelector(".saveBtn");   

let enterCount = 0;
let leaveCount = 0;

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

card.addEventListener("mouseenter", () => {
  enterCount++;
  enterCounter.textContent = "IN :" + enterCount;
  card.style.backgroundColor = getRandomColor();
});

card.addEventListener("mouseleave", () => {
  leaveCount++;
  leaveCounter.textContent = "OUT :" + leaveCount;
  card.style.backgroundColor = getRandomColor();
});

saveBtn.addEventListener("click", () => {
  localStorage.setItem("enter", enterCount);
  localStorage.setItem("leave", leaveCount);

  alert("Value saved !");
});



//another html prog :

document.addEventListener("DOMContentLoaded",()=>{
    document.querySelector ("p").textContent = "hello";
});
 window.addEventListener("load",()=>{
    document.querySelector("p").textContent = "hello";
    document.querySelector("p").style.color = "red";
 })











 // access the element

var btn = document.querySelector("#loadPostsBtn");
var h1 = document.querySelector("h1");
var index = -1;
var id = null;

btn.addEventListener('click', () => {

    // fetch api..
    fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => {

        // task -> array (arr) -> data store -> one by one -> text print -> setInterval(infinite call)
        // -> clearInterval(id) -> array == 29
        var arr = data.products;

        id = setInterval(() => {
            ++index;

            console.log(arr[index]);
            h1.textContent = arr[index].discountPercentage;

            if(index == 29) {
                clearInterval(id);
            }

        }, 3000);

    });

});




// access the element

var btn = document.querySelector("#loadPostsBtn");
var h1 = document.querySelector("h1");
var index = -1;
var id = null;

btn.addEventListener('click', () => {

    // fetch api...
    fetch("https://dummyjson.com/products")
        .then((response) => response.json())
        .then((data) => {

            // task -> array (arr) -> data store -> one by one index print -> 5s -> ,  setInterval(infinite call) -> clearInterval(id) -> array == 29
            var arr = data.products;

            id = setInterval(() => {
                ++index;

                var red = Math.floor(Math.random() * 256);
                var green = Math.floor(Math.random() * 256);
                var blue = Math.floor(Math.random() * 256);

                console.log(arr[index]);
                h1.textContent = arr[index].discountPercentage;
                h1.style.color = `rgb(${red}, ${green}, ${blue})`;

                if (index == 29) {
                    clearInterval(id);
                }

            }, 3000);

            //console

        });

});
