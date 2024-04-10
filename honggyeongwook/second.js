function sumInput(){

    let array = []

    while(true){

        let sign = window.prompt("숫자를 입력해주세요.","");
    
        if(sign === null || sign === ""){
            break;
        }

        array.push(+sign);

    }
    
    let sum = 0;

    for (let number of array){
        sum += number;
    }

    return sum;

}

console.log(sumInput());
