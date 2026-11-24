const p = document.querySelector("#p");
const button = document.querySelector("#changeStyle");

let originalColor = p.style.color;
let originalfont = p.style.fontSize;
let originalBackground = p.style.backgroundColor;
let isChanged = false;
button.addEventListener("click", () => {

    if (!isChanged) {
        p.style.color = "purple";
        p.style.fontSize = "30px"
        p.style.backgroundColor = "pink";
        isChanged = true;
        button.textContent = "Undo";
    }
    else {
        p.style.color = originalColor;
        p.style.fontSize = originalfont;

        p.style.backgroundColor = originalBackground;
        isChanged = false;
        button.textContent = "Change Style";
    }
})