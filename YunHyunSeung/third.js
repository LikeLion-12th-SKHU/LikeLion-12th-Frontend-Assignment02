let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let salariesArray = Object.values(salaries);
let sum = 0;


for (let n = 0; n < salariesArray.length; n++){
    sum += salariesArray[n]
}

console.log(sum)
