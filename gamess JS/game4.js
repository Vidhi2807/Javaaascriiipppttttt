const colorDisplay = document.querySelector('#colorDisplay');
const messageDisplay = document.querySelector('#message');
const currentStreakDisplay = document.querySelector('#currentStreak');
const bestStreakDisplay = document.querySelector('#bestStreak');

// Select all 6 color box divs
const colorBoxes = document.querySelectorAll('.color-box'); 
const newRoundBtn = document.querySelector('#newRoundBtn');

const easyBtn = document.querySelector('#easyBtn');
const hardBtn = document.querySelector('#hardBtn');
const resetStreakBtn = document.querySelector('#resetStreakBtn');

const livesContainer = document.querySelector('#livesContainer'); // You MUST add this ID to a <div> in your HTML
var totalLives = 3; 
var livesRemaining = totalLives; // Current lives left

// varaiables...
var currentStreak = 0;
var bestStreak = 0;
var pickCorrectColor = ''; 
var colors = []; 
var num = 6; 

// CORE GAME LOGIC
// ===============================================

// 1. Corrected function to generate a single valid RGB color string
function colorGenerate() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`; 
}

// 2. Generates an array of RGB color strings
function generateColors(count) {
    const arr = [];
    for(var i = 0; i < count; i++){
        arr.push(colorGenerate());
    }
    return arr;
}

// 3. Selects one of the generated colors as the correct answer
function pickGenerator(){
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

// NEW: Function to update the visual display of the hearts
function updateLivesDisplay() {
    // Check if the lives container exists before trying to update it
    if (!livesContainer) return; 
    
    let html = '';
    for (let i = 0; i < totalLives; i++) {
        // If the current index is less than remaining lives, display a heart
        if (i < livesRemaining) {
            html += '<span class="heart active">❤️</span>';
        } else {
            // Otherwise, display a cross (lost life)
            html += '<span class="heart lost">❌</span>'; 
        }
    }
    livesContainer.innerHTML = html;
}

// 4. Sets up the game board for a new round
function setGame() { 
    // 4.1 Generate colors and pick the correct one
    colors = generateColors(num);
    pickCorrectColor = pickGenerator();
    
    // NEW: Reset lives for a new game/round
    livesRemaining = totalLives; 
    updateLivesDisplay();

    // 4.2 Update the header display
    colorDisplay.textContent = pickCorrectColor.toUpperCase();
    messageDisplay.textContent = "Pick a Color !!";
    
    // 4.3 Set colors on the box divs and control visibility
    for(let i = 0; i < colorBoxes.length; i++) {
        if (i < num) {
            colorBoxes[i].style.backgroundColor = colors[i];
            colorBoxes[i].style.display = 'block'; 
            colorBoxes[i].classList.remove('fade'); 
        } else {
            colorBoxes[i].style.display = 'none'; 
        }
    }
}

// 5. Handles the user's guess
function winGuess(event) {
    // Ensure the box is still 'active' (not faded out)
    if(event.target.classList.contains('fade') || livesRemaining === 0) {
        return; 
    }
    
    var clickedColor = event.target.style.backgroundColor; 

    if (pickCorrectColor === clickedColor) {
        // WINNING LOGIC
        messageDisplay.textContent = "You Won!";
        
        // Change all visible boxes to the winning color
        colorBoxes.forEach((box) => {
            if (box.style.display !== 'none') {
                box.style.backgroundColor = pickCorrectColor;
                box.classList.remove('fade'); 
            }
        });

        // Update streak
        currentStreak++;
        if (currentStreak > bestStreak) {
            bestStreak = currentStreak;
            localStorage.setItem('highBestStreak', bestStreak);
        }
        displayContent();
        
        // Change New Round button text for feedback
        newRoundBtn.textContent = 'Play Again?';
        
        // Optional: Remove listeners to prevent further clicks
        colorBoxes.forEach(box => box.removeEventListener('click', winGuess));
        
    } else {
        // LOSING LOGIC MODIFIED: Life System
        
        // 1. Lose a life
        livesRemaining--;
        updateLivesDisplay(); 

        // 2. Fade out the wrong box
        event.target.classList.add('fade');
        
        // Reset current streak on a loss
        currentStreak = 0;
        displayContent();

        // 3. Check for Game Over
        if (livesRemaining === 0) {
            // GAME OVER STATE
            messageDisplay.textContent = "GAME OVER! Correct was: " + pickCorrectColor.toUpperCase();
            newRoundBtn.textContent = 'Start New Game';
            
            // Disable clicks
            colorBoxes.forEach(box => box.removeEventListener('click', winGuess)); 

        } else {
            // STILL HAVE LIVES
            messageDisplay.textContent = "❌ Life Lost! Try Again ❌"; 
        }
    }
}


// ===============================================
// BUTTON ACTIVATION FUNCTIONS
// ===============================================

// New Round Button
function startNewRound() {
    newRoundBtn.textContent = 'New Round'; // Reset button text
    
    // CRITICAL: Re-attach click listeners if they were removed at Game Over/Win
    colorBoxes.forEach((box) => {
        // Remove previous listener to prevent duplicates, then add it back
        box.removeEventListener('click', winGuess); 
        box.addEventListener('click', winGuess); 
    });
    
    setGame(); // Call setGame to re-initiate the round
}

// Easy Mode Button (3 colors)
function setEasyMode() {
    if (num !== 3) {
        num = 3; 
        easyBtn.classList.add('selected');
        hardBtn.classList.remove('selected');
        currentStreak = 0; 
        displayContent();
        startNewRound();
    }
}

// Hard Mode Button (6 colors)
function setHardMode() {
    if (num !== 6) {
        num = 6; 
        hardBtn.classList.add('selected');
        easyBtn.classList.remove('selected');
        currentStreak = 0; 
        displayContent();
        startNewRound();
    }
}

// Reset Streak Button
function resetStreaks() {
    if (confirm("Are you sure you want to reset your Best Streak?")) {
        currentStreak = 0;
        bestStreak = 0;
        localStorage.setItem('highBestStreak', 0); 
        displayContent();
        messageDisplay.textContent = "Streaks Reset!";
        updateLivesDisplay(); // Update to show reset state
    }
}


// ===============================================
// INITIALIZATION AND EVENT LISTENERS
// ===============================================

function displayContent() {
    currentStreakDisplay.textContent = currentStreak;
    bestStreakDisplay.textContent = bestStreak;
}

function onload() {
    var temp = localStorage.getItem('highBestStreak');
    if (temp != null) {
        bestStreak = parseInt(temp);
    }
    // Initial display of hearts (before setGame is called)
    updateLivesDisplay(); 
}


// Attach initial click listeners to the 6 color box divs
colorBoxes.forEach((box) => {
    box.addEventListener('click', winGuess); 
});

// Attach click listeners to the 4 control buttons
newRoundBtn.addEventListener('click', startNewRound);
easyBtn.addEventListener('click', setEasyMode);
hardBtn.addEventListener('click', setHardMode);
resetStreakBtn.addEventListener('click', resetStreaks);


// Start the game when the script loads
onload();
setGame(); // Calls setGame to initialize the board and hearts
// displayContent is called within setGame