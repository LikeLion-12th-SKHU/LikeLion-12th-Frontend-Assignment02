let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  //salaries라는 객체를 선언 후, 각각 값을 넣어줌
  
  let sum = 0; //sum변수의 초기값을 0으로 설정
  for (let key in salaries) {
    sum += salaries[key];
  } 
  //salaries는 john, ann, pete에 해당하는데 for... in 루프를 통해 각각의 이름(john, ann, pete)을 얻고 그 이름을 사용해 해당 사람의 급여를 가져와 sum에 더함 
  
  alert(sum); //총 급여를 알림창으로 나타냄