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
function calcul(operation,num1,num2) {
    switch(operation) {
        case 'add':
            return num1+num2;
            break;
        case 'subtract':
            if (num1>=num2){return num1-num2;}
            else {return num2-num1;}
            break;
        case 'mult':
            return num1+num2;
            break;
        case 'div':
            
        default:
        return 0;
    }
}
