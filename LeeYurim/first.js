let styles = ["Jazz", "Blues"];
//배열 선언

styles.push("Rock-n-Roll");
//배열의 맨 끝에 Rock-n-Roll을 추가

styles[Math.floor((styles.length - 1) / 2)] = "Classics";
//styles의 중간 요소를 Classics로 변경 (styles.length-1 / 2 이 부분은 배열의 길이를 계산하는 부분으로 배열의 길이 styles.length에서 1을 뺀 값은 배열의 마지막 인덱스, 이걸 2로 나누면 배열의 중간 인덱스가 나옴)

alert( styles.shift() );
//배열의 첫 번째 요소를 삭제(Jazz삭제)하고 alert창으로 표시

styles.unshift("Rap", "Reggae");
//배열의 맨 앞에 Rap, Reggae추가