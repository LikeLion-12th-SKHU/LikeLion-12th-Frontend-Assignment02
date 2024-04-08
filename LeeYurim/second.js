function sumInput() {
//빈 배열을 만들기
    let numbers = [];
  //값을 계속 받아야 하니 무한 루프를 생성
    while (true) {
  
      let value = prompt("숫자를 입력해 주세요.", 0);
  //숫자 입력받기
      if (value === "" || value === null || !isFinite(value)) break;
  //숫자를 입력받았을 때 비어있거나, 취소되었거나, 유효한 숫자가 아닌 경우 종료함
      numbers.push(+value);
    }
  //입력받은 값을 숫자로 변환 후, 배열에 넣음
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }//입력받은 숫자들의 합을 구함
    return sum;
  }
  //합 반환
  alert( sumInput() );
  //알림창으로 표시