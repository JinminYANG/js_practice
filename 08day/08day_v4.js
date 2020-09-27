let num = 10; // 전역 변수 num을 선언함.

function globalNum() {

    let num = 20; // 같은 이름의 지역 변수 num을 선언함.

    console.log("함수 내부에서 변수 num의 값은 " + num + "입니다."); // 지역 변수

}

globalNum(); // 함수 globalNum()을 호출함.

console.log("함수의 호출이 끝난 뒤 변수 num의 값은 " + num + "입니다."); // 전역 변수


