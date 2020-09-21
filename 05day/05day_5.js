var arr = [];     // 비어있는 배열을 생성함.

arr["하나"] = 1;  // 숫자 인덱스 대신에 문자열을 인덱스로 배열 요소를 추가함.
arr["참"] = true;
arr["자바스크립트"] = "JavaScript";

console.log(arr["참"]);  // 문자열을 인덱스로 배열 요소에 접근할 수 있음.
console.log(arr.length); // 연관 배열은 Array 객체가 아니므로 length 프로퍼티의 값이 0임.
console.log(arr[0]);     // undefined


