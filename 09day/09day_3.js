function mul(a, b) {
    // 인수가 한 개만 전달되었을 때 나머지 매개변수의 값을 undefined 값이 아닌 1로 설정함.

    b = (typeof b !== 'undefined') ? b : 1;
    // 만약 매개변수b가 'undefined'가 아니라면(true이면) b를 그대로 사용하고 'undefined'이면(false이면) 1을 대입

    return a * b;
}

console.log(mul(3, 4));
console.log(mul(3));


