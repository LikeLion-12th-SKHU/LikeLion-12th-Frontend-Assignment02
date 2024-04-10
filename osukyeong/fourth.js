// 객체에 프로퍼티가 하나도 없는 경우 true, 그렇지 않은 경우 false를 반환해주는 함수 isEmpty 생성
function isEmpty(obj) {
    // 전달될 객체 obj의 각각의 key 순회
    for (key in obj) {
        // 프로퍼티(key, value) 있는 경우 false 리턴 
        return false;
    }

    // 프로퍼티가 없는 경우 true 리턴
    return true;
}

// 객체 schedule 생성
let schedule = {};

// true
alert( isEmpty(schedule) ); 

// 객체 schedule의 "8:30"이라는 키에 "get up"이라는 값 할당
schedule["8:30"] = "get up";

// false
alert( isEmpty(schedule) ); 