// get elements from html file to use in js file
const startbtn = document.getElementById("startbtn");
const countDown = document.getElementById("countDown");
const colorSign = document.getElementById("color-sign");
const inpText = document.getElementById("input-text");
const paraText = document.getElementById("paraText");
const timer = document.getElementById("timer");
const countDownContainer = document.getElementById("countDownContainer");
const coloredStart = document.getElementById("colored-start");
const resetbtn = document.getElementById("resetbtn");
const clock = document.getElementById("clock");
const audio = document.getElementById("audio1");
const finalMessage = document.getElementById("final-message");
const popup = document.getElementById("popup-container");
var s = 0;
var m = 0;
var h = 0; // h,m,s stands for hours, minutes and seconds
var myInterval; // for interval in timerFunction
var intrvl; // for interval function in click event
// array of sentences that apper to the player
const arrOfSentences = [
  `You were the chosen one! It was said that you would destroy the Sith, not join them. You were to bring balance to the Force, not leave it in darkness.`,
  `For my hope was founded on a fat man in Bree; and my fear was founded on the cunning of Sauron. But fat men who sell ale have many calls to answer; and the power of Sauron is still less than fear makes it.`,
  `Every day when you're walking down the street, everybody that you meet has an original point of view. And I say hey, hey! What a wonderful kind of day, where you can learn to work and play, and get along with each other.`,
  `Only those who know the supremacy of the intellectual life - the life which has a seed of ennobling thought and purpose within - can understand the grief of one who falls from that serene activity into the absorbing soul-wasting struggle with worldly annoyances.`,
  `He supposed that even in Hell, people got an occasional sip of water, if only so they could appreciate the full horror of unrequited thirst when it set in again.`,
  `I have not much hope that Gollum can be cured before he dies, but there is a chance of it. And he is bound up with the fate of the Ring. My heart tells me that he has some part to play yet, for good or ill, before the end; and when that comes, the pity of Bilbo may rule the fate of many - yours not least.`,
  `I can tell you my love for you will still be strong, after the boys of summer have gone.`,
  `Your future hasn't been written yet; no one's has. Your future is whatever you make it, so make it a good one.`,
  `Now if you choose not to respond to my parental authority I should warn you I have mind-altering drugs in the other room and I'm not afraid to use them.`,
  `Remembering you running soft through the night. You were bigger and brighter and whiter than snow. And screamed at the make-believe, screamed at the sky, and you finally found all your courage to let it all go.`,
  `Sometimes life is like this tunnel. You can't always see the light at the end of the tunnel, but if you keep moving, you will come to a better place.`,
  `My spirit's made up of the ocean, and the sky, and the sun, and the moon, and all my eyes can see. I cannot go back to your land of gloom, where black jagged shadows remind me of the coming of your doom. I want my own land.`,
  `For the first time, he heard something that he knew to be music. He heard people singing. Behind him, across vast distances of space and time, from the place he had left, he thought he heard music too. But perhaps, it was only an echo.`,
];
let letter; //each character the player enters
var counterForIndex = 0;
var randomIndex; //random index from the array

counter = 10;
countDown.innerHTML = counter;
//function to start the count down with little animation and audio
startbtn.addEventListener("click", () => {
  intrvl = setInterval(() => {
    counter--;
    countDown.innerHTML = counter;
    if (counter == 3) {
      playAudio();
    }
    if (counter % 2 == 0 && counter > 5 && counter != 0) {
      colorSign.setAttribute("src", "./imgs/red-color.png");
    } else {
      if (counter % 2 == 0 && counter < 5 && counter != 0) {
        colorSign.setAttribute("src", "./imgs/yellow-color.png");
      }
    }
    if (counter == 0) {
      colorSign.setAttribute("src", "./imgs/green-color.png");
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
// function to get random index
function getRandomSentence() {
  randomIndex = Math.floor(Math.random() * arrOfSentences.length);
  paraText.innerHTML = arrOfSentences[randomIndex];
}
getRandomSentence();

// function to get the specific character the player enters and check it with the sentence in the array
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
    letter == "-" ||
    letter == "'"
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

// function to check for the player winning
function checkForWinning() {
  console.log("inp length", inpText.value.length + 1);
  if (
    arrOfSentences[randomIndex][arrOfSentences[randomIndex].length - 1] ==
      "." &&
    inpText.value.length + 1 == arrOfSentences[randomIndex].length &&
    isColor("rgb(255, 255, 255)")
  ) {
    inpText.disabled = true;
    console.log("Congratulations...");
    counter = 10;
    countDown.innerHTML = counter;
    colorSign.setAttribute("src", "./imgs/red-color.png");
    clearInterval(myInterval);
    finalMessage.innerText = "Congratulations! You won! 😃";
    popup.style.display = "flex";
  }
}

// Display timer
function showTimer() {
  timer.style.transition = "3s";
  timer.style.opacity = 1;
  clock.style.transition = "3s";
  clock.style.opacity = 1;
}

// Hide timer
function hideTimer() {
  timer.style.transition = "3s";
  timer.style.opacity = 0;
  clock.style.transition = "3s";
  clock.style.opacity = 0;
}

// Display traffic light
function showSign() {
  countDownContainer.style.transition = "3s";
  countDownContainer.style.opacity = 1;
}

// Hide traffic light
function hideSign() {
  countDownContainer.style.transition = "3s";
  countDownContainer.style.opacity = 0;
}

//set interval function that calls startTimer() every 10 milliseconds
function timerFunction() {
  myInterval = setInterval(startTimer, 10);
}

//reset all variables and html content to defualt
function Reset() {
  counter = 10;
  countDown.innerHTML = counter;
  hideTimer();
  showSign();
  inpText.disabled = true;
  inpText.value = "";
  clock.innerHTML = "";
  h = 0;
  m = 0;
  s = 0;
  inpText.style.backgroundColor = "#fff";
  clearInterval(myInterval);
  clearInterval(intrvl);
  getRandomSentence();
  colorSign.setAttribute("src", "./imgs/red-color.png");
  popup.style.display = "none";
}

//playing audio
function playAudio() {
  audio.play();
}

//function that count time every 10 milliseconds and display it in html
function startTimer() {
  showTimer();
  s = parseInt(s);
  m = parseInt(m);
  h = parseInt(h);

  s += 1;

  if (s == 60) {
    m += 1;
    s = 0;
  }
  if (m == 60) {
    h += 1;
    m = 0;
    s = 0;
  }

  if (s < 10 || s == 0) {
    s = "0" + s;
  }
  if (m < 10 || m == 0) {
    m = "0" + m;
  }
  if (h < 10 || h == 0) {
    h = "0" + h;
  }

  clock.innerHTML = h + " : " + m + " : " + s;
}

//check whether background color of input is white or not
function isColor(strColor) {
  let backgroundColor = inpText.style.backgroundColor;
  console.log(backgroundColor);
  if (backgroundColor == strColor) {
    return true;
  }
  return false;
}
