// 1. String concatenation
console.log('my' + ' cat');     // 문자 + 문자를 이용하여 새로운 문자열
console.log('1' + 2);       // 문자 + 숫자를 이용하여 숫자를 문자로 변환
console.log(`string literals: 1 + 2 = ${1 + 2}`);   // ` 기호를 이용하여 문자열과 ${}를 이용하여 연산


// 2. Numeric operators
console.log(1 + 1);     // add
console.log(1 - 1);     // substract
console.log(1 / 1);     // divide
console.log(1 * 1);     // multiply
console.log(1 % 1);     // remainder
console.log(1 ** 1);    // exponentiation


// 3. Increment(++) and decrement(--) operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;


// 4. Assignment operators
let x = 3;
let y = 6;
x += y;     // x = x + y;
x -= y;
x *= y;
x /= y;


// 5. Comparison operators
console.log(10 < 6);        // less than
console.log(10 <= 6);       // less than or equal
console.log(10 > 6);        // greater than
console.log(10 >= 6);       // greater than or equal


// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;   // false

// || (or) => true를 찾으면 다른 조건을 찾지 않고 멈춘다.
console.log(`or: ${value1 || value2 || check()}`);  // or을 사용할 때 함수를 호출하는 요소를 제일 뒤에다가 배치하는 것이 효율적이다.

// && (and) => false를 찾으면 다른 조건을 찾지 않고 멈춘다.
console.log(`and: ${value1 && value2 && check()}`); // and을 사용할 때 함수를 호출하는 요소를 제일 뒤에다가 배치하는 것이 효율적이다.

// and는 간단하게 null을 검사할때도 쓰인다.
// nullableObject && nullableObject.something => nullableObject가 null 이면 뒤에 조건은 실행되지 않음.
// if (nullableObject != null) {
// nullableObject.something;
// }

// ! (not)
console.log(!value1);

function check(){
    for (let i = 0; i < 10; i++){
        // wasting time
        console.log("(ㅡ_ㅡ)");
    }
    return true;
}


// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion (type을 변경해서 검사를 한다.)
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion (type이 다르면 다른 것.)
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;
console.log(ellie1 == ellie2);      // false
console.log(ellie1 === ellie2);     // false
console.log(ellie1 === ellie3);     // true

// equality - puzzler
console.log(0 == false);            // true
console.log(0 === false);           // false
console.log('' == false);           // true
console.log('' === false);          // false
console.log(null == undefined);     // true
console.log(null === undefined);    // false



// 8. Conditional operators: if
// if, else if, else
const name = 'ellie';
if (name === 'ellie') {
    console.log('Welcome, Ellie!');
} else if (name === 'coder'){
    console.log('You are amazing coder');
} else {
    console.log('unknown');
}


// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no');


// 10. Switch statement
const brower = 'IE';
switch(brower) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}


// 11. Loops
// while loop, while the condition is truthy
// 조건식이 false가 나오기 전까지 무한 반복
let i = 3;
while (i > 0){ 
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

// for loop, for(begin; condition, step)
for(i = 3; i > 0; i--){
    console.log(`for: ${i}`);
}

for(let i = 3; i > 0; i = i - 2){
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++){
    for (let j = 0; j < 10; j++){
        console.log(`i: ${i}, j: ${j}`);
    }
}

// break => loop를 완전히 종료
// continue => 현재를 skip하고 다음 스텝으로 넘어가는 것

// Q1.
for (let i = 0; i <= 10; i++) {
    if(i % 2 !== 0){
        continue;
    }
    console.log(`even number: ${i}`);
}

// Q2.
for (let i = 0; i < 10; i++) {
    if(i === 8){
        break;
    }
    console.log(`print numbers: ${i}`);

}