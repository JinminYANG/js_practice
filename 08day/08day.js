function localNum() {

    let num = 10; // 지역 변수 num에 숫자 10을 대입함.

    console.log("함수 내부에서 변수 num의 타입은 " + typeof num + "입니다."); // number

}

localNum();       // 함수 localNum()을 호출함.

console.log("함수의 호출이 끝난 뒤 변수 num의 타입은 " + typeof num + "입니다."); // undefined


