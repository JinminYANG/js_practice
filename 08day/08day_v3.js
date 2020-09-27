function globalNum() {

    num = 10; // var 키워드를 사용하지 않고 변수 num을 선언함.

    console.log("함수 내부에서 변수 num의 값은 " + num + "입니다."); // 10

}

globalNum();  // 함수 globalNum()을 호출함.

console.log("함수의 호출이 끝난 뒤 변수 num의 값은 " + num + "입니다."); // 10