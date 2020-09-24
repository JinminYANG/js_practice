function sqr(x) {                // 제곱의 값을 구하는 함수 sqr를 정의함.
    return x * x;
}

var sqrNum = sqr;                // 변수 sqrNum에 함수 sqr을 대입함.

console.log(sqr(4)); // 함수 sqr을 호출함.

console.log(sqrNum(4));       // 변수 sqrNum를 함수처럼 호출함.


