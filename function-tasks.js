//Take four parameters. Multiply the four numbers and then return the result.
/*
function multiply(num1,num2,num3,num4){
    return num1 * num2 * num3 * num4;
}

console.log(multiply(2,2,2,2));
*/

//Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
/*
function oddEven(num){
    if(num%2===0){
        return num/2;
    }
    else{
        return num *2;
    }
}
console.log(oddEven(7));
*/

//Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
/*
function make_avg (nums){
    let sum = 0;

    for(let i = 0; i < nums.length; i++){
        sum = sum + nums[i];
    }
    
    return sum / nums.length;
}

console.log(make_avg([10,20,30,40,50]))
*/

// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
/*
function count_zero(str){
    let count = 0;
    let find = '0';
    for(let i = 0; i < str.length; i++){
        if(find.includes(str[i])){
            count++;
        }
    }
    return count;
}

console.log(count_zero("010101001010"));
*/

// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
/*
function OddEvenCalc(num){
    if(num%2===0){
        return "Even";
    }else{
        return "Odd";
    }
}
console.log(OddEvenCalc(9));
*/