let numbers = [];

while (true) {
    
    let numPrompt = prompt('숫자를 입력하세요', '여기에 입력하세요');
    let num = Number(numPrompt);

    if (numPrompt === null || numPrompt === ''){
        break;
    }

    if (isNaN(num)){
        break;
    }

    numbers.push(num);
}


let sum = 0;

for (let number of numbers){
    sum += number;
}

console.log(sum)