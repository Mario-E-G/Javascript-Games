var word = document.getElementById('wordHolder');
var P_input = document.getElementById('PlayerInput');
var scre = document.getElementById('score');
var timer = document.getElementById('timer')
var score = 0 ;
var time = 10;
var gameUp = document.getElementById('gameUp')

var timeInterval = setInterval(timerUpdate, 850);

var words = [
    'sigh',
  'tense',
  'airplane',
  'ball',
  'pies',
  'juice',
  'warlike',
  'bad',
  'north',
  'dependent',
  'steer',
  'silver',
  'highfalutin',
  'superficial',
  'quince',
  'eight',
  'feeble',
  'admit',
  'drag',
  'loving'
];

P_input.focus();

function timerUpdate(){
    time--
    timer.innerHTML = 'Time: ' + time + 's';

    if (time == 0){
        clearInterval(timeInterval);
        gameOver();
    }
}

function Random(){
    return words[Math.floor(Math.random() * words.length)];
}

function addWord(){
    word.innerHTML = Random();

}

function check(){
    if(P_input.value == word.innerHTML){
        if(score >= 10){
            time+=2
        }
        else{
            time+=3;
        }
        score++ ;
        P_input.value = '';
        addWord();
        scre.innerHTML = 'Score: ' + score;
    }
}



function gameOver(){
    gameUp.innerHTML = `
    <h1 id="TimeRan">Time ran out</h1>
    <p id="FinalScore">Your final score is ${score}</p>`
    gameUp.style.display = 'flex';
}

 