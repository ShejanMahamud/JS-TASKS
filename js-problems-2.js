//Find the lowest number in the array below.

const nums = [167, 190, 120, 60, 165, 137];
let lowNum = nums[0];
for(let i = 0; i < nums.length; i++){
    if(nums[i] < lowNum){
        lowNum = nums[i];
    }
}
console.log(lowNum);


//Find the friend with the smallest name.

const frndName = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

let smallName = frndName[0];

for(let i = 0; i < frndName.length; i++){
    if(frndName[i].length < smallName.length){
        smallName = frndName[i];
    }
}
console.log(smallName);



//You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

    const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];

function findAveragePhonePrice(phones){
    let sum = 0;
    let averagePrice = 0;

    for(let i = 0; i < phones.length; i++){
        sum = sum + phones[i].price;
        averagePrice = sum / phones.length;
    }
    return Math.round(averagePrice);
}

console.log(findAveragePhonePrice(phones))


//For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

 const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];

        let currentSalary = 0;
        let companyProvidedSalary = 0;

        for(let i = 0; i < employees.length; i++){
            currentSalary = employees[i].experience * employees[i].increment + employees[i].starting;
            employees[i].starting = currentSalary;
            companyProvidedSalary = companyProvidedSalary + employees[i].starting;
        }
        console.log(companyProvidedSalary);



    //Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

    let laptopPrice = 35000;
    let tabletPrice = 15000;
    let mobilePrice = 20000;

    function calculateElectronicsBudget(product1, product2, product3){
        let electronicsPrice = laptopPrice + tabletPrice + mobilePrice;
        let moneyIHave = product1 + product2 + product3;

        let requiredPrice = electronicsPrice - moneyIHave;
        let moneyGetBack = moneyIHave - electronicsPrice;

        if(electronicsPrice > moneyIHave){
            return `You need more ${requiredPrice} Taka`;
        }else if(moneyIHave > electronicsPrice){
            return `you will get back ${moneyGetBack} Taka wit products`
        }
        else{
            return `Your Shopping Done!`
        }
    }
    console.log(calculateElectronicsBudget(35000,20000,15000))