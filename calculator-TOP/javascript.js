let container = document.getElementById("calBody");
let previousNumber = document.querySelector("#preNum");
let currentNumber = document.getElementById("currentNum");
let numButtons = document.querySelectorAll(".num");
let clear = document.getElementById("Clear");
let opeButtons = document.getElementById("signs").querySelectorAll("button");
let getResult = document.getElementById("equal");
let operator = document.getElementById("opeDiv");
//classes to operators
opeButtons.forEach((i) => i.classList.add("operators"));

//operators functions
function add(x, y) {
  let result = x + y;
  currentNumber.innerText = result
}
function subtract(x, y) {
  let result = x - y;
  currentNumber.innerText = result
}
function multiply(x, y) {
  let result = x * y;
  currentNumber.innerText = result
}
function divide(x, y) {
  let result = x / y;
  currentNumber.innerText = result
}
//add input to calculator display

//choose a number or operator and append it to display
for (let i of numButtons) {
  i.addEventListener("click", (i) => {
    let toDisplay = i.target.textContent;
    currentNumber.append(toDisplay);
  });
}
clear.addEventListener("click", () => {
  currentNumber.innerText = "";
  previousNumber.innerText = "";
  operator.innerText = "";
});
for (let i of opeButtons) {
  i.addEventListener("click", (i) => {
    let toPreDisplay = currentNumber.textContent;
    previousNumber.append(toPreDisplay);
    currentNumber.innerText = "";
    if (operator.innerText !== "" ) {
      operator.innerText = "";
      operator.append(i.target.innerText);
    } else if (operator.innerText === "") {
      operator.append(i.target.innerText);
    }
  });}

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
  if (goToFunc === "+") {add(x,y)}
  if (goToFunc === "X") {multiply(x,y)}
  if (goToFunc === "%") {divide(x,y)}
  if (goToFunc === "-") {subtract(x,y)}
  previousNumber.innerText = "";
  operator.innerText = "";
}

//set delete button
function deleteLast(){
    let cutLast = currentNumber.innerText.length
    let stringdel = currentNumber.innerText.substring(0,cutLast-1)
    currentNumber.innerText = stringdel
}
