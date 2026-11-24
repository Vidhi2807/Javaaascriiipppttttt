const colorDisplay = document.querySelector('#colorDisplay');
const messageDisplay = document.querySelector('#message');
const currentStreakDisplay = document.querySelector('#currentStreak');
const bestStreakDisplay = document.querySelector('#bestStreak');
const livesContainer = document.querySelector('#livesContainer'); // New selector

const colorBoxes = document.querySelectorAll('.color-box');
console.log(colorBoxes);

const newRoundBtn = document.querySelector('#newRoundBtn');

const easyBtn = document.querySelector('#easyBtn');
const hardBtn = document.querySelector('#hardBtn');
const resetStreakBtn = document.querySelector('#resetStreakBtn');
const btnTrack = document.querySelector('.color-box-container');

let currentStreak = 0;
let bestStreak = 0;
let pickCorrectColor = "";
let num = 6;
let color = [];

// New: Variable to track lives
let lives = 3; 

function webLoad() {
    onLoad();
    setGame();
    displayContent();
    hardGame(); // Call hardGame to set initial mode correctly (6 boxes shown, button selected)
}

function onLoad() {
    var temp = localStorage.getItem('highBestStreak');
    if (temp != null) {
        bestStreak = temp;
    }
    // Initialize lives when the game loads
    renderLives(); 
}

function displayContent() {
    currentStreakDisplay.textContent = currentStreak;
    bestStreakDisplay.textContent = bestStreak;
}

function statusMsg(msg) {
    messageDisplay.textContent = msg;
}

// New: Function to display hearts
function renderLives() {
    let heartsHTML = '';
    for (let i = 0; i < 3; i++) {
        // Use the 'lost' class for lost lives
        if (i < lives) {
            heartsHTML += '<span class="heart">❤️</span>';
        } else {
            heartsHTML += '<span class="heart lost">❌</span>'; // Use a cross for lost lives
        }
    }
    livesContainer.innerHTML = heartsHTML;
}

function colorGenerate() {
    const a = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const c = Math.floor(Math.random() * 256);
    // FIX: Correctly return the RGB string
    return `rgb(${a}, ${b}, ${c})`;
}

function generateColor(num) {
    const arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(colorGenerate());
    }
    return arr;
}

function pickGenerator() {
    const math = Math.floor(Math.random() * color.length);
    return color[math];
}

function setGame() {
    // Reset lives only if a new round starts (not on a loss)
    if (lives === 0 || messageDisplay.textContent.includes("Game Over")) {
        lives = 3;
    }
    renderLives(); // Display full hearts at the start of a game
    
    color = generateColor(num);
    pickCorrectColor = pickGenerator();
    colorDisplay.textContent = pickCorrectColor;
    statusMsg("Pick the correct color!"); // Use statusMsg for clarity
    
    for (let i = 0; i < colorBoxes.length; i++) {
        if (color[i]) { // Ensure color exists before applying
             colorBoxes[i].style.backgroundColor = color[i];
             // Ensure all boxes are visible when setting colors (Hard mode handles display property)
        }
    }
}

function trackBtn(event) {
    const element = event.target;
    const rgb = element.style.backgroundColor;

    if (!rgb) return; 

    // Check if the game is over
    if (lives === 0) {
        statusMsg("Game Over! Start a New Round.");
        return;
    }

    if (pickCorrectColor === rgb) {
        statusMsg("🎉 Congratulations! You guessed right!");
        currentStreak++;
        
        if (currentStreak > bestStreak) {
            bestStreak = currentStreak;
            localStorage.setItem('highBestStreak', bestStreak);
        }
        
        displayContent();
        
        // Start a new game *after* a correct guess
        setGame(); 

    } else {
        // Handle incorrect guess
        lives--;
        renderLives(); // Update the heart display

        if (lives === 0) {
            statusMsg("💔 Game Over! The correct color was " + pickCorrectColor + ".");
            currentStreak = 0; // Reset streak on Game Over
            displayContent();
            
            // Optional: Fade out all boxes except the correct one to show the answer
            // This requires more changes but is a good UX addition
        } else {
            statusMsg(`Oops! ${lives} ${lives === 1 ? 'life' : 'lives'} left. Try again!`);
            element.style.backgroundColor = "transparent"; // Visually fade the wrong box
        }
    }
}

function newRound() {
    currentStreak = 0;
    lives = 3; // Reset lives for a new round
    statusMsg("New round started. Pick the color!");
    displayContent();
    setGame();
}


function easyGame() {
    num = 3;
    statusMsg("Easy mode activated!");
    newRound(); 
    displayContent();
    // Hide the bottom three boxes
    for (let j = 3; j <= 5; j++) {
        colorBoxes[j].style.display = 'none';
    }
    easyBtn.classList.add('selected');
    hardBtn.classList.remove('selected');
}

function hardGame() {
    num = 6;
    statusMsg("Hard mode activated!");
    newRound();
    displayContent();
    // Show all six boxes
    for (let j = 0; j < colorBoxes.length; j++) {
        colorBoxes[j].style.display = '';
    }
    easyBtn.classList.remove('selected');
    hardBtn.classList.add('selected');
}

function resetStreak() {
    currentStreak = 0;
    bestStreak = 0;
    localStorage.removeItem('highBestStreak');
    statusMsg("Streaks reset!");
    displayContent();
    lives = 3;
    renderLives(); // Reset hearts visual
}

// Attach event listeners
webLoad();

btnTrack.addEventListener('click', trackBtn);
newRoundBtn.addEventListener('click', newRound);
easyBtn.addEventListener('click', easyGame);
hardBtn.addEventListener('click', hardGame);
resetStreakBtn.addEventListener('click', resetStreak);