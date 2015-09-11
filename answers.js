// returns the first character of the string 
function FirstChar(str) {
    if (typeof str === 'string') {return str[0];}
    else {console.log("Please provide a string as input");}
};

// returns the last character of a string
function LastChar(str) {
    if (typeof str === 'string') {return str[str.length - 1];}
    else {console.log("Please provide a string as input");}
};

// returns the character at the position represented by the number
function charPosition(str,num) {
    if (typeof str === 'string' && typeof num === 'number'){return str[num];}
    else {console.log("Please provide a string as the first input and a number as a second input");}
}

// return the sum of two numbers
function sum(num1,num2){
    if (typeof num1 === 'number' && typeof num2 === 'number') {return num1 + num2;}
    else {console.log("Please provide numbers or the two input");}
}

// return multiplication of two numbers
function multiply(num1,num2){
    if (typeof num1 === 'number' && typeof num2 === 'number') {return num1 * num2;}
    else {console.log("Please provide a number for each input");}
}

/* If the string is ‘add’, then return the sum of the numbers. If the string is ‘subtract’, return the difference. 
If the string is ‘mult’, return the product. If the string is ‘div’, return the ratio. 
Otherwise return 0.*/

// was more fun to me using switch/case rather than using if/else...
function calcul(operation,num1,num2) {
    var result;
    if (typeof num1 === 'number' && typeof num2 === 'number' && typeof operation === 'string'){
        switch(operation) {
            case 'add':
                result=num1+num2;
                break;
            case 'subtract':
                result=Math.abs(num1-num2);
                break;
            case 'mult':
                result=num1*num2;
                break;
            case 'div':
                result=Math.max(num1,num2)/Math.min(num1,num2);
                break;
            default:
            result=0;
        }
        return result;
    }
    else {console.log("Please provide an operation name ('add' or 'substract' or 'mult' or 'div') and two numbers");}
}

//returns the string repeated that many number of times
function repeatText(text,repeat){
    var returnMessage=[];
    var times = Math.abs(repeat);
    if (typeof text === 'string' && typeof repeat === 'number' && repeat > 0){
        while(times){
            times--;
            returnMessage.push(text);
        }
        return returnMessage.join('');
    }
    else {console.log("Please provide a string as the first input and a number (positive) as a second input");}
}

// Reverse a string
function reverse(str){
    var reverseStr=[];
    if (typeof str === 'string'){
        for (var i = 1; i <= str.length; i++){
            reverseStr.push(str[str.length-i]);
        }
        return reverseStr.join(''); 
    }
    else {console.log("Please provide a string as input");}
}