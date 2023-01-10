var currentNumber = 0;
function interact(num) {
  if (currentNumber < 25 && num.innerHTML == "") {
    currentNumber++;
    num.innerHTML = currentNumber;
  }
  if (currentNumber == 26) {
    num.style.textDecoration = "line-through";
    num.style.color = "red";
  }
  if (currentNumber == 25) {
    currentNumber++;
  }
}

function crossOut(charcter) {
  charcter.style.textDecoration = "line-through";
  charcter.style.color = "red";
}
function Reset() {
  var divs = document.getElementsByClassName("cells");
  currentNumber = 0;
  var word = document.getElementsByClassName("word");
  for (let index = 0; index < divs.length; index++) {
    divs[index].innerHTML = "";
    divs[index].style.textDecoration = "none";
    divs[index].style.color = "black";
  }
  for (let index = 0; index < word.length; index++) {
    word[index].style.textDecoration = "none";
    word[index].style.color = "black";
    console.log(word[index]);
  }
}
