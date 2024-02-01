//Count how many times a string has the letter a
/*
function letterCount(str, letter){
    let count =0;
    for(let i = 0; i < str.length; i++){
        if(str[i].includes(letter)){
            count++;
        }
    }
    return count;
}

console.log(letterCount("aaaa", "a"));
*/

//Count how many times a string has the letter a or A
/*
function letterCount(str, letter){
    let count =0;
    for(let i = 0; i < str.length; i++){
        if(str[i].includes(letter)){
            count++;
        }
    }
    return count;
}

console.log(letterCount("A", "A"));
*/

//Check whether a string contains all the vowels a, e, i, o, u
/*
function vowelChcker(str){
  const vowelList = ["a", "e", "i", "o", "u"];
    let isVowel = false;
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str.includes(vowelList[i])){
            count++;
        }
        if(count ===5){
            isVowel = true;
        }
    }
    return isVowel;
}
console.log(vowelChcker("S"));
*/

//If a given string has either x, replace x by y. if the given string has X, replace it by Y.
/*
function strReplace(str){
    if(str.includes("x")){
       str = str.replace("x","y");
    }else if(str.includes("X")){
       str = str.replace("X", "Y");
    }
    return str;
}
console.log(strReplace("ShejanX"));
*/

//Capitalize Every first Letter of each word in a String
/*
function letterCapitalize(str){
 let word = str.split(" ");
 for(let i = 0; i < word.length; i++){
    word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);

 }
 return word.join(" ");
}
console.log(letterCapitalize("i love you johu"))
*/

// let sum =0;
// let count = 0;
// let numbers = [7,-5,6,-3.4,4.6,12];
// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i]>0){
//         count++;
//         sum+=numbers[i];
//     }
// }
// let avarage = sum / count;
// console.log(count + " valores positivos");
// console.log(avarage.toFixed(1));