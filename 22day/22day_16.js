// Array.prototype - map()

let arr = [1, -2, 3, -4];
// 배열 arr의 각 요소마다 Math.abs() 함수가 호출되고 그 결괏값이 배열로 저장된다.

let absoluteValues = arr.map(Math.abs);

console.log( absoluteValues );

