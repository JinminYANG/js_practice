// Array.prototype - every()

let arr = [-10, 5, -20, 4];

function compareValue(value) {
    return value < 10; // 배열의 모든 요소가 10보다 작은지
}

console.log( arr.every(compareValue) );  // 배열 arr의 요소들이 10보다 작은 값들만 있다

