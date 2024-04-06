// 빈 객체 user를 만들기
let user = {};
console.log( user);

// user에 키가 name, 값이 John인 프로퍼티를 추가
user.name = 'John';
console.log( user);

// user에 키가 surname, 값이 Smith인 프로퍼티를 추가
user.surname = 'Smith';
console.log(user);

// name의 값을 Pete로 수정
user.name = 'Pete';
console.log(user);

// user에서 프로퍼티 name을 삭제
delete user.name;
console.log(user);