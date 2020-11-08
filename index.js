let word = "SOLARSYSTEM";
let correct = 0;
let lives = parseInt(5);
let gameOver = false;
let wordContainer = document.getElementById("wordContainer");

for (let i = 0; i < word.length; i++) {
  let letter = document.createElement("div");
  letter.className = "letter";
  letter.setAttribute("id", i);
  wordContainer.appendChild(letter);
}
let imageContainer = document.createElement("IMG");
imageContainer.setAttribute("src", "SolarSystem.jpg");
imageContainer.style.maxHeight = "250px";
wordContainer.appendChild(imageContainer);

let keyBoardContainer = document.getElementById("keyBoard-container");
let keyBoardContainer1 = document.createElement("div");
keyBoardContainer1.setAttribute("id", "keyBoardContainer1");
let keyBoardContainer2 = document.createElement("div");
keyBoardContainer2.setAttribute("id", "keyBoardContainer2");
let keyBoardContainer3 = document.createElement("div");
keyBoardContainer3.setAttribute("id", "keyBoardContainer3");

let str = "QWERTYUIOPASDFGHJKLZXCVBNM";

for(let i=0; i<26; i++) {
  if(i < 10) {
    let key = document.createElement("div");
    key.setAttribute("id", "key");
    key.setAttribute("data-value", str.charAt(i));
    key.setAttribute("onclick", "handleClick(this)");
    key.innerHTML = str.charAt(i);
    keyBoardContainer1.appendChild(key);
  }
  else if(i>=10 && i<19) {
    let key = document.createElement("div");
    key.setAttribute("id", "key");
    key.setAttribute("data-value", str.charAt(i));
    key.setAttribute("onclick", "handleClick(this)");
    key.innerHTML = str.charAt(i);
    keyBoardContainer2.appendChild(key);
  }
  else {
    let key = document.createElement("div");
    key.setAttribute("id", "key");
    key.setAttribute("data-value", str.charAt(i));
    key.setAttribute("onclick", "handleClick(this)");
    key.innerHTML = str.charAt(i);
    keyBoardContainer3.appendChild(key);
  }
}
keyBoardContainer.appendChild(keyBoardContainer1);
keyBoardContainer.appendChild(keyBoardContainer2);
keyBoardContainer.appendChild(keyBoardContainer3);

let movesLeft = document.getElementById("moves");
movesLeft.innerHTML = `Moves Left: ${lives}`;
const handleClick = (el) => {
  if(gameOver === true) {
    return;
  }
  let flag = false;
  let flagCount = 0;
  let keyPressed = el.getAttribute("data-value");
  el.removeAttribute("onclick");
  for(let i=0; i<word.length; i++) {
    if(word.charAt(i) === keyPressed) {
      document.getElementById(i).innerHTML = keyPressed;
      flag = true;
      flagCount++;
    }
  }
  if(flag) {
    correct += flagCount;
    if(correct === word.length) {
      alert("You won the Game!");
      gameOver = true;
      return;
    }
    return;
  }
  if(lives === 0) {
    alert("You lose the Game!");
    gameOver = true;
    return;
  }
  lives--;
  movesLeft.innerHTML = `Moves Left: ${lives}`;
}

