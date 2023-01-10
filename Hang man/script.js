var wrongInput = document.getElementById("wronginput");
var winDiv = document.createElement("div");
var win;
var counter = 0;
var wronginputs = [];
var exist = 0;
var lett;
var hang1 = document.getElementById("num1");
var hang2 = document.getElementById("num2");
var hang3 = document.getElementById("num3");
var hang4 = document.getElementById("num4");
var hang5 = document.getElementById("num5");
var hang6 = document.getElementById("num6");
var hang7 = document.getElementById("num7");
var hang8 = document.getElementById("num8");
var hang9 = document.getElementById("num9");
var playable = true;
var words = [
  "apple",
  "elephant",
  "computer",
  "mouse",
  "keybord",
  "chiken",
  "time",
  "blue",
  "red",
  "potato",
  "player",
  "car",
  "bus",
  "mobile",
];
var divWord = document.getElementById("Word");
var winner = 0;
var randomWord = words[Math.floor(+Math.random() * words.length)];
for (let index = 0; index < randomWord.length; index++) {
  cin = document.createElement("p");
  cin.className = "currentWord";
  cin.innerHTML = "- ";
  divWord.appendChild(cin);
}
if (randomWord.length === 0) {
  playable = false;
}
var currentWord = document.getElementsByClassName("currentWord");
document.body.addEventListener("keydown", (el) => {
  if (playable) {
    if (el.keyCode >= 65 && el.keyCode <= 90) {
      let letter = el.code;
      lett = letter.slice(3);
      for (let i = 0; i < wronginputs.length; i++) {
        if (wronginputs[i] == lett) {
          exist = 1;
          console.log("Exist = 1");
        }
      }
      for (let index = 0; index < randomWord.length; index++) {
        if (lett == randomWord[index].toUpperCase()) {
          console.log(el.key);
          if (currentWord[index].innerHTML == "- ") {
            currentWord[index].innerHTML = lett;
            winner++;
          }
          exist = 1;
        }
      }
      if (exist == 0) {
        if (counter % 3 != 0) {
          wrongInput.appendChild(winDiv);
          win = document.createElement("p");
          winDiv.appendChild(win);
        } else {
          winDiv = document.createElement("div");
          wrongInput.appendChild(winDiv);
          win = document.createElement("p");
          winDiv.appendChild(win);
        }
        console.log(lett);
        win.innerHTML = lett;
        counter++;
        wronginputs.push(lett);
        switch (counter) {
          case 1:
            hang1.style.display = "block";
            break;
          case 2:
            hang2.style.display = "block";
            break;
          case 3:
            hang3.style.display = "block";
            break;
          case 4:
            hang4.style.display = "block";
            break;
          case 5:
            hang5.style.display = "block";
            break;
          case 6:
            hang6.style.display = "block";
            break;
          case 7:
            hang7.style.display = "block";
            break;
          case 8:
            hang8.style.display = "block";
            break;
          case 9:
            hang9.style.display = "block";
            break;
          default:
            break;
        }
      }
      exist = 0;
      if (counter == 9) {
        playable = false;
        alert("Game Over!");
      }
      if (winner == randomWord.length) {
        playable = false;
        alert("You won");
      }
    }
  }
});
function Reset() {
  window.location.reload();
}
