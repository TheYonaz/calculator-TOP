let container = document.getElementById("calBody");
let previousNumber = document.querySelector("#preNum");
let currentNumber = document.getElementById("currentNum");
let numButtons = document.querySelectorAll(".num");
let clear = document.getElementById("Clear");
let opeButtons = document.getElementsByClassName('operators');
let getResult = document.getElementById("equal");
let operator = document.getElementById("opeDiv");
let dotBut = document.getElementById('Dot')
//inner text content const

//operators functions
function add(x, y) {
  let result = x + y;
  previousNumber.innerText = result;
}
function subtract(x, y) {
  let result = x - y;
  previousNumber.innerText = result;
}
function multiply(x, y) {
  let result = x * y;
  previousNumber.innerText = result;
}
function divide(x, y) {
  let result = x / y;
  previousNumber.innerText = result;
}
function forOpe(button) {
  let toPreDisplay = currentNumber.textContent;
  if (previousNumber.innerText === "") {
    previousNumber.append(toPreDisplay);
  }
  currentNumber.innerText = "";
  if (operator.innerText !== "") {
    operator.innerText = "";
    operator.append(button.target.innerText);
  } else if (operator.innerText === "") {
    operator.append(button.target.innerText);
  }
}
function forOpeKeyboard(key) {
  let toPreDisplay = currentNumber.textContent;
  if (previousNumber.innerText === "") {
    previousNumber.append(toPreDisplay);
  }
  currentNumber.innerText = "";
  if (operator.innerText !== "") {
    operator.innerText = "";
    operator.append(`${key}`);
  } else if (operator.innerText === "") {
    operator.append(`${key}`);
  }
}
function dot(){
    if(currentNumber.innerText.includes('.'));
    if(!currentNumber.innerText.includes('.')){
    currentNumber.append('.');}
}
//add input to calculator display

//choose a number or operator and append it to display
for (let i of numButtons) {
  i.addEventListener("click", (i) => {
    if(currentNumber.innerHTML.length >= 27) return;
    let toDisplay = i.target.textContent;
    currentNumber.append(toDisplay);
  });
}
clear.addEventListener("click", () => {
  currentNumber.innerText = "";
  previousNumber.innerText = "";
  operator.innerText = "";
});
for (let button of opeButtons) {
  button.addEventListener("click", (button) => {
    forOpe(button);
  });
}


//get the result
function calculate() {
  let result = eval(display.textContent);
  display.append(` = ${result}`);
}
//target operator to direct to correct function and add result to currentNumber

function operate() {
  let goToFunc = operator.innerText;
  let x = +previousNumber.innerText;
  let y = +currentNumber.innerText;
  if (goToFunc === "+") {
    add(x, y);
  }
  if (goToFunc === "X" || goToFunc === "x" || goToFunc === "*") {
    multiply(x, y);
  }
  if (goToFunc === "%") {
    divide(x, y);
  }
  if (goToFunc === "-") {
    subtract(x, y);
  }
  currentNumber.innerText = "";
  operator.innerText = "";
}

//set delete button
function deleteLast() {
  let cutLast = currentNumber.innerText.length;
  let stringdel = currentNumber.innerText.substring(0, cutLast - 1);
  currentNumber.innerText = stringdel;
}
//set keyboard

window.addEventListener("keydown", (e) => {
  e.preventDefault();
  if (e.key >= 0 && e.key <= 9) currentNumber.append(e.key);
  if (
    e.key === "+" ||
    e.key === "-" ||
    e.key === "/" ||
    e.key === "X" ||
    e.key === "x" ||
    e.key === "*"
  )
    forOpeKeyboard(e.key);
  if (e.key === "=") operate();
  if (e.key === "Backspace") deleteLast();
  if (e.key === '.') dot();
});
// for negative numbers
let preNum = previousNumber.innerText;
let opeCont = operator.innerText;
let curNum = currentNumber.innerText;
function negNum(){
    if(curNum ==='') currentNumber.append('-');
}

