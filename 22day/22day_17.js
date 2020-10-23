// Array.prototype - filter()

let arr = [-10, 5, 100, -20, 40];

function compareValue(value) {
    return value < 10;  // 10보다 작은 값들만 return
}

let lessTen = arr.filter(compareValue);
console.log( lessTen );

