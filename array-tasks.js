// reverse a array using for of loop
/*
const numbers = [10,20,30,40,50];

let rev_num = [];

for(let num of numbers){
    rev_num.unshift(num);
}
console.log(rev_num) */

// reverse a array using for loop
/*
const numbers = [10,20,30,40,50];

let rev_num = [];

for(let i = 0; i < numbers.length ; i++){
    rev_num.unshift(numbers[i]);
}
console.log(rev_num); */

//reverse a array with reverse loop
/*
const numbers = [10,20,30,40,50];

let rev_num = [];

for (let i = numbers.length -1; i >= 0; i--){
    rev_num.push(numbers[i]);
}
console.log(rev_num); */

// reverse a string with for loop
/*
let str = "Shejan Mahamud";

let str_array = str.split("");

let rev_str = [];
for(let i = 0; i < str_array.length; i++){
    rev_str.unshift(str_array[i]);
}
console.log(rev_str.join("")) */

// reverse a string using empty string and for loop
/*
let str = "Shejan Mahamud";
let str_empty = "";
// d+ "" = d;
// u + d = du;
// m + du = dum
for(let i = str.length - 1; i >= 0; i--){
    str_empty = str_empty + str[i];
}
console.log(str_empty);
*/


