var readlineSync = require('readline-sync');

var userName = readlineSync.question ('may i have your name? ')
console.log('Hi ' + userName + '!');

var num1 = readlineSync.questionInt("Enter first number: ");
var num2 = readlineSync.questionInt("Enter second number: ");
var enteredOperator = readlineSync.question("Enter an Operation to Perform add, sub, mul, div, ");

function addTwo (num1, num2){
    return num1 + num2;
}

function subTwo (num1, num2){
    return num1 - num2;
}

function mulTwo (num1, num2){
    return num1 * num2;
}

function divTwo (num1, num2){
    return num1 / num2;
}


function Calculator (num1, num2, enteredOperator){
    if (enteredOperator == "add"){
      console.log (" Adding the number " + num1 + " With " + num2 + " gives the Result: " + addTwo (num1, num2));
}
  else if (enteredOperator == "sub"){
    console.log (" Subtracting the number " + num1 + " With " + num2 + " gives the Result: " + subTwo (num1, num2));
}
else if (enteredOperator == "mul"){
    console.log (" Multipling the number " + num1 + " With " + num2 + " gives the Result: " + mulTwo (num1, num2)); 
}
else if(enteredOperator == "div"){
    console.log (" Dividing the number " + num1 + " With " + num2 + " gives the Result: " + divTwo (num1, num2));
}
else{
   console.log ("'Error'?! Please Use the following Operations:  add, sub, mul, div") 
}
}


Calculator( num1, num2, enteredOperator);