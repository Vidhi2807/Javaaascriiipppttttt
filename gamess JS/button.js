const message = document.querySelector("#p");
const button = document.querySelector("#changeTBtn");
button.addEventListener("click", () => {
  message.textContent = " text changed!";
});