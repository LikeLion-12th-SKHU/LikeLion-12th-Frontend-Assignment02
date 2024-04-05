// 요소 “Jazz”, "Blues"가 있는 styles 배열 생성
let styles = ["Jazz", "Blues"];
console.log(styles);

// "Rock-n-Roll"을 배열 끝에 추가
styles.push("Rock-n-Roll");
console.log(styles);

// 배열 정 중앙에 있는 요소를 "Classics"로 바꿈
const middleIndex = Math.floor(styles.length/2);
styles[middleIndex] = "Classics";
console.log(styles);

// 배열의 첫 번째 요소를 꺼내서 출력
styles.shift(styles);
console.log(styles);

// "Rap"과 "Reggae"를 배열의 앞에 추가
styles.unshift("Rap", "Reggae");
console.log(styles);