let styles = ["Jazz", "Blues"];
console.log(styles);

styles.push("Rock-n-Roll");
console.log(styles); 

// 3. 배열 정 중앙에 있는 요소를 "Classics"로 변경
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
console.log(styles); 

// 배열의 첫 번째 요소를 꺼내 출력
console.log(styles.shift()); 

// 5. "Rap"과 "Reggae"를 배열의 앞에 추가
styles.unshift("Rap", "Reggae");
console.log(styles); 
