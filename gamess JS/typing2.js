// DOM Elements
const textDisplay = document.querySelector('#textDisplay');
const typingArea = document.querySelector('#typingArea');
const timerDisplay = document.querySelector('#timer');
const wpmDisplay = document.querySelector('#wpm');
const accuracyDisplay = document.querySelector('#accuracy');
const bestWPMDisplay = document.querySelector('#bestWPM');
const startBtn = document.querySelector('#startBtn');
const resetBtn = document.querySelector('#resetBtn'); // NOTE: resetBtn is in DOM but unused in logic below

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

// NEW Global variables for accurate WPM/Accuracy across multiple texts
let totalCorrectChars = 0;
let totalTypedChars = 0;
let totalWordsTyped = 0;
let wordsInCurrentText = 0;
let totalTimeElapsed = 0;

function webLoad() {
    onLoad();
    displayContent();
}

function onLoad() {
    // Note: corrected sessionStorage key from 'getHighwpm' to 'getHighWpm' for consistency
    var temp = sessionStorage.getItem('getHighWpm');
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
    
    // Final WPM calculation based on total time used and total words typed
    totalTimeElapsed = (60 - timeLeft); // Time elapsed in seconds
    const totalMinutes = totalTimeElapsed / 60;
    
    // Check if the current text was completed right before the timer ended
    const typed = typingArea.value;
    const currentTextCompleted = (typed.length === currentText.length) && (typed === currentText.substring(0, typed.length));
    
    // Only count words from the final incomplete/completed text if it hasn't been counted yet
    if (!currentTextCompleted) {
        const finalWords = typed.trim().split(/\s+/).filter(w => w.length > 0).length;
        totalWordsTyped += finalWords;
    }


    wpm = (totalMinutes > 0) ? Math.round(totalWordsTyped / totalMinutes) : 0;
    
    
    startBtn.disabled = false;
    
    if (wpm > bestWPM) {
        bestWPM = wpm
        sessionStorage.setItem('getHighWpm', bestWPM);
        alert(`New High Score! Scored ${wpm} WPM.`);
    }
    else {
        alert(`Time's up! Final score is: ${wpm} WPM`);
    }

    // Reset all session tracking variables for the next game
    wpm = 0;
    totalCorrectChars = 0;
    totalTypedChars = 0;
    totalWordsTyped = 0;
    wordsInCurrentText = 0;
    totalTimeElapsed = 0;
    startTime = null;
    
    wpmDisplay.textContent = 0;
    accuracyDisplay.textContent = 0;
    typingArea.disabled = true;
    typingArea.value = "";
    typingArea.setAttribute('placeholder', 'Click "Start Test" to begin.');
    displayContent();
}

// NEW FUNCTION: Loads the next text for continuous testing
function loadNextText(typed) {
    // 1. Update overall statistics based on the text just completed
    
    // Calculate final stats for the completed text
    let correctCharsInText = 0;
    for (let i = 0; i < currentText.length; i++) {
        if (currentText[i] === typed[i]) {
            correctCharsInText++;
        }
    }
    
    // Update totals
    totalWordsTyped += wordsInCurrentText;
    totalCorrectChars += correctCharsInText;
    totalTypedChars += currentText.length;

    // 2. Load the next text
    let newText = currentText;
    while (newText === currentText && testTexts.length > 1) {
        newText = testTexts[Math.floor(Math.random() * testTexts.length)];
    }
    currentText = newText;
    textDisplay.textContent = currentText;

    // 3. Reset typing area for the new text
    typingArea.value = "";
    typingArea.setAttribute('placeholder', 'Text completed! Keep typing...');
    
    // Reset current text progress variables
    wordsInCurrentText = 0;
    
    // 4. Recalculate and display status immediately
    updateStatus(); 
    highlight(); // Apply initial highlighting (none)
}

function startGame() {
    timeLeft = 60;
    startBtn.disabled = true;
    
    // Reset all variables for a fresh start
    wpm = 0;
    totalCorrectChars = 0;
    totalTypedChars = 0;
    totalWordsTyped = 0;
    wordsInCurrentText = 0;
    totalTimeElapsed = 0;
    startTime = null;

    currentText = testTexts[Math.floor(Math.random() * testTexts.length)];
    textDisplay.textContent = currentText;


    typingArea.disabled = false;
    typingArea.value = "";
    typingArea.setAttribute('placeholder', 'Now the input box is enabled, use it to write something....');
    
    wpmDisplay.textContent = 0;
    accuracyDisplay.textContent = 0;
    
    timerInterval = setInterval(function () {
        timeLeft--;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endGame(); // End game when timer runs out
            return;
        }
        displayContent();
    }, 1000)
}


function updateStatus() {
    var typed = typingArea.value;
    
    if (startTime !== null) {
        totalTimeElapsed = (Date.now() - startTime) / 1000; // Total seconds elapsed
        const totalMinutes = totalTimeElapsed / 60;

        // Calculate words for the current, uncompleted text
        wordsInCurrentText = typed.trim().split(/\s+/).filter(w => w.length > 0).length;
        
        // WPM is based on (Total completed words + words in current text) / Total minutes
        const currentTotalWords = totalWordsTyped + wordsInCurrentText;
        wpm = (totalMinutes > 0) ? Math.round(currentTotalWords / totalMinutes) : 0;
        wpmDisplay.textContent = wpm;
    }

    // Calculate accuracy for the current text only
    var currentCorrectChars = 0;
    for (var i = 0; i < typed.length; i++) {
        if (currentText[i] === typed[i]) {
            currentCorrectChars++;
        }
    }
    
    // Overall Accuracy = (Total Correct Chars + Current Correct Chars) / (Total Typed Chars + Current Typed Chars)
    const overallCorrectChars = totalCorrectChars + currentCorrectChars;
    const overallTypedChars = totalTypedChars + typed.length;
    
    const accuracy = (overallTypedChars > 0) ? Math.floor(overallCorrectChars / overallTypedChars * 100) : 0;
    accuracyDisplay.textContent = accuracy;
}


function highlight(){
    var typed = typingArea.value;
    var hightext = '';
    
    let isFullyCorrect = true; // Assume correct until proven wrong
    
    // Limit typed input to the length of the current text
    if (typed.length > currentText.length) {
        typed = typed.substring(0, currentText.length);
        typingArea.value = typed;
    }

    for(let i = 0 ; i < currentText.length; i ++){
        if ( i < typed.length){
            if (currentText[i]===typed[i]){
                hightext += `<span class ="correct">${currentText[i]}</span>`;
            }
             else {
                hightext += `<span class ="incorrect">${currentText[i]}</span>`;
                isFullyCorrect = false; 
            }
        }
        else{
            hightext += currentText[i];
            // If the typed string is shorter, the text is not completed fully and correctly
            if (i >= typed.length) {
                isFullyCorrect = false; 
            }
        }
    }
    textDisplay.innerHTML = hightext;
    
    // NEW LOGIC: Check for completion
    const isCompleted = typed.length === currentText.length;
    if (isCompleted && isFullyCorrect) {
        loadNextText(typed);
    }
}

function typeControl() {
    if (startTime === null) {
        startTime = Date.now();
    }
    // console.log(startTime);
    updateStatus();
    highlight();
}

startBtn.addEventListener('click', startGame);

typingArea.addEventListener('input', typeControl);