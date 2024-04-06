function isEmpty(obj){
    if (Object.keys(obj).length === 0){
        return true;
    }
    else{
        return false;
    }
}

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false