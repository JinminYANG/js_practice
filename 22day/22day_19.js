// Array.prototype - some()

let arr = [10, 25, -20, 14];

function compareValue(value) {
    return value < 10; // 배열 요소 중 -20만이 10보다 작다
}

console.log( arr.some(compareValue) );

