/*아래 조건을 만족하는 함수 sumInput()을 작성해 봅시다.

prompt 창을 띄워 사용자에게 숫자를 입력해 달라고 요청한 후, 
입력받은 값들을 배열에 저장합니다.
(힌트: window.prompt에 대해 공부해 보세요!)

숫자가 아닌 값, 혹은 빈 문자열을 입력하거나 ‘Cancel’ 버튼을 누르면 질문을 멈춥니다.
배열 요소의 합을 계산하고 리턴합니다.
주의: 숫자 0은 유효한 숫자이므로, 사용자가 0을 입력하더라도 질문이 멈추지 말아야 합니다.*/
        
function sumInput(){
   let arr = [];
   while(true){
      let n = prompt("숫자를 입력해주세요.","0");
      if(n === ""||n === null||!isFinite(n)) break;
      arr.push(Number(n));
   }
  
   let sum = 0;
   for (let i of arr) {//for...of는 배열 사용
     sum += i;
   }
   return sum;
}

alert(sumInput());
