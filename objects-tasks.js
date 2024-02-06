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


//For this object below add a property named passenger capacity with value 5

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

//car['passengerCapacity'] = 5; //bracket notation
car.passengerCapacity =5; //dot notation

console.log(car)


//Display the physics marks as output.

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



//Count the number of properties.

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



//Loop through an object and print the key-value pairs with their types

let myObject = {
name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};

for( let prop in myObject){
    console.log(`${prop} : ${myObject[prop]} | type: ${typeof(myObject[prop])}`);
}


//Nested object practice
const myDetails = {
    myName : {
        firstName : "Shejan",
        secondName : "Mahamud",
        thirdName : "Jihad",
    },
    fathersName: "Abdul Jalil",
    mothersName : "Maleka Begum",
    education : {
        school : "BIAM Laboratory School & College, Naogaon",
        college:{
            firstCollege: "Noagoan Govt. College, Naogaon",
            scndCollege: "Rajshahi College, Naogaon",
        },
        results:{
            jsc: 5.00,
            ssc: 5.00,
            hsc: 5.00,
        },
        department:{
            ssc: "Science",
            hsc: "Arts",
            honours: "BBA in Management"
        },
        skills: ["HTML", "CSS", "TAILWIND CSS", "BOOTSTRAP", "GIT", "JS"],
    }
}

myDetails.isWebDeveloper = true;


    for(let prop in myDetails.myName){
        console.log(`${prop} : ${myDetails.myName[prop]}`)
    }
    console.log(`fathersName : ${myDetails.fathersName}`);
    console.log(`mothersName : ${myDetails.mothersName}`);
    console.log(`school : ${myDetails.education.school}`);
    for(let prop in myDetails.education.college){
        console.log(`College : ${prop} : ${myDetails.education.college[prop]}`)
    }
    for(let prop in myDetails.education.results){
        console.log(`Results : ${prop} : ${myDetails.education.results[prop]}`);
    }
    for(let prop in myDetails.education.department){
        console.log(`Department : ${prop} : ${myDetails.education.department[prop]}`);
    }
    let skills = "";
    for(let i = 0; i < myDetails.education.skills.length; i++){
        if(i === 0){
            skills = `${skills}${myDetails.education.skills[i]}`
        }else{
            skills = `${skills},${myDetails.education.skills[i]}`
        }
    }
    console.log(`Skills : ${skills}`);

    const myObj = {
        firstName : "Shejan",
        scndName : "Mahamud",
        lastName : "Jihad",
        fullName : function(){
            return `${this.firstName} ${this.scndName} ${this.lastName}`
        }
    }
    
    console.log(myObj.fullName());
    */

    const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];
    for(let i = 0; i < phones.length; i++){
        phones[i].isAuthentic=true;
    }


    console.log(phones)