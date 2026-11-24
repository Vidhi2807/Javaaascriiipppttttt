const message = document.querySelector("#p");
const button = document.querySelector("#changeTBtn");

const originalText = message.textContent;

button.addEventListener("click", () => {
    if (message.textContent === originalText) {
    message.textContent = "Text changed!";
} else {
    message.textContent = originalText;
}

});




  