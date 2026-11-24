var btn = document.querySelector("#loadBtn");
var pId = document.querySelector("#pId");
var pTag = document.querySelector("#pTag");
var pHeight = document.querySelector("#pHeight");
var card = document.querySelector("#card");

var index = -1;
var id = null;

btn.addEventListener("click", () => {

    fetch("https://dummyjson.com/products")
        .then(res => res.json())
        .then(data => {

            var arr = data.products;

            clearInterval(id);     
            index = -1;           

            id = setInterval(() => {
                index++;

                if (index > arr.length - 1) {
                    clearInterval(id);
                    return;
                }

                let item = arr[index];

                let r = Math.floor(Math.random() * 256);
                let g = Math.floor(Math.random() * 256);
                let b = Math.floor(Math.random() * 256);

                card.style.backgroundColor = `rgb(${r},${g},${b})`;

                pId.textContent = "ID: " + item.id;

                if (item.tags && item.tags.length > 0) {
                    pTag.textContent = "Tag: " + (item.tags[1] || item.tags[0]);
                } else {
                    pTag.textContent = "Tag: (none)";
                }

                if (item.dimensions) {
                    pHeight.textContent = "Height: " + item.dimensions.height;
                } else {
                    pHeight.textContent = "Height: (not available)";
                }

            }, 2000); 
        });

});
