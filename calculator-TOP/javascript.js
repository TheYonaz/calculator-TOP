let container = document.getElementById('calBody')
let display = document.querySelector('#calDisplay')
let numButtons = document.querySelectorAll('.num')
let clear = document.getElementById('Clear')
let opeButtons = document.getElementById('signs').querySelectorAll('button')

//classes to operators
opeButtons.forEach(i => i.classList.add('operators'))

//operators functions
function add(x,y){
    let result = x+y;
    return result;
}
function subtract(x,y){
    let result = x-y;
    return result;
}
function multiply(x,y){
    let result = x*y;
    return result;
}
function divide(x,y){
    let result = x/y;
    return result;
}
//add input to calculator display


//choose a number or operator and append it to display
for ( let i of numButtons){
    i.addEventListener('click',(i) =>{
    let toDisplay = i.target.textContent
    display.append(toDisplay)}
    )
}
clear.addEventListener('click',() => {
    display.innerText = ''
});
for ( let i of opeButtons){
    i.addEventListener('click',(i) =>{
    let toDisplay = i.target.textContent  
        if(toDisplay === 'X'){
            display.append('*')
        }else{
    display.append(toDisplay)}}
)};

//get the result
let getResult = document.getElementById('equal')
getResult.addEventListener('onclick',(i) => display.append(eval(display))

)









    
