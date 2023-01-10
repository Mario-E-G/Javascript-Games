const startbtn = document.getElementById("startbtn");
const countDown = document.getElementById("countDown");
const colorSign = document.getElementById("color-sign");
const inpText = document.getElementById("input-text");
const paraText = document.getElementById("paraText");
const timer = document.getElementById("timer");
const countDownContainer = document.getElementById("countDownContainer");
const coloredStart = document.getElementById("colored-start");
const appendseconds = document.getElementById("seconds");
const appendtens = document.getElementById("tens");
const resetbtn = document.getElementById("resetbtn");
const timerword = document.getElementById("timerword");
var tens = 00;
var seconds = 00;
var myInterval;

const arrOfSentences = [
  `You were the chosen one! It was said that you would destroy the Sith, not join them. You were to bring balance to the Force, not leave it in darkness.`,
  `For my hope was founded on a fat man in Bree; and my fear was founded on the cunning of Sauron. But fat men who sell ale have many calls to answer; and the power of Sauron is still less than fear makes it.`,
  `Every day when you're walking down the street, everybody that you meet has an original point of view. And I say hey, hey! What a wonderful kind of day, where you can learn to work and play, and get along with each other.`,
  `Only  those who know the supremacy of the intellectual life - the life which has a seed of ennobling thought and purpose within - can understand the grief of one who falls from that serene activity into the absorbing soul-wasting struggle with worldly annoyances.`,
  `He supposed that even in Hell, people got an occasional sip of water, if only so they could appreciate the full horror of unrequited thirst when it set in again.`,
  `hello mario.`,
];
let letter;
var counterForIndex = 0;
var randomIndex;

// console.log(inpText.value.length);
counter = 10;
countDown.innerHTML = counter;
startbtn.addEventListener("click", () => {
  Reset();
  const intrvl = setInterval(() => {
    counter--;
    countDown.innerHTML = counter;
    if (counter % 2 == 0 && counter > 5 && counter != 0) {
      colorSign.setAttribute("src", "./red-color.png");
    } else {
      if (counter % 2 == 0 && counter < 5 && counter != 0) {
        colorSign.setAttribute("src", "./yellow-color.png");
      }
    }
    if (counter == 0) {
      colorSign.setAttribute("src", "./green-color.png");
      inpText.disabled = false;
      counterForIndex = 0;
      inpText.focus();
      clearInterval(intrvl);
      hideSign();
      showTimer();
      timerFunction();
    }
  }, 1000);
});

function getRandomSentence() {
  randomIndex = Math.floor(Math.random() * arrOfSentences.length);
  paraText.innerHTML = arrOfSentences[randomIndex];
  // console.log(randomIndex);
}
getRandomSentence();

// console.log("array length", arrOfSentences[randomIndex].length);

inpText.addEventListener("keydown", (event) => {
  // console.log(event.key);
  if (inpText.value == "") {
    counterForIndex = 0;
  }
  letter = event.key;
  if (
    (event.keyCode >= 97 && event.keyCode <= 122) ||
    (event.keyCode >= 65 && event.keyCode <= 90) ||
    event.keyCode == 32 ||
    letter == "." ||
    letter == "," ||
    letter == "!" ||
    letter == ";" ||
    letter == "-"
  ) {
    if (event.keyCode == 127) {
      counterForIndex--;
    }
    if (letter == arrOfSentences[randomIndex][counterForIndex]) {
      console.log("counter : " + counterForIndex);
      inpText.style.backgroundColor = "#fff";
      counterForIndex++;
      checkForWinning();
    } else {
      console.log("else letter : " + letter);
      inpText.style.backgroundColor = "#ff6666";
    }
  }
});

function checkForWinning() {
  console.log("inp length", inpText.value.length + 1);
  if (
    arrOfSentences[randomIndex][arrOfSentences[randomIndex].length - 1] ==
      "." &&
    inpText.value.length + 1 == arrOfSentences[randomIndex].length
    // inpText.style.backgroundColor == "#fff"
  ) {
    inpText.disabled = true;
    console.log("Congratulations...");
    counter = 10;
    countDown.innerHTML = counter;
    colorSign.setAttribute("src", "./red-color.png");
    clearInterval(myInterval);
  }
}

function showTimer() {
  appendseconds.style.transition = "3s";
  appendseconds.style.opacity = 1;
  appendtens.style.transition = "3s";
  appendtens.style.opacity = 1;
  timer.style.transition = "3s";
  timer.style.opacity = 1;
  timerword.style.transition = "3s";
  timerword.style.opacity = 1;
}

function hideTimer() {
  appendseconds.style.transition = "3s";
  appendseconds.style.opacity = 0;
  appendtens.style.transition = "3s";
  appendtens.style.opacity = 0;
  timer.style.transition = "3s";
  timer.style.opacity = 0;
  timerword.style.transition = "3s";
  timerword.style.opacity = 0;
}

function showSign() {
  countDownContainer.style.transition = "3s";
  countDownContainer.style.opacity = 1;
}

function hideSign() {
  countDownContainer.style.transition = "3s";
  countDownContainer.style.opacity = 0;
}

function timerFunction() {
  myInterval = setInterval(startTimer, 10);
}

function startTimer() {
  showTimer();
  tens++;
  if (tens <= 9) {
    appendtens.innerHTML = "0" + tens;
  }
  if (tens > 9) {
    appendtens.innerHTML = tens;
  }
  if (tens > 99) {
    console.log("seconds");
    seconds++;
    appendseconds.innerHTML = "0" + seconds;
    tens = 0;
    appendtens.innerHTML = "0" + 0;
  }
  if (seconds > 9) {
    appendseconds.innerHTML = seconds;
  }
}

function Reset() {
  counter = 10;
  countDown.innerHTML = counter;
  tens = 00;
  seconds = 00;
  appendseconds.innerHTML = "";
  appendtens.innerHTML = "";
  hideTimer();
  showSign();
  inpText.disabled = true;
  inpText.value = "";
  inpText.style.backgroundColor = "#fff";
  clearInterval(myInterval);
  colorSign.setAttribute("src", "./red-color.png");
}
