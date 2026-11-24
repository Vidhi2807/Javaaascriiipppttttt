const redBtn = document.getElementById("redBtn");
const greenBtn = document.getElementById("greenBtn");
const blueBtn = document.getElementById("blueBtn");

redBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "pink";
});

greenBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "lightblue";
});

blueBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "lightgreen";
});