//label 제어문
console.log("label을 이용한 구구단");
var arr = [[], []]; // 2차원 배열 선언

var signal = false; // 확인용 시그널을 만들어줌 (초기값 false)
console.log(signal); // 시그널 출력

label_gogo: for (var i = 2; i <= 9; i++) { // label을 이용해 반복문의 이름을 지어줌
    for (var k = 1; k <= 9; k++) {
        arr[[i][k]] = i * k; // 값 대입
        console.log(i + " * " + k + " = " + arr[[i][k]]); // 값 출력
        if (arr[[i][k]] == 18) { // 대입된 값이 30이면
            signal = true; // 시그널을 true로 바꿔주고
            console.log(signal); // 시그널 출력
            break label_gogo; // 구구단 반복문을 빠져나감
        }
    }
}


