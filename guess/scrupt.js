var numberOfBoxes = document.getElementById("numberOfBoxes");
var boxContainer = document.getElementById("boxContainer");
var img = document.createElement("img");
var winningTab = document.getElementById("winningTab");
var hiddenDiv = document.getElementById("hidden");
var progressBar = document.getElementById("progressBar");
var arrayOfBoxes = [];
var numOfRow = 8;
//var numOfCol = 4;
var counter = 0;
var counterForBr = 0;
var clickPosition = 0;
var clickedDivRow;
var clickedDivCol;
var imgRow;
var imgCol;
var diagonal;

function DisplayBoxes() {
  arrayOfBoxes = [];
  boxContainer.innerHTML = "";
  counter = 0;
  winningTab.innerHTML = "";
  winningTab.style.display = "none";
  hiddenDiv.style.display = "none";
  progressBar.setAttribute("min", 0);
  progressBar.setAttribute("max", 3);
  progressBar.setAttribute("value", 0);

  for (var i = 1; i <= 32; i++) {
    var newBox = document.createElement("div");
    newBox.id = i;
    newBox.className = "virtualBox";
    // newBox.onclick = checkImg(i);                                              NOT WORKING
    newBox.setAttribute("onclick", `checkImg(${i});`); //                         Works
    // newBox.addEventListener("click", () => { checkImg(i);});                   Returns ONLY Last Div's ID
    newBox.style.backgroundColor = "#fed032";
    newBox.style.width = "100px";
    newBox.style.height = "100px";
    newBox.style.margin = "5px";
    newBox.style.display = "";
    newBox.style.borderRadius = "10%";
    newBox.style.cursor = "pointer";
    if (counterForBr % numOfRow == 0) {
      var newContainer = document.createElement("div");
      newContainer.id = "newContainer";
      newContainer.style.display = "flex";
      boxContainer.appendChild(newContainer);
      // var br = document.createElement("br");             NOT WORKING
      // boxContainer.appendChild(br);                      NOT WORKING
      // boxContainer.innerHTML += `</br>`;                 NOT WORKING
      newContainer.appendChild(newBox);
    } else {
      newContainer.appendChild(newBox);
    }
    counterForBr++;
    arrayOfBoxes.push(newBox);
  }
  getRandomIdImg();
}
var imgindex;
function getRandomIdImg() {
  img.style.width = "100%";
  img.setAttribute("src", "./gift_icon.jpg");
  img.style.display = "none";
  var randomSelectedBox = Math.floor(Math.random() * arrayOfBoxes.length) + 1;
  img.id = randomSelectedBox;
  console.log("img id = ", img.id);
  imgindex = img.id;
  putImg(img.id);
}
function putImg(imgIndex) {
  for (var i = 0; i < 32; i++) {
    if (imgIndex == arrayOfBoxes[i].id) {
      arrayOfBoxes[i].appendChild(img);
    }
  }
}

var DivOfIndex;
function checkImg(index) {
  DivOfIndex = index;
  console.log("Div Index : ", DivOfIndex);

  imgRow = parseInt(img.id / numOfRow) + 1;
  imgCol = img.id % numOfRow;
  console.log("img col : ", imgCol);
  console.log("img row : ", imgRow);

  divRow = parseInt(DivOfIndex / numOfRow) + 1;
  divCol = DivOfIndex % numOfRow;
  console.log("div col : ", divCol);
  console.log("div row : ", divRow);
  if (imgCol == 0) {
    imgCol = numOfRow;
  }
  if (index == img.id) {
    img.style.display = "block";
    winningTab.style.display = "block";
    winningTab.style.width = "100%";
    winningTab.style.padding = "20px";
    winningTab.style.backgroundColor = "black";
    winningTab.style.color = "white";
    winningTab.style.fontWeight = "bold";
    winningTab.style.fontSize = "20px";
    counter++;
    winningTab.innerHTML = `U Got It After ${counter} Try`;
    hiddenDiv.style.width = "1200px";
    hiddenDiv.style.height = "500px";
    hiddenDiv.style.position = "relative";
    hiddenDiv.style.bottom = "326px";
    hiddenDiv.style.left = "150px";
    hiddenDiv.style.display = "block";
  } else {
    if (index / numOfRow > 3 && index / numOfRow <= numOfRow) {
      clickedDivRow = numOfRow;
    } else if (index / numOfRow > 2 && index / numOfRow <= numOfRow - 1) {
      clickedDivRow = numOfRow - 1;
    } else if (index / numOfRow > 1 && index / numOfRow <= numOfRow - 2) {
      clickedDivRow = numOfRow - 2;
    } else {
      clickedDivRow = numOfRow - 3;
    }
    if (index % numOfRow == 0) {
      clickedDivCol = numOfRow;
    } else {
      clickedDivCol = index % numOfRow;
    }
    getNumberOfMovesRows(DivOfIndex);
    console.log("going to flip the div which has no img");
    flipWrongDiv(DivOfIndex);
    counter++;
  }
}

var numberInRows;
function getNumberOfMovesRows(index) {
  console.log("Entered getNumberOfMovesCols_Rows function");
  console.log("Div id : ", arrayOfBoxes[index - 1].id);
  console.log("img id : ", imgindex);

  var imgRow = imgindex / numOfRow;
  var divRow = arrayOfBoxes[index - 1].id / numOfRow;

  numberInRows = parseInt(Math.abs(divRow - imgRow));
  console.log("numberInRows : ", numberInRows);
}

function flipWrongDiv(index) {
  console.log("Entered flipWrongDiv function");
  arrayOfBoxes[index - 1].style.transition = "all 2s";
  arrayOfBoxes[index - 1].style.transform = "rotateY(180deg)";
  arrayOfBoxes[index - 1].style.backgroundColor = "black";
  progressBar.setAttribute("value", numberInRows);
  arrayOfBoxes[index - 1].setAttribute("disabled", "true");
}
