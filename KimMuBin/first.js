// 과제 1-1
let styles = ['Jazz','Blues'];
console.log(styles);

//과제 1-2
styles.push('Rock-n-Roll');
console.log(styles);

//과제 1-3
let middle = (styles.length-1)/2;
styles[middle] = 'Classics';
console.log(styles);

//과제 1-4
styles.shift();
console.log(styles);

//과제 1-5
let arr = new Array('Rap','Reggae');
arr.push(...styles); //기존 요소를 복사하여 넣기 ( ... 사용 ) (( ... 은 구글링 해서 했어요 ^^..))
console.log(arr);