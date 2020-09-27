// x, y, name을 전역 변수로 선언
let x = 10, y = 20;

// sub()를 전역 함수로 선언
function sub() {
    return x - y;   // 전역 변수인 x, y에 접근해서 계산을 리턴
}
console.log(sub()); // 출력

// parentFunc()을 전역 함수로 선언함.
function parentFunc() {
    let x = 1, y = 2;  // 전역 변수와 같은 이름으로 선언하여 전역 변수의 범위를 제한
    function add() {   // add() 함수는 내부 함수로 선언
        return x + y;  // 전역 변수가 아닌 지역 변수 x, y에 접근해서 계산을 리턴
    }
    return add(); // add() 내부 함수를 리턴
}
console.log(parentFunc()); // 출력

