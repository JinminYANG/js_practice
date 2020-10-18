let x = 100 - "10";     // "10"은 자동으로 숫자로 변환되어 계산된다
let y = 100 - "문자열"; // "문자열"은 숫자로 변환할 수 없기 때문에 NaN을 반환한다
let z = 0 / 0;          // 0을 0으로 나눌 수 없기 때문에 NaN을 반환한다

console.log(x);
console.log(y);
console.log(z);


