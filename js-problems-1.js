//Write a function to convert temperature from Celsius to Fahrenheit.
//°F = °C×(9/5)+32

function temperatureConvert (celciusTemp){
    let calc = celciusTemp*(9/5)+32;
    return calc.toFixed(2);
}
console.log(temperatureConvert(10));


//You are given an array of numbers. Count how many times the a number is repeated in the array.

function numberCount(numberPush,find){
    let numbers = [];
    let count = 0;
    for(let i = 0; i < numberPush.length; i++){
        numbers.push(numberPush[i]);
        if(numberPush[i] === find){
            count++;
        }
    }
    return count;
}
console.log(numberCount([12,23,12,12,45], 25));


//Write a function to count the number of vowels in a string.

function vowelCount(str){
    let vowels = ["a", "e", "u", "i", "o"];
    let count = 0;

    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i])){
            count++
        }
    }
    return count;
}
console.log(vowelCount("aaee"));


// Write a function to find the longest word in a given string.


function longestStr(str){
    let word = str.split(" ");
    let longStr = word[0]; //I

    for(let i = 0; i < word.length; i++){
        if(word[i].length > longStr.length){
            longStr = word[i]; //AM // LEARNING // PROGRAMMING //
        }
    }
    return longStr;
}
console.log(longestStr("I am learning Programming to become a programmer")); //Programmer


// Generate random number from 10 to 20
let min =10;
let max = 20;
let randNum = Math.floor(Math.random()* (max - min +1) + min); // random * (max -min + 1) +min //exact range //from 0 to max num: random* (max +1 )

console.log(randNum);