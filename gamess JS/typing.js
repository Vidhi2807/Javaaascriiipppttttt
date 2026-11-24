// DOM Elements
const textDisplay = document.querySelector('#textDisplay');
const typingArea = document.querySelector('#typingArea');
const timerDisplay = document.querySelector('#timer');
const wpmDisplay = document.querySelector('#wpm');
const accuracyDisplay = document.querySelector('#accuracy');
const bestWPMDisplay = document.querySelector('#bestWPM');
const startBtn = document.querySelector('#startBtn');
const resetBtn = document.querySelector('#resetBtn');

// Test texts 

const testTexts = [
    "The quick brown fox jumps over the lazy dog. Practice makes perfect when learning to type faster.",
    "Technology has revolutionized the way we communicate and work in the modern digital era.",
    "Typing speed is an essential skill for anyone working with computers in today's workplace."
];

// Game state  

let currentText = '';
let timeLeft = 60;
let timerInterval = null;
let startTime = null;
let isTestActive = false;
let bestWPM = 0;
var wpm = 0;

function webLoad() {
    onLoad();
    displayContent();
}

function onLoad() {
    var temp = sessionStorage.getItem('getHighwpm');
    if (temp != null) {
        bestWPM = parseInt(temp);
    }
    else {
        bestWPM = 0;
    }
}

function displayContent() {
    timerDisplay.textContent = timeLeft;
    bestWPMDisplay.textContent = bestWPM;
}

webLoad();

function endGame() {
    clearInterval(timerInterval);
    timeLeft = 60;
    startBtn.disabled = false;
    if (wpm > bestWPM) {
        bestWPM = wpm
        sessionStorage.setItem('getHighWpm', bestWPM);
        alert(`scored high score than the previous one`);
    }
    else {
        alert(`scored is : ${wpm}`);
    }
    wpm = 0;
    wpmDisplay.textContent = wpm;
    typingArea.disabled = true;
    typingArea.value = "";
    displayContent();
}

function startGame() {
    timeLeft = 60;
    startBtn.disabled = true;

    currentText = testTexts[Math.floor(Math.random() * testTexts.length)];
    textDisplay.textContent = currentText;


    typingArea.disabled = false;
    typingArea.value = "";
    typingArea.setAttribute('placeholder', 'Now the input box is enabled, use it to write something....');


    timerInterval = setInterval(function () {
        timeLeft--;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
        }
        displayContent();
    }, 1000)
}


function updateStatus() {
    var typed = typingArea.value;
    const minute = Math.floor(Date.now() - startTime) / 1000 / 60;
    console.log(minute);
    const word = typed.trim().split(/\s+/).filter(w => w.length > 0);
    console.log(word);
    wpm = (minute > 0) ? Math.round(word.length / minute) : 0;
    wpmDisplay.textContent = wpm

    var currentScore = 0;
    for (var i = 0; i < currentText.length; i++) {
        if (currentText[i] === typed[i]) {
            currentScore++;
        }
    }
    const accuracy = (typed.length > 0) ? Math.floor(currentScore / typed.length * 100) : 0;
    accuracyDisplay.textContent = accuracy;

}


function highlight(){
    var typed = typingArea.value;
    var hightext = '';
    for(let i = 0 ; i < currentText.length; i ++){
        if ( i <= typed.length){
            if (currentText[i]===typed[i]){
                hightext += `<span class ="correct">${currentText[i]}</span>`;
            }
             else {
                hightext += `<span class ="incorrect">${currentText[i]}</span>`;
            }
        }
        else{
            hightext += currentText[i];
        }
    }
            textDisplay.innerHTML = hightext;

}

function typeControl() {
    if (startTime === null) {
        startTime = Date.now();
    }
    console.log(startTime);
    updateStatus();
    highlight();
}
startBtn.addEventListener('click', startGame);

typingArea.addEventListener('input', typeControl);