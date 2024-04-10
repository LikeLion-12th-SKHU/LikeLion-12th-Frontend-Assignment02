function isEmpty(obj) {
  //obj를 변수로 받음
  for (let key in obj) {
     //for... in루프가 실행되면서 객체가 비어있지 않으면 return false를 만나 함수가 종료됨(객체가 비어있지 않음을 나타냄)
      return false;
    }
    return true;
    //for...in루프가 종료되고도 함수가 실행중이라면 return true가 실행되어 함수가 true를 반환함(객체가 비어있음을 나태냄)
  }