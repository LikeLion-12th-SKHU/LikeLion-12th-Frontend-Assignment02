// 조건을 만족하는 함수 sumInput()을 작성
function sumInput() {

    // 입력받은 숫자를 저장할 배열 numbers 생성
    let numbers = [];
    
    // 숫자를 입력 받는 동안 반복
    while(true) {

        // prompt 창을 띄워 사용자에게 숫자를 입력해 달라고 요청
        let input = window.prompt("숫자를 입력해주세요", "");

        // 숫자가 아닌 값, 혹은 빈 문자열을 입력하거나 ‘Cancel’ 버튼을 누를 경우
        if(input === null || input === "" || !isFinite(input)) {
            // 반복문 종료
            break;
        }

        // 입력받은 값들을 배열에 저장
        numbers.push(Number(input));
    }

    // 변수 sum 생성 
    let sum = 0;
    // 배열 numbers의 각각의 요소 number 순회
    for (let number of numbers) {
        // 배열의 요소들의 합 계산
        sum += number;
    }

    // sum 반환
    return sum;
}

// 변수 result에 함수 sumInput 대입
let result = sumInput();
// result 호출
console.log(result);