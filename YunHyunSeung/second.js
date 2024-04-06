while (true) {

    let numPrompt = prompt('숫자를 입력하세요', '여기에 입력하세요');
    let num = Number(numPrompt);

    if (numPrompt === null || numPrompt === '')
        break;

    
    console.log(num);
}