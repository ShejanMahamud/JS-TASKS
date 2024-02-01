const numbers = [10,20,30,40,50];

let rev_num = [];

for(let i = 0; i < numbers.length ; i++){
    rev_num.unshift(numbers[i]);
}
console.log(rev_num);