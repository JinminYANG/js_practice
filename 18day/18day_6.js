console.log( Number.isSafeInteger(10) );
console.log( Number.isSafeInteger(Math.pow(2, 53) - 1) );
console.log( Number.isSafeInteger(Math.pow(2, 53)) );
console.log( Number.isSafeInteger(Infinity) );
console.log( Number.isSafeInteger(NaN) );
console.log( Number.isSafeInteger(3.14) );

