var firstNum = 10;     // 소수점을 사용하지 않은 표현
var secondNum = 10.00; // 소수점을 사용한 표현
var thirdNum = 10e6;   // 10000000
var fourthNum = 10e-6; // 0.00001

console.log(firstNum);
console.log(secondNum);
console.log(thirdNum);
console.log(fourthNum);


var firstStr = "이것은 문자열입니다.";      // 큰따옴표를 사용한 문자열
var secondStr = '이것은 문자열입니다.';     // 작은따옴표를 사용한 문자열
var thirdStr = "나의 이름은 '홍길동'이야.";  // 작은따옴표는 큰따옴표로 둘러싸인 문자열에만 포함될 수 있음.
var fourthStr = '나의 이름은 "홍길동"이야.'; // 큰따옴표는 작은따옴표로 둘러싸인 문자열에만 포함될 수 있음.

console.log(firstStr);
console.log(secondStr);
console.log(thirdStr);
console.log(fourthStr);


var num1 = 10;
var num2 = 11;
var num3 = 10;

console.log(num1==num2);
console.log(num1==num3);

var sym = Symbol("javascript");  // symbol 타입
var symObj = Object(sym);        // object 타입

console.log(sym);
console.log(symObj);


var num;          // 초기화하지 않았으므로 undefined 값을 반환함.
var str = null;   // object 타입의 null 값

console.log(typeof num);
console.log(str);
console.log(typeof str);
console.log(typeof numStr); // 정의되지 않은 변수에 접근하면 undefined 값을 반환함.

console.log(null == undefined); // true
console.log(null === undefined); // false
