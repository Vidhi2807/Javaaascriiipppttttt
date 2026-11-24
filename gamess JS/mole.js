const ScoreDisplay =  document.querySelector('#score');
const timeLeftDisplay = document.querySelector('#timeLeft');
const maxScoreDisplay = document.querySelector('#maxScore');
const startBtn = document.querySelector('#startBtn');
const holes = document.querySelectorAll('.hole');
console.log(holes);
const moles = document.querySelectorAll('.mole');

var score = 0;
var time = 30;
var bestScore = 0;
var playGame = false;
var gameId = null;

// call on every game start 

function webLoad(){
    onLoad();
    displayContent();
}


// step 2 : phase load the entire data 

function onLoad (){
    var temp = localStorage.getItem('highScoreGame');
    if (temp != null){
        bestScore = temp;
    }
    else{
        bestScore = 0;
    }
};

// ii.  reflecting the actual value in the required html element using textcontent 

function displayContent(){
    ScoreDisplay.textContent = score;
    timeLeftDisplay.textContent = time;
    maxScoreDisplay.textContent = bestScore;
}

// calling webload function here 

webLoad();
// random time generator implementation 
function randomTimeGenerator(max,min){
    return Math.floor(Math.random()*(max-min)+max);
}
// random index which will return the distinct element 

function randomIndex(){
    var index = Math.floor(Math.random()*holes.length);
    return holes [index];
}
// pop game implementation for image appear and disappear purpose 
function popImageGame(){
    var randomTime = randomTimeGenerator(500,1500)
    var hole = randomIndex();
    var mole = hole.querySelector('.mole');
    moles.classList.add('up');

    setTimeout(function(){
        mole.classList.remove('up')
        popImageGame();
    },randomTime);
}

// endgame implementation 
function endGame(){
    clearInterval(gameId);
    if(score > bestScore){
        bestScore = score;
        localStorage.setItem('highScoreGame' , bestScore);
        alert(`you score is higher than previous one : ${score}`);

    }
    else{
         
        alert (`your score is : ${score}`);
    }
    score = 0;
    time = 30;
    startBtn.disabled = false ;

}


// actual implementation of start game function 

function startGame(){
    score = 0;
    time = 30;
    startBtn.disabled = true;

    popImageGame();
    // disbaled - true which means btn is disabled
    gameId = setInterval(function(){
        time--;
        if(time == 0){
            clearInterval(gameId);
            // method is used only to stop the setinterval at some condition 
        }
     displayContent();

    },1000);
}


//  add event listener part:
startBtn.addEventListener('click', startGame);

