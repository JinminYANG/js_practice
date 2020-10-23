// Array - Array.from()

function arrayFrom() {
    return Array.from(arguments);
}
console.log( Array.from(arrayFrom(1, 2, 3)) );

let myMap = new Map([[1, 2], [3, 4]]);
console.log( Array.from(myMap) );

console.log( Array.from("JavaScript") );

