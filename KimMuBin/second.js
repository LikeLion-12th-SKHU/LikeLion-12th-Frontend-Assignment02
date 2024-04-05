function sumInput(){
    let num = [];
    
    while(true){
        //window.prompt 는 
        //사용자로부터 텍스트를 입력 받기 위해 사용되는 함수이다.
        //이 함수를 호출하면 사용자에게 입력 대화 상자를 표시하고 텍스트 입력이 가능하다.
        let question = window.prompt("숫자를 입력해주세요");

        // isNaN 의 NaN 은 Not a Number 줄인말임 ( 이 부분이 안 돼서 구글링 했습니다. )
        if(question === null || question === "" || isNaN(question)){
         break;   
        }
        num.push(question);
    }

    let sum = 0;

    for(let i = 0; i < sumInput.length; i++){
        sum += sumInput[i];
    }
    return sum;
}
console.log(sumInput());
