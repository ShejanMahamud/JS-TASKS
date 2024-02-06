// let array = [10,20,30,40,50];
// // let sum = 0;

// // for(let i = 0; i < array.length; i++){
// //     sum = sum + array[i];
// // }
// //const newArray = array.filter(myFunction)

// function myFunction(total, values){
// console.log(total)
// }
// const newArray = array.reduce(myFunction);
// console.log(newArray);



//write a function that takes an object as input and returns an array of all the keys in the object.

/*
function objToArr(myobj){
    const keyArray = [];
    const valueArray = [];
 for(const keys in myobj){
    keyArray.push(keys);
    valueArray.push(myobj[keys]);
 };
 return [keyArray, valueArray]
}

console.log(objToArr({
    name : "Shejan",
    age : 23,

}))
*/
//Write a function that compares two objects and returns true if they have the same properties and values, false otherwise.
/*
function objCompare(myObjOne, myObjTwo){
    const keysOne = Object.values(myObjOne);
    const keysTwo = Object.values(myObjTwo);

    if(keysOne.length !== keysTwo.length){
        return false ;
    }
    
    for(const keys in myObjOne){
        if(myObjOne[keys] !== myObjTwo[keys]){
            return false;
        }
    }
    return true;

    
}
const obj1 = {
    name: "Shejan",
    age : 23,
}
const obj2 = {
    name: "Shejan",
    age : 23,
}
console.log(objCompare(obj1, obj2));
*/

//Given an array of numbers, create a new array where each element is the square of the corresponding element in the original array.
/*
function squareNum(arr){
    const newArr = arr.map(function(value){
        return value *2
    })
    return newArr;
}

console.log(squareNum([10,20,30,40]))
*/

//Write a function that takes an array of numbers and returns the largest number in the array.

function maxNum(arr){
    return Math.max.apply(null,arr);
}

console.log(maxNum([10,30,100]))