const picture = document.getElementById("picture");
const img1Btn = document.getElementById("img1Btn");
const img2Btn = document.getElementById("img2Btn");

img1Btn.addEventListener("click", () => {
  picture.src = "https://tse3.mm.bing.net/th/id/OIP.vKgZE9addf0x-VwyW2F59QHaJ_?pid=Api&P=0&h=180";
});

img2Btn.addEventListener("click", () => {
  picture.src = "https://tse1.mm.bing.net/th/id/OIP.NFowNyWcpEbc5kmDSTg6eAHaF7?pid=Api&P=0&h=180";
});