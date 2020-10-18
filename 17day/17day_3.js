let num = 256;

console.log( num.toString(2) );    // 2진법으로 변환한 결과값을 문자열로 반환

console.log( num.toString(8) );    // 8진법으로 변환한 결과값을 문자열로 반환

console.log( num.toString(10) );   // 10진법으로 변환한 결과값을 문자열로 반환

console.log( num.toString(16) );   // 16진법으로 변환한 결과값을 문자열로 반환

console.log( (num.toString(2) / 2) );
// 문자열을 숫자열로 나눴기 때문에 자동으로 10진수로 변환되어 산술 연산

