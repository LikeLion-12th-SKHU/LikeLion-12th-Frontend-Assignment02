// 빈 배열을 생성
let number = [];

// 무한 루프를 사용하여 사용자로부터 입력.
while (true) {
  //  결과를 변수에 저장합니다.
  let input = window.prompt("숫자를 입력해 주세요 (종료는 빈 문자열이나 취소를 누르기)");

  // 사용자가 입력을 취소하거나 빈 문자열을 입력한 경우 루프를 종료합니다.
  if (input === null || input === "") {
    break;
  }

  // 입력받은 값을 숫자로 변환
  let number = Number(input);

  // 변환된 값이 실제 숫자인지 확인합니다. isNaN 함수를 사용하여 숫자가 아니면 true를 반환
  // 입력 값이 공백인 문자열일 경우 Number 변환 시 0으로 처리 원래 입력값이 공백인지도 확인
  if (!isNaN(number) && input.trim() !== "") {
    // 숫자인 경우 배열에 추가
  numbers.push(number);
  } else {
    // 숫자가 아닌 경우 사용자에게 경고
    alert("유효한 숫자를 입력해 주시길 바랍니다.");
  }
}

// 배열에 저장된 값들을 콘솔에 출력합니다.
console.log(number);
