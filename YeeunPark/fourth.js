// 객체에 프로퍼티가 하나도 없는 경우 true, 
// 그렇지 않은 경우 false,
//프로퍼티가 object가 아니거나 null인 경우 console.log("값이 유효하지 않습니다")를 반환해주는 함수 isEmpty(obj)를 만들어 보세요.
// 아래와 같이 동작해야 합니다.
// (힌트 : 객체의 프로퍼티가 있는지 어떻게 판별하면 좋을까요?)
// let schedule = {};
// alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
// alert( isEmpty(schedule) ); // false
// chedule["test"] = null;
// console.log(isEmpty(schedule)); //값이 유효하지 않습니다

function isEmpty(obj) {
    for (let i in obj) {
        if (typeof obj[i] !== 'object' || obj[i] === null) {
            return;
        }
        return false;
    }
    return true;

}

let schedule = {};
console.log(isEmpty(schedule));

schedule["8:30"] = "get up";
console.log(isEmpty(schedule));

schedule["test"] = null;
console.log(isEmpty(schedule));