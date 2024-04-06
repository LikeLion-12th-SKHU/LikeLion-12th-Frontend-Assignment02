

function isEmpty(Empty) {

    //객체에 프로퍼티가 있으면 false 없으면 true 
    //for ...in 문을 MDN 에서 찾아서 사용해보았습니다.
    for ( let E in Empty){
        return false;
    }
    return true;
}

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false