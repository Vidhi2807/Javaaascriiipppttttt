const colorDisplay = document.querySelector('#colorDisplay');
const messageDisplay = document.querySelector('#message');
const currentStreakDisplay = document.querySelector('#currentStreak');
const bestStreakDisplay = document.querySelector('#bestStreak');

const colorBoxes = document.querySelectorAll('.color-box');
console.log(colorBoxes);
const newRoundBtn = document.querySelector('#newRoundBtn');

const easyBtn = document.querySelector('#easyBtn');
const hardBtn = document.querySelector('#hardBtn');
const resetStreakBtn = document.querySelector('#resetStreakBtn');


//varaiables...

var currentStreak = 0;
var bestStreak = 0;
var pickCorrectColor = 0;
var color=[];
var num=6;

// whenever we load the website or refresh it then this webload funnction will be called....
function webLoad() {
    onload();
    colorGenerate();
    setGame();
    displayContent();
}

// whenever the website will load then first it will load the entire data....
function onload() {
    var temp = localStorage.getItem('highBestStreak');
    if (temp != null) {
        bestStreak = parseInt(temp);  // --> here the localstorage contains the data so it will return the data not null.
    }
    else {
        bestStreak = 0;  // --> if there is no data in localstorage so it will return null instead of number.
    }
}


function displayContent() {
    currentStreakDisplay.textContent = currentStreak;
    bestStreakDisplay.textContent = bestStreak;
}


function colorGenerate() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    console.log(`rgb(${red}, ${green}, ${blue}`);
    return rgb(`${red}, ${green}, ${blue}`);  
}

function generateColor(num){   
    const arr = [];
    for(var i=0; i<num; i++){
        arr.push(colorGenerate());
    }
    return arr;
}

function pickGenerator(){
    const index= Math.floor(Math.random()*color.length);
    console.log(index);
    return color[index];
}

function setGame() { 
    color = generateColor(num);
    pickCorrectColor = pickGenerator();
    console.log(color);
    console.log(pickCorrectColor);
    colorDisplay.textContent = pickCorrectColor;
    for(var i = 0; i < num; i++){
    colorBoxes[i].style.backgroundColor = color[i];
    }
}


// if we have selected multiple elements in one queryseletorAll and then also we have to keep track then........
function winGuess( event) {
    var tempBox = event.target;
    if(pickCorrectColor === tempBox.style.backgroundColor) 
    {
        messageDisplay.textContent = "You Won";
    }

    else {
        messageDisplay.textContent = "Try Again";
    }

}


colorBoxes.forEach((box) => {
    console.log(box);
    box.addEventListener('click', winGuess); 
});


webLoad();