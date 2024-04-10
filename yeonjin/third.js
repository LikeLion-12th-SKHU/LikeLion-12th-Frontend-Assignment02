let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  
  let sum = 0;
  
  for (let 팀원총월급 in salaries) {
    sum += salaries[팀원총월급];
  }
  
  console.log(sum);  
  