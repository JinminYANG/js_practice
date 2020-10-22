console.log( new Date("Feb 19 1982") );        // MMM DD YYYY

console.log( new Date("19 Feb 1982") );        // DD MMM YYYY

console.log( new Date("February 19 1982") );   // 월의 축약형 뿐만 아니라 전체 단어도 인식함.

console.log( new Date("FEBRUARY, 19, 1982") ); // 쉼표는 무시되며, 대소문자의 구분은 없음.
console.log( new Date(  "yyyy-MM-dd HH : mm : ss" ) ); // 쉼표는 무시되며, 대소문자의 구분은 없음.