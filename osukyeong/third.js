// 모든 팀원의 월급에 대한 정보를 담고 있는 객체 salaries
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

// 모든 팀원의 월급을 더해서 저장할 변수 sum 생성
let sum = 0;

// 객체 salaries의 key 순회
for (let key in salaries) {
    // 각각의 key에 해당하는 value값을 sum에 더하여 저장
    sum += salaries[key];
}

// sum 출력
console.log(sum);