// Array.prototype - concat()

let arr = [1, true, "JavaScript"];

console.log( arr.concat([2, false, "문자열"]) );
console.log( arr.concat([2], [3, 4]) );     // 2개 이상의 배열도 한 번에 합칠 수 있다
console.log( arr.concat("다섯", [6, 7]) );   // 값과 배열도 한 번에 합칠 수 있다


