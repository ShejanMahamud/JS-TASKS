////////// TASK - 1 //////////
/*
function multiply (a,b,c,d){
    return a*b*c*d;
}
console.log(multiply(2,2,2,2));
*/
////////// TASK - 2 //////////
/*
function evenOdd (numOne){

    if(numOne%2!==0){
        return numOne*2;
    }else{
        return numOne/2;
    }

}
console.log(evenOdd(10))
*/
////////// TASK - 3 //////////


/*
function forLoop(input1, input2){
    for (let i = 1; i<=input2; i++){
     console.log(input1);
    }
    return input1+" "+"Printed"+" "+input2+" "+"Times";
}
let x = forLoop("I love You Joly", 20)

console.log(x)
*/

// function even(n){
//     let sum = 0;
//     for (let i = 1; i <= n ; i++){
//         sum += i;
//     }
//     return sum;
// }
// console.log(even(10));

// function multiplicationTable(multiply){
//     let num=1;
//     while(num<=10){
//         const calc = multiply * num;
//         console.log(multiply + "*" + num + "=" + calc);
//         num++;
//     }
    
// }
// multiplicationTable(3);

let userInput_1 = parseFloat(prompt("What you want to do?\n1. Max Number Find\n2. Min Number Find"));

if (userInput_1 == 1) {
    let maxArray = [];
    let userInput_2 = prompt("Enter Numbers separated by commas(,)");
    let numbers = userInput_2.split(',')
    
    for(let i =0; i<numbers.length; i++){
        maxArray.push(parseFloat(numbers[i]))
    }

    let maxNum = maxArray[0];

    for(let i = 1; i < maxArray.length; i++){
        if(maxArray[i]>maxNum){
            maxNum = maxArray[i];
        }
    }
    document.write(maxNum);
}
