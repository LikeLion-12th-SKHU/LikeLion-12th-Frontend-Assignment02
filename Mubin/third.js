let salaries = 
{
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;

// 객체에서 값을 뺴서 쓰고 싶어서, MDN에서 함수를 검색하여 활용해봤음.
for ( let S in salaries)
{
    sum += salaries[S];
}
console.log(sum);