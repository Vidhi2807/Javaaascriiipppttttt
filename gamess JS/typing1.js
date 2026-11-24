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
// Added score/stats tracking for multiple texts
let totalTypedWords = 0;
let totalTypedCharacters = 0;
let totalCorrectCharacters = 0;
let totalTimeElapsed = 0; // In milliseconds

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

// Helper function to reset text-specific stats
function resetTextStats() {
    typingArea.value = "";
    typingArea.setAttribute('placeholder', 'Text completed! Getting the next text...');
    highlight(); // Reset highlighting
}

// Function to handle the end of a single text
function endText(typed) {
    // 1. Update overall statistics based on the completed text
    const words = typed.trim().split(/\s+/).filter(w => w.length > 0);
    totalTypedWords += words.length;
    totalTypedCharacters += typed.length;
    
    // Calculate correct characters for the completed text
    let correctCharsInText = 0;
    for (let i = 0; i < currentText.length; i++) {
        if (currentText[i] === typed[i]) {
            correctCharsInText++;
        }
    }
    totalCorrectCharacters += correctCharsInText;

    // 2. Load the next text
    currentText = testTexts[Math.floor(Math.random() * testTexts.length)];
    textDisplay.textContent = currentText;
    
    // 3. Reset the typing area for the new text
    resetTextStats();
    
    // 4. Update the display status immediately
    updateStatus(true); // Recalculate WPM/Accuracy based on total stats
}

function endGame() {
    clearInterval(timerInterval);
    // Calculate total time elapsed for final WPM calculation
    totalTimeElapsed = (60 - timeLeft) * 1000;
    
    // Final WPM based on total stats
    const totalMinutes = totalTimeElapsed / 1000 / 60;
    wpm = (totalMinutes > 0) ? Math.round(totalTypedWords / totalMinutes) : 0;
    wpmDisplay.textContent = wpm;
    
    // Update Best WPM
    if (wpm > bestWPM) {
        bestWPM = wpm
        sessionStorage.setItem('getHighWpm', bestWPM);
        alert(`New High Score! WPM: ${wpm}`);
    }
    else {
        alert(`Time's up! Final WPM: ${wpm}`);
    }
    
    // Reset all game state
    startBtn.disabled = false;
    typingArea.disabled = true;
    typingArea.value = "";
    typingArea.setAttribute('placeholder', 'Click "Start Test" to begin.');
    
    // Reset global state variables
    wpm = 0;
    totalTypedWords = 0;
    totalTypedCharacters = 0;
    totalCorrectCharacters = 0;
    totalTimeElapsed = 0;
    startTime = null;
    
    displayContent();
}

function startGame() {
    timeLeft = 60;
    startBtn.disabled = true;

    // Reset global state for a new game
    wpm = 0;
    totalTypedWords = 0;
    totalTypedCharacters = 0;
    totalCorrectCharacters = 0;
    totalTimeElapsed = 0;
    startTime = null; // Set this when first character is typed

    // Get and display the first text
    currentText = testTexts[Math.floor(Math.random() * testTexts.length)];
    textDisplay.textContent = currentText;

    // Prepare input area
    typingArea.disabled = false;
    typingArea.value = "";
    typingArea.setAttribute('placeholder', 'Start typing the text above!');

    // Reset scores display
    wpmDisplay.textContent = 0;
    accuracyDisplay.textContent = 0;

    // Start the timer
    timerInterval = setInterval(function () {
        timeLeft--;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endGame(); // End the game when time runs out
            return;
        }
        displayContent();
    }, 1000);
}


function updateStatus(isEndText = false) {
    const typed = typingArea.value;
    
    // Calculate WPM based on total words typed and time elapsed since game start
    if (startTime !== null) {
        totalTimeElapsed = Date.now() - startTime;
        const totalMinutes = totalTimeElapsed / 1000 / 60;
        
        // Count words from the current text being typed
        const wordsInCurrentText = typed.trim().split(/\s+/).filter(w => w.length > 0).length;
        
        // Calculate WPM using (total completed words + words in current text) / total time
        const currentTotalWords = totalTypedWords + wordsInCurrentText;
        
        wpm = (totalMinutes > 0) ? Math.round(currentTotalWords / totalMinutes) : 0;
        wpmDisplay.textContent = wpm;
    }


    // Calculate Accuracy based on all characters typed so far
    let currentCorrectChars = 0;
    for (let i = 0; i < typed.length; i++) {
        if (currentText[i] === typed[i]) {
            currentCorrectChars++;
        }
    }
    
    const overallCorrectChars = totalCorrectCharacters + currentCorrectChars;
    const overallTypedChars = totalTypedCharacters + typed.length;

    const accuracy = (overallTypedChars > 0) ? Math.floor(overallCorrectChars / overallTypedChars * 100) : 0;
    accuracyDisplay.textContent = accuracy;
}


function highlight(){
    var typed = typingArea.value;
    var hightext = '';
    
    // Check for full correct completion of the text
    const isCompleted = typed.length === currentText.length;
    let isFullyCorrect = isCompleted;

    for(let i = 0 ; i < currentText.length; i ++){
        if ( i < typed.length){
            if (currentText[i]===typed[i]){
                hightext += `<span class ="correct">${currentText[i]}</span>`;
            }
             else {
                hightext += `<span class ="incorrect">${currentText[i]}</span>`;
                isFullyCorrect = false; // Mark as incorrect if any character is wrong
            }
        }
        else{
            hightext += currentText[i];
            isFullyCorrect = false; // Cannot be fully correct if the length doesn't match
        }
    }
    textDisplay.innerHTML = hightext;
    
    // If the text is completed and fully correct, trigger endText
    if (isCompleted && isFullyCorrect) {
        endText(typed);
    }
}

function typeControl() {
    // Start the timer on the very first keystroke of the game
    if (startTime === null) {
        startTime = Date.now();
    }

    // Only allow typing up to the length of the current text
    if (typingArea.value.length > currentText.length) {
        typingArea.value = typingArea.value.substring(0, currentText.length);
        return; // Prevent further action if we cut the input
    }
    
    updateStatus();
    highlight();
}

startBtn.addEventListener('click', startGame);
typingArea.addEventListener('input', typeControl);