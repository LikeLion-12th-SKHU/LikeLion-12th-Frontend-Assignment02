let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function sumSalaries(salaries) {
    let sum = 0;
    for (let employee in salaries) {
        sum += salaries[employee];
    }
    return sum;
}

let sum = sumSalaries(salaries)
console.log(sum)