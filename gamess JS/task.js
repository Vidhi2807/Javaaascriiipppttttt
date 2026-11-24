
var btn = document.querySelector("#loadPostsBtn");
var h1 = document.querySelector("h1");
var img = document.querySelector("img");
var index = -1;
var id = null;

btn.addEventListener("click", () => {
    setInterval(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => response.json())
            .then(data => {
                img.setAttribute("src", data.message);
            });
    }, 1000);
});

// fetch api...











function validate() {
    let value = document.getElementById("myInput").value;
    let output = document.getElementById("output");

    try {
        if (value.length > 1) {
            throw "Length should not be greater than 1!";
        }

        if (value.length === 0) {
            throw "Input cannot be empty!";
        }

        let pattern = /^[A-Za-z0-9]$/;

        if (!pattern.test(value)) {
            throw "Only A-Z, a-z, and 0-9 are allowed!";
        }

        output.innerText = "Valid Input: " + value;
    }
    catch (err) {
        output.innerText = "Error: " + err;
    }
}















































