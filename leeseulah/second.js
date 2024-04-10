function sumInput() {
    let numArray = new Array();
    while (true) {
        let num = prompt("숫자를 입력하세요");
        if (isNaN(num) || num == " " || num == "" || num == null) {
            break;
        }
        numArray.push(num);
    }

    let sum = 0;
    for (let number of numArray) {
        sum += (parseInt)(number);
    }
    return sum;
}
