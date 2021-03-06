// returns the first character of the string 
function FirstChar(str) {
    if (typeof str === 'string') {return str[0];}
    else {return "Please provide a string as input";}
};

// returns the last character of a string
function LastChar(str) {
    if (typeof str === 'string') {return str[str.length - 1];}
    else {return "Please provide a string as input";}
};

// returns the character at the position represented by the number
function charPosition(str,num) {
    if (typeof str === 'string' && typeof num === 'number'){return str[num];}
    else {return "Please provide a string as the first input and a number as a second input";}
}

// return the sum of two numbers
function sum(num1,num2){
    if (typeof num1 === 'number' && typeof num2 === 'number') {return num1 + num2;}
    else {return "Please provide numbers or the two input";}
}

// return multiplication of two numbers
function multiply(num1,num2){
    if (typeof num1 === 'number' && typeof num2 === 'number') {return num1 * num2;}
    else {return "Please provide a number for each input";}
}

/* If the string is ‘add’, then return the sum of the numbers. If the string is ‘subtract’, return the difference. 
If the string is ‘mult’, return the product. If the string is ‘div’, return the ratio. 
Otherwise return 0.*/

// was more fun to me using switch/case rather than using if/else...
function calcul(operation,num1,num2) {
    var result;
    if (typeof num1 === 'number' && typeof num2 === 'number'){
        switch(operation) {
            case 'add':
                result=num1+num2;
                break;
            case 'subtract':
                result=num1-num2;
                break;
            case 'mult':
                result=num1*num2;
                break;
            case 'div':
                result=num1/num2;
                break;
            default:
            result=0;
        }
        return result;
    }
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
    else {return "Please provide a string as the first input and a number (positive) as a second input";}
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
    else {return "Please provide a string as input";}
}

//returns the factorial of a number
function factorial(num){
    var result = 1;
    if (typeof num === 'number') {
        var numAbs = Math.abs(num); 
        
        if (!numAbs) {return result;}
        else {
            for (var i = 1 ; i <= numAbs ; i++) {
                result *= i;
                }
            }
        return result;
        }
    else {return "Please provide a number as input";}
}

/*returns the longest word in that phrase. 
If the phrase contains more than one such word, return the first occurrence. Test your function on a few inputs.*/
function longestWord(phrase){
    
    var wordList = [];
    
    if (typeof phrase === 'string'){
        wordList = phrase.split(/[\s,./'\!}{"|?><+_)(*&^!\[\]]/g).sort(function(a,b) {  
        if (a.length > b.length) return -1;
        if (a.length < b.length) return 1;
        return 0;
        }
        );
        
        return wordList.shift();
    }
    else return 'Please provide a phrase';
}

/* returns the same phrase with every word capitalized. For example, if you pass your function "hello world", 
it should return "Hello World" and if you pass it "HELLO WORLD" or even "HeLLo WoRLD", it will also return "Hello World". 
Test your function of a few inputs.*/
function capitalize(phrase){
    
    var wordList = [];
    
    if (typeof phrase === 'string'){
        wordList = phrase.split(' ');
        
        wordList.forEach(function(element, index) {
            wordList[index] = element[0].toUpperCase() + element.substr(1).toLowerCase();
        });
    return wordList.join(' ');
    }
    else return 'capitalize requires a text input';
}

//returns the largest number of the array. Test your function on a few inputs
function largestNumber(arrayOfNumber){
    if (arrayOfNumber instanceof Array){
        
        arrayOfNumber = arrayOfNumber.sort(function(a,b) {
                if (typeof a != 'number') return 1;
                if (typeof b != 'number') return -1;
                return 0;
            });
        
        console.log(arrayOfNumber);
            
        arrayOfNumber = arrayOfNumber.sort(function(a,b) {
                if (a > b) return -1;
                if (a < b) return 1;
                return 0;
            });
        
        console.log(arrayOfNumber);
       
        var result = arrayOfNumber.shift();
        if (typeof result ==='number') return result;
        else return 'the array does not contain any number';
    }
}


//returns a filtered array. The filtered array should only contain the truthy values from the initial array
function filterArray(arrayToFilter){

    var filteredArray=[];

    if (arrayToFilter instanceof Array){
        filteredArray = arrayToFilter.filter(function(element){
            if (element) return true;
            else false;
        });
        
        return filteredArray;
    }
}

//returns the sum of all the numbers in the array
function sumNumbersInArray(arrayOfNumbers){
    var result = 0;
    
    if (arrayOfNumbers instanceof Array){
        arrayOfNumbers.forEach(function(element){
            if (typeof element ==="number") result += element;
        });
        
        return result;
    }
}

/*takes two arrays, and returns an array of all elements that are only 
in one array. For example, with [1,2,3] and [1,2,4,5] the function 
should return [3,4,5]*/

function elementsInCommon(array1,array2){

	var result = [];

    if (array1 instanceof Array && array2 instanceof Array) {
    	array1.sort();
    	array2.sort();

    	array1.forEach(function(element,index){
    		if (element === array2[index]) result.push(element);
    	});

    return result;
    }
}