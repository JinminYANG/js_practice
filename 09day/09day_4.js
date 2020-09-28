// 첫 번째 인수를 변수 firstNum에 저장하고 나머지 인수들은 배열 restArgs에 저장
function sub(firstNum, ...restArgs) {
    for(var i = 0; i < restArgs.length; i++) {   // 나머지 인수를 반복
        firstNum -= restArgs[i]; // 첫 번째 인수에서 나머지 인수(반복)를 빼서 대입
    }
    return firstNum;
}

console.log(sub(10, 2, 3));
console.log(sub(10, 1, 5, 8));


