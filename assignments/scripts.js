
// gathers the entire element
var display = document.getElementById("display");

// num1 one is always gathered from the user
let num1 = "";
// num2
let num2 = "";
// operator is set to an empty string to start
let operator ="";

// this function stores our first number pressed into a variable and displays it 
function press(num){
    num1 += num;
    display.innerHTML = num1;
}

// this function stores our operator and moves num1 into num2 and opens up num1 
function setOP(symbol){
    operator = symbol;
    num2 = num1;
    num1 = "";
    return operator;
}

// this function clears all previous functions
function clr(){
    display.innerHTML = "0";
    num1 = "";
    num2 = "";
    op ="";
}

// this function does the calculating and displays the result, then resets the operator in the case of more calculation
function calculate(){
    let x = parseFloat(num1);
    let y = parseFloat(num2);
    let result = 0;
    switch(operator){
        case "+":
            result = y + x;
            break;
        case "-":
            result = y - x;
            break;
        case "*":
            result = y*x;
            break;
        case "/":
            result = y/x;
            break;
    }    
    clr();
    display.innerHTML = result;
}