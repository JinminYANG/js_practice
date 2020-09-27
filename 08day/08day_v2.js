let num = 10; // 전역 변수 num을 선언함.

function globalNum() {

    console.log("함수 내부에서 변수 num의 값은 " + num + "입니다."); // 전역 변수에 대입된 값 출력

    num = 20; // 전역 변수 num의 값을 함수 내부에서 변경함.

}

globalNum();  // 함수 globalNum()을 호출함.

console.log("함수의 호출이 끝난 뒤 변수 num의 값은 " + num + "입니다."); // 변경된 전역 변수 값 출력

