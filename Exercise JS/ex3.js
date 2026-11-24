const infoPara = document.getElementById("infoPara");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {
  if (infoPara.style.display === "none") {
    infoPara.style.display = "block";
    toggleBtn.textContent = "Hide";
  } else {
    infoPara.style.display = "none";
    toggleBtn.textContent = "Show";
  }
});