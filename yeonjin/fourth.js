const isEmpty = (obj) =>{
    for(let key in obj){
      return false;  
    }
    return true; 
  }
  const schedule = {};
  console.log(isEmpty(schedule));

  