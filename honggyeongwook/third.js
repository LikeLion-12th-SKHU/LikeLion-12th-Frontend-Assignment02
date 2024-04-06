let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;

for(let number in salaries){
    sum += salaries[number];
}

console.log(sum);