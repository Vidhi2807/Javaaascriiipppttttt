
const countText = document.getElementById("countText");
const increaseBtn = document.getElementById("increaseBtn");

let count = 0;

increaseBtn.addEventListener("click", () => {
  count = count + 1;
  countText.textContent = "Count: " + count;
});
