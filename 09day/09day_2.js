function addNum() {
    let sum = 0;   // 합을 저장할 변수 sum을 선언
    for (let i = 0; i < arguments.length; i++) {   // 전달받은 인수의 총 수만큼 반복
        sum += arguments[i];   // 전달받은 각각의 인수를 sum에 더함
    }

    return sum;
}

console.log(addNum(1, 2, 3));
console.log(addNum(1, 2));
console.log(addNum(1));
console.log(addNum());
console.log(addNum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));


