console.log( Number.isFinite(0) );
console.log( Number.isFinite(3e45) );
console.log( Number.isFinite(Infinity) );
console.log( Number.isFinite(NaN) );

// 다음은 전역 함수인 isFinite()에서 잘못된 결과를 반환하는 예제임.
console.log( isFinite("0") );
console.log( isFinite(null) );

// Number.isFinite() 메소드에서는 맞는 결과를 반환하고 있음.
console.log( Number.isFinite("0") );
console.log( Number.isFinite(null) );

