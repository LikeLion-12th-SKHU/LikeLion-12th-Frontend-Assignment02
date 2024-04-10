let user = {}; //user라는 비어있는 객체 생성
user.name = "John"; //user객체에 name을 추가하고 John으로 설정
user.surname = "Smith"; //user객체에 surname을 추가하고 Smith로 설정
user.name = "Pete"; //user객체의 name값을 Pete로 수정
delete user.name; //user객체에서 name속성을 삭제
//실행 후에는 user객체가 surname: "Smith"로 수정됨 -> user는 surname의 속성만 가지고 있음(name삭제됨)