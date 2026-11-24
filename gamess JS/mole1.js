const scoreDisplay = document.querySelector('#score');
const timeLeftDisplay = document.querySelector('#timeLeft');
const maxScoreDisplay = document.querySelector('#maxScore');
const startBtn = document.querySelector('#startBtn')
const holes = document.querySelectorAll('.hole');
console.log(holes);
const moles = document.querySelectorAll('.mole');

// Required variable

var score = 0;
var time = 30;
var bestScore = 0;
var playGame = false;
var gameId = null;



// Step-2 1. phase load the entire data


function onLoad() {
    var temp = localStorage.getItem('highScoreGame');  // used to change the best score

    if (temp != null) {
        bestScore = temp;
    }
    else {
        bestScore = 0;
    }
};

// Call on every game Start 

function webLoad() {
    onLoad();
    displayContent();
}


// Step-2 2. Reflecting the actual value in the required html element using textContent 

function displayContent() {
    scoreDisplay.textContent = score;
    timeLeftDisplay.textContent = time;
    maxScoreDisplay.textContent = bestScore;
}

//Calling Webload function here

webLoad();

// Random time generator implementation 

function randomTimeGenerator(min, max) {
    return Math.floor(Math.random() * (max - min) + max);
}
//randomIndex which will return the distinct element 

function randomIndex() {
    var index = Math.floor(Math.random() * holes.length);
    return holes[index];
}
// pop game immplemenntation for image appear and disappear purpose 

function popImageGame() {
    var randomTime = randomTimeGenerator(500, 1500);
    var hole = randomIndex();
    var mole = hole.querySelector('.mole');
    if (playGame) {
        mole.classList.add('up');
        setTimeout(function () {
            mole.classList.remove('up');
            popImageGame();

        }, randomTime);
    }
}
// endGame implementation 

function endGame() {
    clearInterval(gameId);
    playGame = false;
    if (score > bestScore) {
        bestScore = score;
        localStorage.setItem('highScore', bestScore);
        alert(`Your score is higher than  the previous one: ${score}`);
    }
    else {
        alert(`Your score is : ${score}`);
    }
    score = 0;
    displayContent();
    startBtn.disabled = false;
}
// ACTUAL IMPLEMENTATION OF START GAME FUNCTION 

function startGame() {
    score = 0;
    time = 30;
    startBtn.disabled = true;
    playGame = true;
    popImageGame();


    //disabled -> true which means button is disabled......
    gameId = setInterval(function () {
        time--;
        if (time === 0) {

            // This method is used only to stop the setInterval at some condition.
            endGame();
        }
        displayContent();
    }, 1000)
}

function bonk(event) {
    if (playGame == false) return;
    if (event.target.classList.contains('up')) {
        score++;
        event.target.classList.remove('up');
        event.target.classList.add('bonked');
    }
    setTimeout(function () {
        event.target.classList.remove('bonked');
    }, 300);
    displayContent();
}

// ADD EVENT LISTENER PART:

startBtn.addEventListener('click', startGame);
// This is just a normal loop use to apply the add event listener in each mole class element
moles.forEach((box) => {
    box.addEventListener('click', bonk)
})