//for문
console.log("일반적인 구구단");
var arr = [[], []]; // 2차원 배열 선언
var signal2 = false; // 확인용 시그널을 만들어줌 (초기값 false)
console.log(signal2); // 시그널 출력
for (var i = 2; i <= 9; i++) { // 피승수 선언과 반복문 시작
    for (var k = 1; k <= 9; k++) { // 승수 선언과 반복문 시작
        arr[[i][k]] = i * k; // 값 대입
        console.log(i + "*" + k + "=" + arr[[i][k]]); // 값 출력
        if (arr[[i][k]] == 18) {
            signal2 = true; // 시그널을 true로 바꿔주고
            console.log(signal2); // 시그널 출력
            break; // 승수 선언하는 반복문을 빠져나감
        }
    }
    if (signal2) { // 신호가 true라면
        break; // 피승수 반복문을 빠져나감
    }
}

