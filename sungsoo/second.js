function sumInput() {
    let arr = [];
    let input;
    let sum = 0;


    while ((input = window.prompt("숫자를 입력해주세요."))) {
        if ((Number(input)) || input == 0) {
            arr.push(Number(input));
            console.log(arr);
           } else {
            break;
           }
    }

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    
    return sum;
  }
  
let result = sumInput();
console.log(result);



  