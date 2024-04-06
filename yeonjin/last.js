let user = {}; //빈객체 user 만든다
console.log(user)

// user = { 
//     name:"john",   //user값에 키가 name 값이 john인 프로포티
//     surname:"smith"  //user에 키가 surname, 값이 Smith인 프로퍼티를 추가하세요.
// }


user.name = "John"; //user에 키가 name, 값이 John인 프로퍼티를 추가하세요.
console.log(user) //user에 키가 surname, 값이 Smith인 프로퍼티를 추가하세요.

user.surname ="smith";
console.log(user)

user.name="pete"; //name의 값을 Pete로 수정해보세요.
console.log(user)

delete user.name; //user에서 프로퍼티 name을 삭제하세요.
console.log(user)
