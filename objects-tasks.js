//Access the golden rod color value in output.
/*
const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden red": '#daa520',
};

// let newColor = Object.values(colors); // for only values
// let newColor = Object.keys(colors); // for only keys

let newColor = colors["golden red"];
console.log(newColor);
*/

//For this object below add a property named passenger capacity with value 5
/*
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

//car['passengerCapacity'] = 5; //bracket notation
car.passengerCapacity =5; //dot notation

console.log(car)
*/

//Display the physics marks as output.
/*
const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};

//console.log(student.physics.marks); //using dot notation
//console.log(student["physics"]["marks"]); //using bracket notation
console.log(student["physics"].marks); //use dot and bracket notation
*/


//Count the number of properties.
/*
let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
//using for loop
let count = 0;
for(let prop in student){
    count++;
}
console.log(count);
//using object.key method
console.log(Object.keys(student).length);
*/


//Loop through an object and print the key-value pairs with their types
/*
let myObject = {
name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};

for( let prop in myObject){
    console.log(`${prop} : ${myObject[prop]} | type: ${typeof(myObject[prop])}`);
}
*/