function sumInput() { // sumInput 함수는 사용자로부터 숫자를 입력받아 배열에 저장하고, 다시 내뱉는 역할을 한다
    let numbers = []; //빈배열 numbers를 만들어준다

    while (true) {
        let input =  window.prompt("숫자를 넣으세요:", ""); // prompt()함수를 사용하면 사용자에게 안내창 prompt("숫자를 넣으세요:", "")을 보여주고 입력받은 값을 input에 저장한다.
        if (input === "" || input === null || isNaN(input)) break; // 숫자가 아닌 값이나 빈문자열을 입력하거나 cancel 버튼을 누르면 멈춰야해서 해당 조건문을 넣어줍니다
        numbers.push(Number(input)); // input 받은 값을 계산해야하닌깐 number(input)으로 숫자 변환하고 푸쉬해서 배열에 넣는다
    }

    let sum = 0; //여기에서 저장된 숫자를 합할것이다. 
    for (let number of numbers) { //numbers 배열의 숫자를 순차적으로 number 변수에 할당하면서 반복작업을 해준다
        sum += number; // sum에 number 값을 더한뒤 다시 sum 함수에 저장하는 덧셈대입연산자
    }

    return sum;
}

// 함수 호출하여 결과 출력
let total = sumInput();
console.log("입력하신 숫자의 총 합은 " + total + "입니다.");
