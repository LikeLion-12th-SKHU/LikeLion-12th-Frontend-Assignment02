let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
  
let sum = 0; // sum을 0으로 초기화
  
// salaries 객체의 모든 월급
for (let key in salaries) {
sum += salaries[key];
  }

  
console.log(sum); 
  