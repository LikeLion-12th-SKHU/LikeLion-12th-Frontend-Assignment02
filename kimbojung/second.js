// 빈 배열을 생성
let numbers = [];

// 무한 루프 사용하여 입력하기
while (true) {
  
  let input = window.prompt("숫자를 입력해 주세요");

 if (input === null || input === "") {
    break;
  }

  
  numbers.push(Number(input)); }



console.log(numbers);