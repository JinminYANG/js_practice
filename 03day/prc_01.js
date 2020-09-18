var num = 20; // 초기 값에 Number 타입의 20 대입
num = "이십"; // String 타입의 "이십"을 대입
var num; // 한 변수에 여러 번 대입할 수는 있지만, 변수의 재선언은 할 수 없다. 재선언문은 무시된다.

console.log(num);

console.log(10 + "문자열"); // 문자열 연결을 위해 숫자 10이 문자열로 변환된다.
console.log("3" * "5");     // 곱셈 연산을 위해 두 문자열이 모두 숫자로 변환된다.
console.log(1 - "문자열");  // NaN(Not a Number)

console.log(Number("10")); // 숫자 10
console.log(String("hello world")); // 문자열 "hello world"
console.log(Boolean(0));   // 불리언 false
console.log(Boolean(1));   // 불리언 true
console.log(Object(3));    // 명시적 타입과 값(3) 출력
console.log(Object("hi"));    // 명시적 타입과 값(hi) 출력


var i = Number(111.222);
console.log(i.toExponential(2));
console.log(i.toFixed(2));
console.log(i.toPrecision(2));

var k = Boolean(true);
console.log(k) // 불리언 "true"
console.log(String(k));     // 문자열 "true"
console.log(k.toString()); // 문자열 "true"


var date = new Date(); // Date 객체 생성
console.log(date); // date 객체를 출력
console.log(String(date)); // date 객체를 문자열로 변환하여 출력
console.log(date.toString()); // date 객체를 문자열로 변환하여 출력
console.log(date.getDate()); // 오늘은 18일
console.log(date.getDay()); // 오늘은 금요일 (5)
console.log(date.getFullYear()); // 2020
console.log(date.getMonth()); // 오늘은 9월 (0부터 시작이라 8이 출력됨)
console.log(date.getTime());  // 1600429480356 -> 1970년 1월 1일부터 현재까지의 시간을 밀리초 단위의 숫자로 반환함.


var text = "965.965";
console.log(Number(text)); // 소수점까지 반환
console.log(parseInt(text)); // 정수를 반환
console.log(parseFloat(text)); // 소수점까지 반환


console.log(Number(true));  // 숫자 1
console.log(Number(false)); // 숫자 0


