const imageSources = [
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdp6RL_J5VVrIdh0QNAQ_wN82zmeH7CmAWfw&s" ,
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj_GTgaWOwVsVoTBDA5lkISg8j5qQqZwt3jg&s",
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbp_1DbrAbu5chCDoU_yOG0Xf8VDubCsE7lw&s" ,
   "https://i.pinimg.com/736x/9f/f2/38/9ff23808ccc24dc265bf1f39d30ef264.jpg"
]

var currentImageIndex = 0;

const imageElement = document.getElementById('myImage');
const buttonElement = document.getElementById('changeImageButton');

imageElement.src = imageSources[currentImageIndex];

buttonElement.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % imageSources.length;
    imageElement.setAttribute('src', imageSources[currentImageIndex]);
});