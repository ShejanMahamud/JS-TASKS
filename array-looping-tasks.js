// Write a JavaScript code to reverse the array colors without using the reverse method.
/*
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
let rev_colors = [];
for(let i = 0; i < colors.length; i++){
    rev_colors.unshift(colors[i]);
}

console.log(rev_colors);
*/

//Write a JavaScript code to get the even numbers from an array using any looping technique.
/*
const numbers = [12, 98, 5, 41, 23, 78, 46];

let even_num = [];

for( let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
        even_num.push(numbers[i]);
    }
}
console.log(even_num);
*/


// Use a for...of loop to concatenate all the elements of an array into a single string.
/* 
let numbers = ['Tom', 'Tim', 'Tin', 'Tik'];

let str = "";

for(let elements of numbers){
    str = str+elements;
}
console.log(str);
*/

//Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
/*
const statement = 'I am a hard working person';

let statement_splited = statement.split(" ");
let new_statement = "";

for(let i = statement_splited.length - 1; i >= 0; i-- ){
    new_statement = new_statement + statement_splited[i] + " "; 
}
console.log(new_statement.trim());
*/

