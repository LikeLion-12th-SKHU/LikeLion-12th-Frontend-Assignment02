/*객체에 프로퍼티가 하나도 없는 경우 true, 
그렇지 않은 경우 false를 반환해주는 함수 isEmpty(obj)를 만들어 보세요.

아래와 같이 동작해야 합니다.
(힌트 : 객체의 프로퍼티가 있는지 어떻게 판별하면 좋을까요?)

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false*/


function isEmpty(obj) {
    for (let n in obj) {
      return false;
    }
    return true;
}